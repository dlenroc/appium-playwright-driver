import type { Driver } from '../Driver';

export async function getWindowRect(this: Driver): Promise<{ x: number; y: number; width: number; height: number }> {
  const { page } = await this.handlePrompts();

  return page.current.evaluate(() => {
    // @ts-ignore
    return { x: window.screenX, y: window.screenY, width: window.innerWidth, height: window.innerHeight };
  });
}
