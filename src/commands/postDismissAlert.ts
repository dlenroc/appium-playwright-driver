import { Driver } from '../Driver';

export async function postDismissAlert(this: Driver): Promise<void> {
  const { page } = await this.handleWindow();

  if (!page.dialog) {
    throw new this.errors.NoSuchAlertError();
  }

  await page.dialog.current.dismiss();

  page.dialog = undefined;
}
