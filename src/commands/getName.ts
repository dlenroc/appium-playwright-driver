import { Element } from 'appium-base-driver';
import { Driver } from '../Driver';

export async function getName(this: Driver, element: Element): Promise<string> {
  const tagName = await this.getProperty('tagName', element);
  return tagName.toLowerCase();
}
