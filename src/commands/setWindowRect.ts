import type { Rect } from '@appium/types';
import type { Driver } from '../Driver';

export async function setWindowRect(this: Driver, x: number, y: number, width: number, height: number): Promise<Rect> {
  const { page } = await this.handlePrompts();

  if (width && height) {
    await page.current.setViewportSize({ width, height });
  }

  return this.getWindowRect();
}
