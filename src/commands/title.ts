import type { Driver } from '../Driver';

export async function title(this: Driver): Promise<string> {
  const { page } = await this.handlePrompts();

  return page.current.title();
}
