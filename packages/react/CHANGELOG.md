# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [13.1.0](https://github.com/IBM/kui/compare/v4.5.0...v13.1.0) (2023-02-03)


### Bug Fixes

* add side-effect: false ([5120700](https://github.com/IBM/kui/commit/5120700))
* command history is erratic for first tab ([36cb9b4](https://github.com/IBM/kui/commit/36cb9b4))
* optimize load time by avoiding loading patternfly and plugin-client-common index.js ([e10829a](https://github.com/IBM/kui/commit/e10829a))
* **packages/core:** Events api created and typedoc documentation generated ([531461d](https://github.com/IBM/kui/commit/531461d))
* Switching Carbon tabs can cause content to scroll off-viewport ([51a2aad](https://github.com/IBM/kui/commit/51a2aad)), closes [#6014](https://github.com/IBM/kui/issues/6014)


### chore

* update to react 18 ([277095f](https://github.com/IBM/kui/commit/277095f))


### Features

* allow table drilldown to a new window ([96d1d0e](https://github.com/IBM/kui/commit/96d1d0e))
* background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
* Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
* improved support for passing through window titles for new windows ([670d429](https://github.com/IBM/kui/commit/670d429))
* Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
* react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
* simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)


### BREAKING CHANGES

* `at-kui-shell/react` will now pull in react v18.
* we now pre-allocate execUUID on when the block is first mounted (these are known as Active blocks, because they have an active input). Previously, we relied on kui core/repl/exec to allocate upon run. This leads to a race condition, where command handlers expect to be able to communicate with the views based on an execUUID... but the views may not be mounted before the command handlers start... An example of this was the PTY. pty/client in plugin-bash-like sends pty streaming output ... the Output component (in plugin-client-common) is supposed to be the receiver, but it only listens after it is mounted). With this PR, we pre-allocate the execUUID, and mount the Output block even on Active blocks.
* this PR removes plugins/plugin-client-default





# [13.0.0](https://github.com/IBM/kui/compare/v4.5.0...v13.0.0) (2023-01-13)


### Bug Fixes

* add side-effect: false ([5120700](https://github.com/IBM/kui/commit/5120700))
* command history is erratic for first tab ([36cb9b4](https://github.com/IBM/kui/commit/36cb9b4))
* optimize load time by avoiding loading patternfly and plugin-client-common index.js ([e10829a](https://github.com/IBM/kui/commit/e10829a))
* **packages/core:** Events api created and typedoc documentation generated ([531461d](https://github.com/IBM/kui/commit/531461d))
* Switching Carbon tabs can cause content to scroll off-viewport ([51a2aad](https://github.com/IBM/kui/commit/51a2aad)), closes [#6014](https://github.com/IBM/kui/issues/6014)


### chore

* update to react 18 ([277095f](https://github.com/IBM/kui/commit/277095f))


### Features

* allow table drilldown to a new window ([96d1d0e](https://github.com/IBM/kui/commit/96d1d0e))
* background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
* Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
* improved support for passing through window titles for new windows ([670d429](https://github.com/IBM/kui/commit/670d429))
* Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
* react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
* simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)


### BREAKING CHANGES

* `at-kui-shell/react` will now pull in react v18.
* we now pre-allocate execUUID on when the block is first mounted (these are known as Active blocks, because they have an active input). Previously, we relied on kui core/repl/exec to allocate upon run. This leads to a race condition, where command handlers expect to be able to communicate with the views based on an execUUID... but the views may not be mounted before the command handlers start... An example of this was the PTY. pty/client in plugin-bash-like sends pty streaming output ... the Output component (in plugin-client-common) is supposed to be the receiver, but it only listens after it is mounted). With this PR, we pre-allocate the execUUID, and mount the Output block even on Active blocks.
* this PR removes plugins/plugin-client-default





# [12.2.0](https://github.com/IBM/kui/compare/v4.5.0...v12.2.0) (2022-10-10)


### Bug Fixes

* **packages/core:** Events api created and typedoc documentation generated ([531461d](https://github.com/IBM/kui/commit/531461d))
* Switching Carbon tabs can cause content to scroll off-viewport ([51a2aad](https://github.com/IBM/kui/commit/51a2aad)), closes [#6014](https://github.com/IBM/kui/issues/6014)


### Features

* allow table drilldown to a new window ([96d1d0e](https://github.com/IBM/kui/commit/96d1d0e))
* background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
* Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
* improved support for passing through window titles for new windows ([670d429](https://github.com/IBM/kui/commit/670d429))
* Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
* react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
* simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)


### BREAKING CHANGES

* this PR removes plugins/plugin-client-default





# [12.0.0](https://github.com/IBM/kui/compare/v4.5.0...v12.0.0) (2022-09-06)

### Bug Fixes

- **packages/core:** Events api created and typedoc documentation generated ([531461d](https://github.com/IBM/kui/commit/531461d))
- Switching Carbon tabs can cause content to scroll off-viewport ([51a2aad](https://github.com/IBM/kui/commit/51a2aad)), closes [#6014](https://github.com/IBM/kui/issues/6014)

### Features

- allow table drilldown to a new window ([96d1d0e](https://github.com/IBM/kui/commit/96d1d0e))
- background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
- Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
- improved support for passing through window titles for new windows ([670d429](https://github.com/IBM/kui/commit/670d429))
- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [11.4.0](https://github.com/IBM/kui/compare/v4.5.0...v11.4.0) (2022-02-25)

### Bug Fixes

- **packages/core:** Events api created and typedoc documentation generated ([531461d](https://github.com/IBM/kui/commit/531461d))
- Switching Carbon tabs can cause content to scroll off-viewport ([51a2aad](https://github.com/IBM/kui/commit/51a2aad)), closes [#6014](https://github.com/IBM/kui/issues/6014)

### Features

- allow table drilldown to a new window ([96d1d0e](https://github.com/IBM/kui/commit/96d1d0e))
- background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
- Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [11.3.0](https://github.com/IBM/kui/compare/v4.5.0...v11.3.0) (2022-02-22)

### Bug Fixes

- **packages/core:** Events api created and typedoc documentation generated ([531461d](https://github.com/IBM/kui/commit/531461d))
- Switching Carbon tabs can cause content to scroll off-viewport ([51a2aad](https://github.com/IBM/kui/commit/51a2aad)), closes [#6014](https://github.com/IBM/kui/issues/6014)

### Features

- allow table drilldown to a new window ([96d1d0e](https://github.com/IBM/kui/commit/96d1d0e))
- background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
- Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [11.2.0](https://github.com/IBM/kui/compare/v4.5.0...v11.2.0) (2022-02-09)

### Bug Fixes

- **packages/core:** Events api created and typedoc documentation generated ([531461d](https://github.com/IBM/kui/commit/531461d))
- Switching Carbon tabs can cause content to scroll off-viewport ([51a2aad](https://github.com/IBM/kui/commit/51a2aad)), closes [#6014](https://github.com/IBM/kui/issues/6014)

### Features

- allow table drilldown to a new window ([96d1d0e](https://github.com/IBM/kui/commit/96d1d0e))
- background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
- Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [11.1.0](https://github.com/IBM/kui/compare/v4.5.0...v11.1.0) (2022-01-24)

### Bug Fixes

- **packages/core:** Events api created and typedoc documentation generated ([531461d](https://github.com/IBM/kui/commit/531461d))
- Switching Carbon tabs can cause content to scroll off-viewport ([51a2aad](https://github.com/IBM/kui/commit/51a2aad)), closes [#6014](https://github.com/IBM/kui/issues/6014)

### Features

- allow table drilldown to a new window ([96d1d0e](https://github.com/IBM/kui/commit/96d1d0e))
- background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
- Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [11.0.0](https://github.com/IBM/kui/compare/v4.5.0...v11.0.0) (2022-01-18)

### Bug Fixes

- **packages/core:** Events api created and typedoc documentation generated ([531461d](https://github.com/IBM/kui/commit/531461d))
- Switching Carbon tabs can cause content to scroll off-viewport ([51a2aad](https://github.com/IBM/kui/commit/51a2aad)), closes [#6014](https://github.com/IBM/kui/issues/6014)

### Features

- allow table drilldown to a new window ([96d1d0e](https://github.com/IBM/kui/commit/96d1d0e))
- background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
- Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [10.7.0](https://github.com/IBM/kui/compare/v4.5.0...v10.7.0) (2021-10-12)

### Bug Fixes

- Switching Carbon tabs can cause content to scroll off-viewport ([51a2aad](https://github.com/IBM/kui/commit/51a2aad)), closes [#6014](https://github.com/IBM/kui/issues/6014)

### Features

- allow table drilldown to a new window ([96d1d0e](https://github.com/IBM/kui/commit/96d1d0e))
- background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
- Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [10.6.0](https://github.com/IBM/kui/compare/v4.5.0...v10.6.0) (2021-09-27)

### Bug Fixes

- Switching Carbon tabs can cause content to scroll off-viewport ([51a2aad](https://github.com/IBM/kui/commit/51a2aad)), closes [#6014](https://github.com/IBM/kui/issues/6014)

### Features

- allow table drilldown to a new window ([96d1d0e](https://github.com/IBM/kui/commit/96d1d0e))
- background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
- Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [10.5.0](https://github.com/IBM/kui/compare/v4.5.0...v10.5.0) (2021-09-13)

### Bug Fixes

- Switching Carbon tabs can cause content to scroll off-viewport ([51a2aad](https://github.com/IBM/kui/commit/51a2aad)), closes [#6014](https://github.com/IBM/kui/issues/6014)

### Features

- allow table drilldown to a new window ([96d1d0e](https://github.com/IBM/kui/commit/96d1d0e))
- background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
- Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [10.4.0](https://github.com/IBM/kui/compare/v4.5.0...v10.4.0) (2021-06-17)

### Bug Fixes

- Switching Carbon tabs can cause content to scroll off-viewport ([51a2aad](https://github.com/IBM/kui/commit/51a2aad)), closes [#6014](https://github.com/IBM/kui/issues/6014)

### Features

- allow table drilldown to a new window ([96d1d0e](https://github.com/IBM/kui/commit/96d1d0e))
- background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
- Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [10.2.0](https://github.com/IBM/kui/compare/v10.1.1-dev-20210223-062039...v10.2.0) (2021-02-24)

**Note:** Version bump only for package @kui-shell/react

## [10.1.1-dev-20210223-062039](https://github.com/IBM/kui/compare/v10.1.1-dev-20210221-141404...v10.1.1-dev-20210223-062039) (2021-02-23)

**Note:** Version bump only for package @kui-shell/react

## [10.1.1-dev-20210221-141404](https://github.com/IBM/kui/compare/v10.1.1-dev-20210219-194602...v10.1.1-dev-20210221-141404) (2021-02-21)

**Note:** Version bump only for package @kui-shell/react

## [10.1.1-dev-20210219-194602](https://github.com/IBM/kui/compare/v10.1.1-dev-20210218-202429...v10.1.1-dev-20210219-194602) (2021-02-20)

**Note:** Version bump only for package @kui-shell/react

## [10.1.1-dev-20210218-202429](https://github.com/IBM/kui/compare/v10.1.1-dev-20210218-164854...v10.1.1-dev-20210218-202429) (2021-02-19)

**Note:** Version bump only for package @kui-shell/react

## [10.1.1-dev-20210218-164854](https://github.com/IBM/kui/compare/v10.1.1-dev-20210218-131731...v10.1.1-dev-20210218-164854) (2021-02-18)

**Note:** Version bump only for package @kui-shell/react

## [10.1.1-dev-20210218-131731](https://github.com/IBM/kui/compare/v10.1.1-dev-20210216-094031...v10.1.1-dev-20210218-131731) (2021-02-18)

**Note:** Version bump only for package @kui-shell/react

## [10.1.1-dev-20210216-094031](https://github.com/IBM/kui/compare/v10.1.1-dev-20210215-213847...v10.1.1-dev-20210216-094031) (2021-02-16)

**Note:** Version bump only for package @kui-shell/react

## [10.1.1-dev-20210215-213847](https://github.com/IBM/kui/compare/v10.1.1-dev-20210215-184959...v10.1.1-dev-20210215-213847) (2021-02-16)

**Note:** Version bump only for package @kui-shell/react

## [10.1.1-dev-20210215-184959](https://github.com/IBM/kui/compare/v10.1.1-dev-20210215-161454...v10.1.1-dev-20210215-184959) (2021-02-15)

**Note:** Version bump only for package @kui-shell/react

## [10.1.1-dev-20210215-161454](https://github.com/IBM/kui/compare/v10.1.1-dev-20210211-145439...v10.1.1-dev-20210215-161454) (2021-02-15)

**Note:** Version bump only for package @kui-shell/react

## [10.1.1-dev-20210211-145439](https://github.com/IBM/kui/compare/v4.5.0...v10.1.1-dev-20210211-145439) (2021-02-11)

### Bug Fixes

- Switching Carbon tabs can cause content to scroll off-viewport ([51a2aad](https://github.com/IBM/kui/commit/51a2aad)), closes [#6014](https://github.com/IBM/kui/issues/6014)

### Features

- background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
- Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

## [10.0.1](https://github.com/IBM/kui/compare/v4.5.0...v10.0.1) (2021-02-01)

### Bug Fixes

- Switching Carbon tabs can cause content to scroll off-viewport ([51a2aad](https://github.com/IBM/kui/commit/51a2aad)), closes [#6014](https://github.com/IBM/kui/issues/6014)

### Features

- background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
- Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [9.3.0](https://github.com/IBM/kui/compare/v4.5.0...v9.3.0) (2020-12-11)

### Bug Fixes

- Switching Carbon tabs can cause content to scroll off-viewport ([51a2aad](https://github.com/IBM/kui/commit/51a2aad)), closes [#6014](https://github.com/IBM/kui/issues/6014)

### Features

- background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
- Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [9.2.0](https://github.com/IBM/kui/compare/v4.5.0...v9.2.0) (2020-11-25)

### Bug Fixes

- Switching Carbon tabs can cause content to scroll off-viewport ([51a2aad](https://github.com/IBM/kui/commit/51a2aad)), closes [#6014](https://github.com/IBM/kui/issues/6014)

### Features

- background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
- Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [9.1.0](https://github.com/IBM/kui/compare/v4.5.0...v9.1.0) (2020-10-26)

### Features

- background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
- Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [9.0.0](https://github.com/IBM/kui/compare/v4.5.0...v9.0.0) (2020-10-08)

### Features

- background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
- Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [8.12.0](https://github.com/IBM/kui/compare/v4.5.0...v8.12.0) (2020-08-20)

### Features

- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [8.11.0](https://github.com/IBM/kui/compare/v4.5.0...v8.11.0) (2020-07-21)

### Features

- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [8.10.0](https://github.com/IBM/kui/compare/v4.5.0...v8.10.0) (2020-06-17)

### Features

- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [8.9.0](https://github.com/IBM/kui/compare/v4.5.0...v8.9.0) (2020-06-09)

### Features

- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [8.7.0](https://github.com/IBM/kui/compare/v4.5.0...v8.7.0) (2020-05-08)

### Features

- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

## [8.6.1](https://github.com/IBM/kui/compare/v4.5.0...v8.6.1) (2020-04-25)

### Features

- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [8.6.0](https://github.com/IBM/kui/compare/v4.5.0...v8.6.0) (2020-04-23)

### Features

- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [8.5.0](https://github.com/IBM/kui/compare/v4.5.0...v8.5.0) (2020-04-19)

### Features

- Kui client should support self-bootstrapping of Kui ([3bbf8e8](https://github.com/IBM/kui/commit/3bbf8e8)), closes [#4277](https://github.com/IBM/kui/issues/4277)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

## [8.4.2](https://github.com/IBM/kui/compare/v4.5.0...v8.4.2) (2020-04-10)

### Features

- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

## [8.4.1](https://github.com/IBM/kui/compare/v4.5.0...v8.4.1) (2020-04-10)

### Features

- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [8.4.0](https://github.com/IBM/kui/compare/v4.5.0...v8.4.0) (2020-04-10)

### Features

- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [8.1.0](https://github.com/IBM/kui/compare/v4.5.0...v8.1.0) (2020-04-04)

### Features

- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [8.0.0](https://github.com/IBM/kui/compare/v4.5.0...v8.0.0) (2020-03-20)

### Features

- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default
