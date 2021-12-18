import { errors } from '@appium/base-driver';
import type { Driver } from '../Driver';
import type { Context, Page } from '../types';

export async function handleWindow(this: Driver): Promise<{ context: Context; page: Page }> {
  const { browser, context } = this.state;

  if (!browser.isConnected()) {
    throw new errors.NoSuchWindowError();
  }

  if (!context.page) {
    throw new errors.NoSuchWindowError();
  }

  if (context.page.current.isClosed()) {
    throw new errors.NoSuchWindowError();
  }

  return { context, page: context.page };
}
