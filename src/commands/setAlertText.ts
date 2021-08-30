import { Driver } from '../Driver';

export async function setAlertText(this: Driver, chars: string[]): Promise<void> {
  const { page } = await this.handleWindow();

  if (!page.dialog) {
    throw new this.errors.NoSuchAlertError();
  }

  if (['alert', 'confirm'].includes(page.dialog.current.type())) {
    throw new this.errors.ElementNotInteractableError('User dialog does not have a text box input field.');
  }

  page.dialog.value = chars.join('');
}
