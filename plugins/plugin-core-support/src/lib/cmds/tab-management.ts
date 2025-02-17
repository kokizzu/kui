/*
 * Copyright 2018 The Kubernetes Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { NewTabRequestEvent, StatusStripeChangeEvent } from '@kui-shell/core/mdist/api/Events'
import type { KResponse, Registrar, Tab } from '@kui-shell/core'

// TODO fixme; this is needed by a few tests
export const tabButtonSelector = '#new-tab-button'

/**
 * Close the current tab
 *
 */
async function closeTab(tab: Tab, closeAllSplits: boolean) {
  const [{ getPrimaryTabId }, { eventBus }] = await Promise.all([
    import('@kui-shell/core/mdist/api/Tab'),
    import('@kui-shell/core/mdist/api/Events')
  ])
  const uuid = closeAllSplits ? getPrimaryTabId(tab) : tab.uuid
  eventBus.emitWithTabId('/tab/close/request', uuid, tab)
  return true
}

/**
 * The goal here is to offer a simple command structure for managing tabs
 *
 */
export default function plugin(commandTree: Registrar) {
  commandTree.listen('/tab/switch', async ({ argvNoOptions }) => {
    const { eventBus } = await import('@kui-shell/core/mdist/api/Events')
    const idx = parseInt(argvNoOptions[argvNoOptions.length - 1], 10)
    eventBus.emit('/tab/switch/request', idx - 1)
    return true
  })

  /**
   * Create and initialize a new tab
   *
   */
  commandTree.listen<
    KResponse,
    Pick<NewTabRequestEvent['tabs'][0], 'cmdline' | 'onClose'> & {
      /** Set the status stripe decorations */
      'status-stripe-type'?: StatusStripeChangeEvent['type']
      'status-stripe-message'?: string | string[]

      /** Tab titles; comma separated for multi-open */
      title?: string

      /** Open with qexec? */
      quiet?: boolean
      q?: boolean

      /** Open tab only if the given Kui command returns true */
      if?: string

      /** Open tab only if the given Kui command returns false */
      ifnot?: string

      /** Open tab in the background? I.e. without switching to it */
      bg?: boolean
    }
  >(
    '/tab/new',
    async args => {
      // handle conditional tab creation
      if (args.parsedOptions.if) {
        // conditional opening request
        const condition = await args.REPL.qexec<boolean>(args.parsedOptions.if)
        if (!condition) {
          return true
        }
      }
      if (args.parsedOptions.ifnot) {
        // conditional opening request
        const condition = await args.REPL.qexec<boolean>(args.parsedOptions.ifnot)
        if (condition) {
          return true
        }
      }

      // status stripe decorations
      const message =
        args.parsedOptions['status-stripe-message'] ||
        (args.execOptions.data ? args.execOptions.data['status-stripe-message'] : undefined)
      const messages = Array.isArray(message) ? message : [message]
      const statusStripeDecorations = messages.map(message => ({
        type: args.parsedOptions['status-stripe-type'],
        message
      }))

      const titles = args.parsedOptions.title ? args.parsedOptions.title.split(/,/) : undefined

      // this is our response to the user if the tab was created
      // successfully
      const { eventBus } = await import('@kui-shell/core/mdist/api/Events')
      const { i18n } = await import('@kui-shell/core/mdist/api/i18n')
      const strings = i18n('plugin-core-support')
      const ok = {
        content: !titles
          ? strings('Created a new tab')
          : Array.isArray(titles) && titles.length > 1
          ? strings('Created new tabs', args.parsedOptions.title)
          : strings('Created a new tab named X', Array.isArray(titles) ? titles[0] : titles),
        contentType: 'text/markdown'
      }

      if (args.parsedOptions.cmdline) {
        // caller wants to invoke a given command line in the new tab
        return new Promise(resolve => {
          eventBus.emit('/tab/new/request', {
            background: args.parsedOptions.bg,
            tabs: (titles || ['']).map((title, idx) => ({
              title,
              statusStripeDecoration: statusStripeDecorations[idx],
              cmdline: args.parsedOptions.cmdline,
              exec: args.parsedOptions.quiet ? 'qexec' : 'pexec',
              onClose: args.parsedOptions.onClose
            }))
          })

          resolve(ok)
        })
      } else {
        // default case: tab opens without invoking a command line
        eventBus.emit('/tab/new/request', {
          background: args.parsedOptions.bg,
          tabs: statusStripeDecorations.map((statusStripeDecoration, idx) => ({
            statusStripeDecoration,
            title: titles ? titles[idx] : undefined,
            onClose: args.parsedOptions.onClose
          }))
        })
        return ok
      }
    },
    {
      usage: {
        optional: [
          { name: '--cmdline', alias: '-c', docs: 'Invoke a command in the new tab' },
          { name: '--quiet', alias: '-q', boolean: true, docs: 'Execute the given command line quietly' },
          { name: '--bg', alias: '-b', boolean: true, docs: 'Create, but do not switch to this tab' },
          { name: '--status-stripe-type', docs: 'Desired status stripe coloration', allowed: ['default', 'blue'] },
          { name: '--status-stripe-message', docs: 'Desired status stripe message' },
          { name: '--title', alias: '-t', docs: 'Title to display in the UI' }
        ]
      },
      flags: {
        boolean: ['bg', 'b', 'quiet', 'q']
      }
    }
  )

  commandTree.listen<KResponse, { A: boolean }>(
    '/tab/close',
    ({ tab, parsedOptions }) => {
      return closeTab(tab, parsedOptions.A)
    },
    { flags: { boolean: ['A'] } }
  )
}
