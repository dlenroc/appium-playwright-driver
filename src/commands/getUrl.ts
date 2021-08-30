import { Driver } from '../Driver';

export async function getUrl(this: Driver): Promise<string> {
  const { page } = await this.handlePrompts();

  return page.current.url();
}
