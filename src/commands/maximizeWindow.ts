import type { Rect } from '@appium/base-driver';
import type { Driver } from '../Driver';

export async function maximizeWindow(this: Driver): Promise<Rect> {
  const { page } = await this.handlePrompts();

  await page.current.evaluate(() => {
    // @ts-ignore
    Object.defineProperty(document, 'visibilityState', {
      configurable: true,
      get: () => 'visible',
    });

    // @ts-ignore
    Object.defineProperty(document, 'hidden', {
      configurable: true,
      get: () => false,
    });

    // @ts-ignore
    document.dispatchEvent(new Event('visibilitychange'));
  });

  return this.getWindowRect();
}
