/// <reference path='../types/appium-support.d.ts'/>
/// <reference path='../types/appium-base-driver.d.ts'/>

import { BaseDriver } from '@appium/base-driver';
import { active } from './commands/active';
import { back } from './commands/back';
import { clear } from './commands/clear';
import { click } from './commands/click';
import { closeWindow } from './commands/closeWindow';
import { createSession } from './commands/createSession';
import { createWindow } from './commands/createWindow';
import { deleteCookie } from './commands/deleteCookie';
import { deleteCookies } from './commands/deleteCookies';
import { deleteSession } from './commands/deleteSession';
import { elementDisplayed } from './commands/elementDisplayed';
import { elementEnabled } from './commands/elementEnabled';
import { elementSelected } from './commands/elementSelected';
import { execute } from './commands/execute';
import { executeAsync } from './commands/executeAsync';
import { findElOrEls, getElement } from './commands/findElOrEls';
import { forward } from './commands/forward';
import { fullScreenWindow } from './commands/fullScreenWindow';
import { getAlertText } from './commands/getAlertText';
import { getAttribute } from './commands/getAttribute';
import { getComputedLabel } from './commands/getComputedLabel';
import { getComputedRole } from './commands/getComputedRole';
import { getCookie } from './commands/getCookie';
import { getCookies } from './commands/getCookies';
import { getCssProperty } from './commands/getCssProperty';
import { getElementRect } from './commands/getElementRect';
import { getElementScreenshot } from './commands/getElementScreenshot';
import { getName } from './commands/getName';
import { getPageSource } from './commands/getPageSource';
import { getProperty } from './commands/getProperty';
import { getScreenshot } from './commands/getScreenshot';
import { getText } from './commands/getText';
import { getTimeouts } from './commands/getTimeouts';
import { getUrl } from './commands/getUrl';
import { getWindowHandle } from './commands/getWindowHandle';
import { getWindowHandles } from './commands/getWindowHandles';
import { getWindowRect } from './commands/getWindowRect';
import { implicitWaitW3C } from './commands/implicitWaitW3C';
import { maximizeWindow } from './commands/maximizeWindow';
import { minimizeWindow } from './commands/minimizeWindow';
import { pageLoadTimeoutW3C } from './commands/pageLoadTimeoutW3C';
import { parentFrame } from './commands/parentFrame';
import { performActions } from './commands/performActions';
import { postAcceptAlert } from './commands/postAcceptAlert';
import { postDismissAlert } from './commands/postDismissAlert';
import { printPage } from './commands/printPage';
import { refresh } from './commands/refresh';
import { releaseActions } from './commands/releaseActions';
import { scriptTimeoutW3C } from './commands/scriptTimeoutW3C';
import { setAlertText } from './commands/setAlertText';
import { setCookie } from './commands/setCookie';
import { setFrame } from './commands/setFrame';
import { setUrl } from './commands/setUrl';
import { setValue } from './commands/setValue';
import { setWindow } from './commands/setWindow';
import { setWindowRect } from './commands/setWindowRect';
import { title } from './commands/title';
import { uploadFile } from './commands/uploadFile';
import { handlePrompts } from './handlers/handlePrompts';
import { handleWindow } from './handlers/handleWindow';
import { Browser as State } from './types';

export class Driver extends BaseDriver {
  static newMethodMap = {
    '/session/:sessionId/print': {
      POST: { command: 'printPage', payloadParams: { required: ['options'] } },
    },
    '/session/:sessionId/frame/parent': {
      POST: { command: 'parentFrame' },
    },
    '/session/:sessionId/actions': {
      POST: { command: 'performActions', payloadParams: { required: ['actions'] } },
      DELETE: { command: 'releaseActions' },
    },
    '/session/:sessionId/element/:elementId/computedrole': {
      GET: { command: 'getComputedRole' },
    },
    '/session/:sessionId/element/:elementId/computedlabel': {
      GET: { command: 'getComputedLabel' },
    },
    '/session/:sessionId/window/new': {
      POST: { command: 'createWindow', payloadParams: { required: ['type'] } },
    },
    '/session/:sessionId/window/rect': {
      GET: { command: 'getWindowRect' },
      POST: { command: 'setWindowRect', payloadParams: { optional: ['x', 'y', 'width', 'height'] } },
    },
    '/session/:sessionId/se/file': {
      POST: { command: 'uploadFile', payloadParams: { required: ['file'] } },
    },
  };

  // @ts-ignore because is initialized in `createSession`
  public state: State;
  public WEB_ELEMENT_IDENTIFIER: 'element-6066-11e4-a52e-4f735466cecf' = 'element-6066-11e4-a52e-4f735466cecf';

  // handlers
  public handleWindow = handleWindow;
  public handlePrompts = handlePrompts;

  // commands
  public active = active;
  public back = back;
  public clear = clear;
  public click = click;
  public closeWindow = closeWindow;
  public createWindow = createWindow;
  public deleteCookie = deleteCookie;
  public deleteCookies = deleteCookies;
  public createSession = createSession.bind(this, super.createSession.bind(this));
  public deleteSession = deleteSession.bind(this, super.deleteSession.bind(this));
  public elementDisplayed = elementDisplayed;
  public elementEnabled = elementEnabled;
  public elementSelected = elementSelected;
  public execute = execute;
  public executeAsync = executeAsync;
  public findElOrEls = findElOrEls;
  public forward = forward;
  public fullScreenWindow = fullScreenWindow;
  public getAlertText = getAlertText;
  public getAttribute = getAttribute;
  public getComputedLabel = getComputedLabel;
  public getComputedRole = getComputedRole;
  public getCookie = getCookie;
  public getCookies = getCookies;
  public getCssProperty = getCssProperty;
  public getElement = getElement;
  public getElementRect = getElementRect;
  public getElementScreenshot = getElementScreenshot;
  public getName = getName;
  public getPageSource = getPageSource;
  public getProperty = getProperty;
  public getScreenshot = getScreenshot;
  public getText = getText;
  public getTimeouts = getTimeouts;
  public getUrl = getUrl;
  public getWindowHandle = getWindowHandle;
  public getWindowHandles = getWindowHandles;
  public getWindowRect = getWindowRect;
  public implicitWaitW3C = implicitWaitW3C;
  public maximizeWindow = maximizeWindow;
  public minimizeWindow = minimizeWindow;
  public pageLoadTimeoutW3C = pageLoadTimeoutW3C;
  public parentFrame = parentFrame;
  public performActions = performActions as BaseDriver['performActions'];
  public postAcceptAlert = postAcceptAlert;
  public postDismissAlert = postDismissAlert;
  public printPage = printPage;
  public refresh = refresh;
  public releaseActions = releaseActions;
  public scriptTimeoutW3C = scriptTimeoutW3C;
  public setAlertText = setAlertText;
  public setCookie = setCookie;
  public setFrame = setFrame;
  public setUrl = setUrl;
  public setValue = setValue;
  public setWindow = setWindow;
  public setWindowRect = setWindowRect;
  public title = title;
  public uploadFile = uploadFile;

  // Configurations
  locatorStrategies = ['id', 'tag name', 'link text', 'partial link text', 'css selector', 'xpath'];

  public get desiredCapConstraints() {
    return {
      // W3C
      timeouts: {
        isObject: true,
        presence: false,
      },
      acceptInsecureCerts: {
        isBoolean: true,
        presence: false,
      },
      pageLoadStrategy: {
        isString: true,
        presence: false,
        inclusion: ['none', 'eager', 'normal', 'networkidle'],
      },
      unhandledPromptBehavior: {
        isString: true,
        presence: false,
        inclusion: ['dismiss', 'accept', 'dismiss and notify', 'accept and notify', 'ignore'],
      },

      // Playwright
      'playwright:browser': {
        isObject: true,
        presence: false,
      },
      'playwright:context': {
        isObject: true,
        presence: false,
      },
    };
  }
}
