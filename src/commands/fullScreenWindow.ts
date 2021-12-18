import type { Driver } from '../Driver';

export async function fullScreenWindow(this: Driver): Promise<{ x: number; y: number; width: number; height: number }> {
  const { page } = await this.handlePrompts();

  // @ts-ignore
  await page.current.evaluate(() => document.documentElement.requestFullscreen());

  return this.getWindowRect();
}
