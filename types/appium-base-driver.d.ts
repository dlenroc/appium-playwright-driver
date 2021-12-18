import type AppiumDriver from '@appium/base-driver';

declare module '@appium/base-driver' {
  export const errors: Record<'NotYetImplementedError' | 'NotImplementedError' | 'BadParametersError' | 'InvalidArgumentError' | 'NoSuchDriverError' | 'NoSuchElementError' | 'UnknownCommandError' | 'StaleElementReferenceError' | 'ElementNotVisibleError' | 'InvalidElementStateError' | 'UnknownError' | 'ElementIsNotSelectableError' | 'ElementClickInterceptedError' | 'ElementNotInteractableError' | 'InsecureCertificateError' | 'JavaScriptError' | 'XPathLookupError' | 'TimeoutError' | 'NoSuchWindowError' | 'NoSuchCookieError' | 'InvalidCookieDomainError' | 'InvalidCoordinatesError' | 'UnableToSetCookieError' | 'UnexpectedAlertOpenError' | 'NoAlertOpenError' | 'ScriptTimeoutError' | 'InvalidElementCoordinatesError' | 'IMENotAvailableError' | 'IMEEngineActivationFailedError' | 'InvalidSelectorError' | 'SessionNotCreatedError' | 'MoveTargetOutOfBoundsError' | 'NoSuchAlertError' | 'NoSuchContextError' | 'InvalidContextError' | 'NoSuchFrameError' | 'UnableToCaptureScreen' | 'UnknownMethodError' | 'UnsupportedOperationError' | 'ProxyRequestError', { new (...args: any[]): Error }>;
  export type SelectorStrategy = 'id' | 'tag name' | 'css selector' | 'xpath' | any;
  export type WindowHandle = { type: string; handle: string };
}
