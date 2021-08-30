import { Element } from 'appium-base-driver';
import { Driver } from '../Driver';

export async function getText(this: Driver, element: Element): Promise<string> {
  await this.handlePrompts();

  const elementHandle = await this.getElement(element);
  return elementHandle.innerText();
}
