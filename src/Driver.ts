/// <reference path='../types/appium-support.d.ts'/>
/// <reference path='../types/appium-base-driver.d.ts'/>

import { BaseDriver, errors, OmitFirstArg } from 'appium-base-driver';
import { logger } from 'appium-support';
import { Browser as State } from './types';
import { back } from './commands/back';
import { clear } from './commands/clear';
import { click } from './commands/click';
import { closeWindow } from './commands/closeWindow';
import { createSession } from './commands/createSession';
import { deleteSession } from './commands/deleteSession';
import { elementDisplayed } from './commands/elementDisplayed';
import { elementEnabled } from './commands/elementEnabled';
import { elementSelected } from './commands/elementSelected';
import { execute } from './commands/execute';
import { executeAsync } from './commands/executeAsync';
import { findElOrEls, getElement } from './commands/findElOrEls';
import { forward } from './commands/forward';
import { getAttribute } from './commands/getAttribute';
import { getCookies } from './commands/getCookies';
import { getCssProperty } from './commands/getCssProperty';
import { getElementRect } from './commands/getElementRect';
import { getName } from './commands/getName';
import { getPageSource } from './commands/getPageSource';
import { getScreenshot } from './commands/getScreenshot';
import { getText } from './commands/getText';
import { getUrl } from './commands/getUrl';
import { getWindowHandle } from './commands/getWindowHandle';
import { getWindowHandles } from './commands/getWindowHandles';
import { maximizeWindow } from './commands/maximizeWindow';
import { parentFrame } from './commands/parentFrame';
import { performActions } from './commands/performActions';
import { refresh } from './commands/refresh';
import { setCookie } from './commands/setCookie';
import { setFrame } from './commands/setFrame';
import { setUrl } from './commands/setUrl';
import { setValue } from './commands/setValue';
import { setWindow } from './commands/setWindow';
import { title } from './commands/title';
import { active } from './commands/active';
import { createWindow } from './commands/createWindow';
import { deleteCookie } from './commands/deleteCookie';
import { deleteCookies } from './commands/deleteCookies';
import { fullScreenWindow } from './commands/fullScreenWindow';
import { getAlertText } from './commands/getAlertText';
import { getComputedLabel } from './commands/getComputedLabel';
import { getComputedRole } from './commands/getComputedRole';
import { getCookie } from './commands/getCookie';
import { getElementScreenshot } from './commands/getElementScreenshot';
import { getProperty } from './commands/getProperty';
import { getTimeouts } from './commands/getTimeouts';
import { getWindowRect } from './commands/getWindowRect';
import { minimizeWindow } from './commands/minimizeWindow';
import { postAcceptAlert } from './commands/postAcceptAlert';
import { postDismissAlert } from './commands/postDismissAlert';
import { printPage } from './commands/printPage';
import { releaseActions } from './commands/releaseActions';
import { setAlertText } from './commands/setAlertText';
import { setWindowRect } from './commands/setWindowRect';
import { implicitWaitW3C } from './commands/implicitWaitW3C';
import { pageLoadTimeoutW3C } from './commands/pageLoadTimeoutW3C';
import { scriptTimeoutW3C } from './commands/scriptTimeoutW3C';
import { handleWindow } from './handlers/handleWindow';
import { handlePrompts } from './handlers/handlePrompts';
import { uploadFile } from './commands/uploadFile';

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

  public errors = errors;
  public logger = logger.getLogger('PlaywrightDriver');

  // @ts-ignore because is initialized in `createSession`
  public state: State;

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
  public createSession: OmitFirstArg<typeof createSession> = createSession.bind(this, this.createSession.bind(this));
  public deleteSession: OmitFirstArg<typeof deleteSession> = deleteSession.bind(this, this.deleteSession.bind(this));
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
  public performActions = performActions;
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
  protected locatorStrategies = ['id', 'tag name', 'link text', 'partial link text', 'css selector', 'xpath'];
  protected desiredCapConstraints = {
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
