import type { Driver } from '../Driver';

export async function getPageSource(this: Driver): Promise<string> {
  const { page } = await this.handlePrompts();

  return page.frame.content();
}
