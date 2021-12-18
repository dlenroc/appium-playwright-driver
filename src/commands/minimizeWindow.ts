import type { Rect } from '@appium/base-driver';
import type { Driver } from '../Driver';

export async function minimizeWindow(this: Driver): Promise<Rect> {
  const { page } = await this.handlePrompts();

  await page.current.evaluate(() => {
    // @ts-ignore
    Object.defineProperty(document, 'visibilityState', {
      configurable: true,
      get: () => 'hidden',
    });

    // @ts-ignore
    Object.defineProperty(document, 'hidden', {
      configurable: true,
      get: () => true,
    });

    // @ts-ignore
    document.dispatchEvent(new Event('visibilitychange'));
  });

  return this.getWindowRect();
}
