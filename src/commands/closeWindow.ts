import { Driver } from '../Driver';

export async function closeWindow(this: Driver): Promise<string[]> {
  const { context, page } = await this.handlePrompts();

  for (let i = 0; i < context.pages.length; i++) {
    if (page.current === context.pages[i].current) {
      context.pages.splice(i, 1);
      break;
    }
  }

  if (context.pages.length) {
    context.page = context.pages[0];
  }

  await page.current.close();

  if (!context.pages.length) {
    await this.deleteSession();
  }

  return this.getWindowHandles();
}
