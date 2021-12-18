import type { Driver } from '../Driver';

export async function forward(this: Driver): Promise<void> {
  const { page } = await this.handlePrompts();

  await page.current.goForward({ waitUntil: this.opts.pageLoadStrategy });
}
