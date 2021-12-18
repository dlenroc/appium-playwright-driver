import type { Driver } from '../Driver';

export async function getName(this: Driver, element: string): Promise<string> {
  const tagName = await this.getProperty('tagName', element);
  return tagName.toLowerCase();
}
