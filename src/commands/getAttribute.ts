import { Element } from 'appium-base-driver';
import { Driver } from '../Driver';

export async function getAttribute(this: Driver, attribute: string, element: Element): Promise<string | null> {
  await this.handlePrompts();

  const elementHandle = await this.getElement(element);
  return elementHandle.getAttribute(attribute);
}
