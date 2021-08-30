import { Driver } from '../Driver';

export async function getWindowHandle(this: Driver): Promise<string> {
  const { page } = await this.handlePrompts();

  // @ts-ignore because `_guid` is an internal property
  return page.current['_guid'];
}
