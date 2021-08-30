import { Driver } from '../Driver';

export async function setWindow(this: Driver, handle: string): Promise<void> {
  const { context } = await this.handlePrompts();

  for (const page of context.pages) {
    // @ts-ignore because `_guid` is an internal property
    if (page.current['_guid'] === handle) {
      context.page = page;
      await page.current.bringToFront();
      return;
    }
  }

  throw new this.errors.NoSuchWindowError();
}
