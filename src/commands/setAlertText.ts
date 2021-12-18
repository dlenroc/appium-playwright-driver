import { errors } from '@appium/base-driver';
import type { Driver } from '../Driver';

export async function setAlertText(this: Driver, text: string): Promise<void> {
  const { page } = await this.handleWindow();

  if (!page.dialog) {
    throw new errors.NoSuchAlertError();
  }

  if (['alert', 'confirm'].includes(page.dialog.current.type())) {
    throw new errors.ElementNotInteractableError('User dialog does not have a text box input field.');
  }

  page.dialog.value = text;
}
