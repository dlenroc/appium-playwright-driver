import { Browser as DriverBrowser, BrowserContext, Dialog as BrowserPageDialog, ElementHandle, Frame as BrowserFrame, Page as BrowserPage } from 'playwright';

export interface Browser {
  browser: DriverBrowser;
  contexts: Context[];
  context: Context;
}

export interface Context {
  current: BrowserContext;
  pages: Page[];
  page?: Page;
}

export interface Page {
  current: BrowserPage;
  frame: BrowserFrame;
  dialog?: Dialog;
  elements: Record<string, ElementHandle>;
}

export interface Dialog {
  current: BrowserPageDialog;
  value: string;
}
