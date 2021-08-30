import { Driver } from '../Driver';
import { Context, Page } from '../types';

export async function handleWindow(this: Driver): Promise<{ context: Context; page: Page }> {
  const { browser, context } = this.state;

  if (!browser.isConnected()) {
    throw new this.errors.NoSuchWindowError();
  }

  if (!context.page) {
    throw new this.errors.NoSuchWindowError();
  }

  if (context.page.current.isClosed()) {
    throw new this.errors.NoSuchWindowError();
  }

  return { context, page: context.page };
}
