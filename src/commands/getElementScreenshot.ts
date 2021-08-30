import { Element } from 'appium-base-driver';
import { Driver } from '../Driver';

export async function getElementScreenshot(this: Driver, element: Element): Promise<string> {
  await this.handlePrompts();

  const elementHandle = await this.getElement(element);
  const screenshot = await elementHandle.screenshot();

  return screenshot.toString('base64');
}
