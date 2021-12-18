import type { Driver } from '../Driver';

export async function getElementScreenshot(this: Driver, element: string): Promise<string> {
  await this.handlePrompts();

  const elementHandle = await this.getElement(element);
  const screenshot = await elementHandle.screenshot();

  return screenshot.toString('base64');
}
