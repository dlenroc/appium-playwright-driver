import { Driver } from '../Driver';
import { Element } from 'appium-base-driver';

export async function clear(this: Driver, element: Element): Promise<void> {
  await this.handlePrompts();

  const elementHandle = await this.getElement(element);
  await elementHandle.fill('', { force: true });
}
