import type { Driver } from '../Driver';

export async function getAttribute(this: Driver, attribute: string, element: string): Promise<string | null> {
  await this.handlePrompts();

  const elementHandle = await this.getElement(element);
  return elementHandle.getAttribute(attribute);
}
