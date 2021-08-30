import { Driver } from '../Driver';

export async function getWindowHandles(this: Driver): Promise<string[]> {
  const { context } = await this.handlePrompts();

  const handles = [];
  for (const page of context.pages) {
    // @ts-ignore because `_guid` is an internal property
    handles.push(page.current['_guid']);
  }

  return handles;
}
