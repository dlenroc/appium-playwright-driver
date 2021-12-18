import type { Driver } from '../Driver';

export async function setUrl(this: Driver, url: string): Promise<void> {
  const { page } = await this.handlePrompts();

  await page.current.goto(url, { waitUntil: this.opts.pageLoadStrategy });
}
