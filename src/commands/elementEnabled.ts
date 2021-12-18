import type { Driver } from '../Driver';

export async function elementEnabled(this: Driver, element: string): Promise<boolean> {
  await this.handlePrompts();

  const elementHandle = await this.getElement(element);
  return elementHandle.isEnabled();
}
