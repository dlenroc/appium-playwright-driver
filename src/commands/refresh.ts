import type { Driver } from '../Driver';

export async function refresh(this: Driver): Promise<void> {
  const { page } = await this.handlePrompts();

  await page.current.reload({ waitUntil: this.opts.pageLoadStrategy });
}
