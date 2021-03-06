import type { Driver } from '../Driver';

export async function elementDisplayed(this: Driver, element: string): Promise<boolean> {
  await this.handlePrompts();

  const elementHandle = await this.getElement(element);
  return elementHandle.isVisible();
}
