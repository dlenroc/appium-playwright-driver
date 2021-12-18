import type { Driver } from '../Driver';

export async function getScreenshot(this: Driver): Promise<string> {
  const { page } = await this.handlePrompts();

  const screenshot = await page.current.screenshot();

  return screenshot.toString('base64');
}
