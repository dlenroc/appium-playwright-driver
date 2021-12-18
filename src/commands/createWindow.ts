import type { Driver } from '../Driver';

export async function createWindow(this: Driver, type: string): Promise<{ type: string; handle: string }> {
  const { context } = await this.handlePrompts();

  const page = await context.current.newPage();

  context.pages.push({
    frame: page.mainFrame(),
    current: page,
    elements: {},
  });

  // @ts-ignore because `_guid` is an internal property
  return { type, handle: page['_guid'] };
}
