import type { Driver } from '../Driver';

export async function back(this: Driver): Promise<void> {
  const { page } = await this.handlePrompts();

  await page.current.goBack({ waitUntil: this.opts.pageLoadStrategy });
}
