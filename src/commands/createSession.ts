/// <reference path='../../types/requireg.d.ts'/>

import fs from 'fs';
import path from 'path';
import type { Dialog } from 'playwright';
import requireg from 'requireg';
import type { Driver } from '../Driver';
import type { Context, Page } from '../types';

const playwright = requireg('playwright');

export async function createSession(this: Driver, createSession?: any, jsonwpDesiredCapabilities?: Record<string, any>, jsonwpRequiredCaps?: Record<string, any>, w3cCapabilities?: Record<string, any>): Promise<[string, Record<string, any>]> {
  const session = await createSession(jsonwpDesiredCapabilities, jsonwpRequiredCaps, w3cCapabilities);

  // create tmp directory
  this.opts.tmpDir = this.opts.tmpDir + path.sep + this.sessionId;
  await fs.promises.mkdir(this.opts.tmpDir);

  // process capabilities
  this.opts.acceptInsecureCerts = this.opts.acceptInsecureCerts || false;
  this.opts.unhandledPromptBehavior = this.opts.unhandledPromptBehavior || 'dismiss and notify';
  this.opts.timeouts = Object.assign({ pageLoad: 300000, script: 30000, implicit: 0 }, this.opts.timeouts || {});
  this.opts.pageLoadStrategy = { none: 'domcontentloaded', eager: 'domcontentloaded', normal: 'load' }[this.opts.pageLoadStrategy as string] || this.opts.pageLoadStrategy || 'load';
  this.opts['playwright:context'] = Object.assign({ ignoreHTTPSErrors: this.opts.acceptInsecureCerts }, this.opts['playwright:context'] || {});
  this.opts['playwright:browser'] = this.opts['playwright:browser'] || {};

  // @ts-ignore - platform name is checked by the underlying driver
  const browser = await playwright[this.opts.platformName].launch(this.opts['playwright:browser']);
  const context = await browser.newContext(this.opts['playwright:context']);
  const page = await context.newPage();

  context.setDefaultNavigationTimeout(this.opts.timeouts.pageLoad);
  context.setDefaultTimeout(0);

  const sessionPage: Page = {
    current: page,
    frame: page.mainFrame(),
    elements: {},
  };

  const sessionContext: Context = {
    current: context,
    pages: [sessionPage],
    page: sessionPage,
  };

  this.state = {
    browser: browser,
    context: sessionContext,
    contexts: [sessionContext],
  };

  page.on('dialog', (dialog: Dialog) => {
    sessionPage.dialog = {
      current: dialog,
      value: dialog.defaultValue(),
    };
  });

  return session;
}
