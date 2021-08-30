import { Driver } from '../Driver';

export async function setWindowRect(this: Driver, x: number, y: number, width: number, height: number): Promise<void> {
  const { page } = await this.handlePrompts();

  if (width && height) {
    await page.current.setViewportSize({ width, height });
  }
}
