import type { Driver } from '../Driver';

export async function getText(this: Driver, element: string): Promise<string> {
  await this.handlePrompts();

  const elementHandle = await this.getElement(element);
  return elementHandle.innerText();
}
