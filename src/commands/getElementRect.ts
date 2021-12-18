import { errors } from '@appium/base-driver';
import type { Driver } from '../Driver';

export async function getElementRect(this: Driver, element: string): Promise<{ x: number; y: number; width: number; height: number }> {
  await this.handlePrompts();

  const elementHandle = await this.getElement(element);
  const rect = await elementHandle.boundingBox();

  if (!rect) {
    throw new errors.ElementNotVisibleError();
  }

  return rect;
}
