# Playwright Driver · [![NPM Version](https://img.shields.io/npm/v/@dlenroc/appium-playwright-driver?cacheSeconds=86400)](https://www.npmjs.com/package/@dlenroc/appium-playwright-driver) ![Node.js Version](https://img.shields.io/node/v/@dlenroc/appium-playwright-driver) [![Node.js CI](https://github.com/dlenroc/appium-playwright-driver/actions/workflows/nodejs.yml/badge.svg?branch=main)](https://github.com/dlenroc/appium-playwright-driver/actions/workflows/nodejs.yml)

Appium Playwright is a W3C WebDriver that allows you to use Playwright through any WebDriver client. If you are interested in the project `Star`-it, or if you have found a problem, please report or suggest a solution for it

<p align="center">
  <img width="400" src="https://user-images.githubusercontent.com/18662534/131267151-09ddcd1f-a7e7-41f4-86ec-e0ca097a6dee.png">
</p>

## Installation

Install `playwright` (if not installed)

```sh
npm install -g playwright
```

Install `playwright-driver` driver

```sh
npx appium@next driver install --source npm @dlenroc/appium-playwright-driver

# Output
#   Driver playwright@<versio> successfully installed
#     - automationName: Playwright
#     - platformNames: ["chromium","firefox","webkit"]
```

Run Appium

```sh
npx appium@next server

# Output:
#   Appium REST http interface listener started on 0.0.0.0:4723
#   Available drivers:
#     - playwright@<version> (automationName 'Playwright')
```

## Capabilities

### Appium Capabilities

| Capability              | Required |  Type  | Description          |
| ----------------------- | :------: | :----: | -------------------- |
| `appium:automationName` |    +     | string | Must be `playwright` |

### W3C Capabilities

| Capability                | Required |  Type   | Description                                                                                                           |
| ------------------------- | :------: | :-----: | --------------------------------------------------------------------------------------------------------------------- |
| `platformName`            |    +     | string  | Must be `chromium`, `firefox` or `webkit`                                                                             |
| `acceptInsecureCerts`     |    -     | boolean | Indicates whether untrusted and self-signed TLS certificates are implicitly trusted on navigation                     |
| `pageLoadStrategy`        |    -     | string  | Defines the current session’s page load strategy<br>Besides the standard values, it also supports `networkidle`       |
| `timeouts`                |    -     | object  | Describes the timeouts imposed on certain session operations                                                          |
| `unhandledPromptBehavior` |    -     | string  | Describes [prompt handler](https://www.w3.org/TR/webdriver/#dfn-user-prompt-handler)<br>Default: `dismiss and notify` |

### Playwright Capabilities

| Capability          | Required |  Type  | Description                                                                                                                                |
| ------------------- | :------: | :----: | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `playwright:browser` |    -     | object | Browser launch options, see [`browserType.launch`](https://playwright.dev/docs/next/api/class-browsertype#browser-type-launch) for details |
| `playwright:context` |    -     | object | Browser context options, see [`browser.newContext`](https://playwright.dev/docs/next/api/class-browser#browser-new-context) for details    |

## Commands

| Command                                                      | Ref                                                                  | Description             |
| ------------------------------------------------------------ | -------------------------------------------------------------------- | ----------------------- |
| [active](src/commands/active.ts)                             | [here](https://www.w3.org/TR/webdriver/#dfn-get-active-element)      | Get Active Element      |
| [back](src/commands/back.ts)                                 | [here](https://www.w3.org/TR/webdriver/#dfn-back)                    | Back                    |
| [clear](src/commands/clear.ts)                               | [here](https://www.w3.org/TR/webdriver/#dfn-element-clear)           | Element Clear           |
| [click](src/commands/click.ts)                               | [here](https://www.w3.org/TR/webdriver/#dfn-element-click)           | Element Click           |
| [closeWindow](src/commands/closeWindow.ts)                   | [here](https://www.w3.org/TR/webdriver/#dfn-close-window)            | Close Window            |
| [createSession](src/commands/createSession.ts)               | [here](https://www.w3.org/TR/webdriver/#dfn-new-sessions)            | New Session             |
| [createWindow](src/commands/createWindow.ts)                 | [here](https://www.w3.org/TR/webdriver/#dfn-new-window)              | New Window              |
| [deleteCookie](src/commands/deleteCookie.ts)                 | [here](https://www.w3.org/TR/webdriver/#dfn-delete-cookie)           | Delete Cookie           |
| [deleteCookies](src/commands/deleteCookies.ts)               | [here](https://www.w3.org/TR/webdriver/#dfn-delete-all-cookies)      | Delete All Cookies      |
| [deleteSession](src/commands/deleteSession.ts)               | [here](https://www.w3.org/TR/webdriver/#dfn-delete-session)          | Delete Session          |
| [elementDisplayed](src/commands/elementDisplayed.ts)         | [here](https://www.w3.org/TR/webdriver/#element-displayedness)       | Is Element Displayed    |
| [elementEnabled](src/commands/elementEnabled.ts)             | [here](https://www.w3.org/TR/webdriver/#dfn-is-element-enabled)      | Is Element Enabled      |
| [elementSelected](src/commands/elementSelected.ts)           | [here](https://www.w3.org/TR/webdriver/#dfn-is-element-selected)     | Is Element Selected     |
| [execute](src/commands/execute.ts)                           | [here](https://www.w3.org/TR/webdriver/#dfn-execute-script)          | Execute Script          |
| [executeAsync](src/commands/executeAsync.ts)                 | [here](https://www.w3.org/TR/webdriver/#dfn-execute-async-script)    | Execute Async Script    |
| [findElOrEls](src/commands/findElOrEls.ts)                   | [here](https://www.w3.org/TR/webdriver/#element-retrieval)           | Find Elements           |
| [forward](src/commands/forward.ts)                           | [here](https://www.w3.org/TR/webdriver/#dfn-forward)                 | Forward                 |
| [fullScreenWindow](src/commands/fullScreenWindow.ts)         | [here](https://www.w3.org/TR/webdriver/#dfn-fullscreen-window)       | Fullscreen Window       |
| [getAlertText](src/commands/getAlertText.ts)                 | [here](https://www.w3.org/TR/webdriver/#dfn-get-alert-text)          | Get Alert Text          |
| [getAttribute](src/commands/getAttribute.ts)                 | [here](https://www.w3.org/TR/webdriver/#dfn-get-element-attribute)   | Get Element Attribute   |
| [getComputedLabel](src/commands/getComputedLabel.ts)         | [here](https://www.w3.org/TR/webdriver/#dfn-get-computed-label)      | Get Computed Label      |
| [getComputedRole](src/commands/getComputedRole.ts)           | [here](https://www.w3.org/TR/webdriver/#dfn-get-computed-role)       | Get Computed Role       |
| [getCookie](src/commands/getCookie.ts)                       | [here](https://www.w3.org/TR/webdriver/#dfn-get-named-cookie)        | Get Named Cookie        |
| [getCookies](src/commands/getCookies.ts)                     | [here](https://www.w3.org/TR/webdriver/#dfn-get-all-cookies)         | Get All Cookies         |
| [getCssProperty](src/commands/getCssProperty.ts)             | [here](https://www.w3.org/TR/webdriver/#dfn-get-element-css-value)   | Get Element CSS Value   |
| [getElementRect](src/commands/getElementRect.ts)             | [here](https://www.w3.org/TR/webdriver/#dfn-get-element-rect)        | Get Element Rect        |
| [getElementScreenshot](src/commands/getElementScreenshot.ts) | [here](https://www.w3.org/TR/webdriver/#dfn-take-element-screenshot) | Take Element Screenshot |
| [getName](src/commands/getName.ts)                           | [here](https://www.w3.org/TR/webdriver/#dfn-get-element-tag-name)    | Get Element Tag Name    |
| [getPageSource](src/commands/getPageSource.ts)               | [here](https://www.w3.org/TR/webdriver/#dfn-get-page-source)         | Get Page Source         |
| [getProperty](src/commands/getProperty.ts)                   | [here](https://www.w3.org/TR/webdriver/#dfn-get-element-property)    | Get Element Property    |
| [getScreenshot](src/commands/getScreenshot.ts)               | [here](https://www.w3.org/TR/webdriver/#dfn-take-screenshot)         | Take Screenshot         |
| [getText](src/commands/getText.ts)                           | [here](https://www.w3.org/TR/webdriver/#dfn-get-element-text)        | Get Element Text        |
| [getTimeouts](src/commands/getTimeouts.ts)                   | [here](https://www.w3.org/TR/webdriver/#dfn-get-timeouts)            | Get Timeouts            |
| [getUrl](src/commands/getUrl.ts)                             | [here](https://www.w3.org/TR/webdriver/#dfn-get-current-url)         | Get Current URL         |
| [getWindowHandle](src/commands/getWindowHandle.ts)           | [here](https://www.w3.org/TR/webdriver/#dfn-get-window-handle)       | Get Window Handle       |
| [getWindowHandles](src/commands/getWindowHandles.ts)         | [here](https://www.w3.org/TR/webdriver/#dfn-get-window-handles)      | Get Window Handles      |
| [getWindowRect](src/commands/getWindowRect.ts)               | [here](https://www.w3.org/TR/webdriver/#dfn-get-window-rect)         | Get Window Rect         |
| [implicitWaitW3C](src/commands/implicitWaitW3C.ts)           | [here](https://www.w3.org/TR/webdriver/#dfn-set-timeouts)            | Set Implicit Timeout    |
| [maximizeWindow](src/commands/maximizeWindow.ts)             | [here](https://www.w3.org/TR/webdriver/#dfn-maximize-window)         | Maximize Window         |
| [minimizeWindow](src/commands/minimizeWindow.ts)             | [here](https://www.w3.org/TR/webdriver/#dfn-minimize-window)         | Minimize Window         |
| [pageLoadTimeoutW3C](src/commands/pageLoadTimeoutW3C.ts)     | [here](https://www.w3.org/TR/webdriver/#dfn-set-timeouts)            | Set Page Load Timeout   |
| [parentFrame](src/commands/parentFrame.ts)                   | [here](https://www.w3.org/TR/webdriver/#dfn-switch-to-parent-frame)  | Switch To Parent Frame  |
| [performActions](src/commands/performActions.ts)             | [here](https://www.w3.org/TR/webdriver/#dfn-perform-actions)         | Perform Actions         |
| [postAcceptAlert](src/commands/postAcceptAlert.ts)           | [here](https://www.w3.org/TR/webdriver/#dfn-accept-alert)            | Accept Alert            |
| [postDismissAlert](src/commands/postDismissAlert.ts)         | [here](https://www.w3.org/TR/webdriver/#dfn-dismiss-alert)           | Dismiss Alert           |
| [printPage](src/commands/printPage.ts)                       | [here](https://www.w3.org/TR/webdriver/#dfn-print-page)              | Print Page              |
| [refresh](src/commands/refresh.ts)                           | [here](https://www.w3.org/TR/webdriver/#dfn-refresh)                 | Refresh                 |
| [releaseActions](src/commands/releaseActions.ts)             | [here](https://www.w3.org/TR/webdriver/#dfn-release-actions)         | Release Actions         |
| [scriptTimeoutW3C](src/commands/scriptTimeoutW3C.ts)         | [here](https://www.w3.org/TR/webdriver/#dfn-set-timeouts)            | Set Script Timeout      |
| [setAlertText](src/commands/setAlertText.ts)                 | [here](https://www.w3.org/TR/webdriver/#dfn-send-alert-text)         | Send Alert Text         |
| [setCookie](src/commands/setCookie.ts)                       | [here](https://www.w3.org/TR/webdriver/#dfn-adding-a-cookie)         | Add Cookie              |
| [setFrame](src/commands/setFrame.ts)                         | [here](https://www.w3.org/TR/webdriver/#dfn-switch-to-frame)         | Switch To Frame         |
| [setUrl](src/commands/setUrl.ts)                             | [here](https://www.w3.org/TR/webdriver/#dfn-navigate-to)             | Navigate To             |
| [setValue](src/commands/setValue.ts)                         | [here](https://www.w3.org/TR/webdriver/#dfn-element-send-keys)       | Element Send Keys       |
| [setWindow](src/commands/setWindow.ts)                       | [here](https://www.w3.org/TR/webdriver/#dfn-switch-to-window)        | Switch To Window        |
| [setWindowRect](src/commands/setWindowRect.ts)               | [here](https://www.w3.org/TR/webdriver/#dfn-set-window-rect)         | Set Window Rect         |
| [title](src/commands/title.ts)                               | [here](https://www.w3.org/TR/webdriver/#dfn-get-title)               | Get Title               |
| [uploadFile](src/commands/uploadFile.ts)                     | -                                                                    | Upload File             |
