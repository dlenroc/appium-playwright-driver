import { Element } from 'appium-base-driver';
import { Driver } from '../Driver';

export async function getElementRect(this: Driver, element: Element): Promise<{ x: number; y: number; width: number; height: number }> {
  await this.handlePrompts();

  const elementHandle = await this.getElement(element);
  const rect = await elementHandle.boundingBox();

  if (!rect) {
    throw new this.errors.ElementNotVisibleError();
  }

  return rect;
}
