import { Element } from 'appium-base-driver';
import { Driver } from '../Driver';

export async function elementDisplayed(this: Driver, element: Element): Promise<boolean> {
  await this.handlePrompts();

  const elementHandle = await this.getElement(element);
  return elementHandle.isVisible();
}
