import { Element } from 'appium-base-driver';
import { Driver } from '../Driver';

export async function elementEnabled(this: Driver, element: Element): Promise<boolean> {
  await this.handlePrompts();

  const elementHandle = await this.getElement(element);
  return elementHandle.isEnabled();
}
