import { Driver } from '../Driver';

export async function minimizeWindow(this: Driver): Promise<void> {
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
}
