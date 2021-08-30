import { Driver } from '../Driver';

export async function maximizeWindow(this: Driver): Promise<void> {
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
}
