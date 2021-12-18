import { errors } from '@appium/base-driver';
import type { Driver } from '../Driver';

export async function postAcceptAlert(this: Driver): Promise<void> {
  const { page } = await this.handleWindow();

  if (!page.dialog) {
    throw new errors.NoSuchAlertError();
  }

  await page.dialog.current.accept(page.dialog.value);

  page.dialog = undefined;
}
