import type { Driver } from '../Driver';

export async function getCssProperty(this: Driver, property: string, element: string): Promise<any> {
  await this.handlePrompts();

  const elementHandle = await this.getElement(element);

  // @ts-ignore
  return elementHandle.evaluate((element, property) => window.getComputedStyle(element).getPropertyValue(property), property);
}
