import { Driver } from '../Driver';

export async function getAlertText(this: Driver): Promise<string> {
  const { page } = await this.handleWindow();

  if (!page.dialog) {
    throw new this.errors.NoSuchAlertError();
  }

  return page.dialog.current.message();
}
