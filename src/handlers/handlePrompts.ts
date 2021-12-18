import { errors } from '@appium/base-driver';
import type { Driver } from '../Driver';
import type { Context, Page } from '../types';

export async function handlePrompts(this: Driver): Promise<{ context: Context; page: Page }> {
  const { context, page } = await this.handleWindow();

  const dialog = page.dialog;
  const dialogAction = this.opts.unhandledPromptBehavior;
  if (dialog) {
    page.dialog = undefined;

    if (dialogAction.includes('accept')) {
      await dialog.current.accept();
    }

    if (dialogAction.includes('dismiss')) {
      await dialog.current.dismiss();
    }

    if (dialogAction === 'ignore' || dialogAction.includes('notify')) {
      throw new errors.UnexpectedAlertOpenError();
    }
  }

  return { context, page };
}
