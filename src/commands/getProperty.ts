import { Element } from 'appium-base-driver';
import { Driver } from '../Driver';

export async function getProperty(this: Driver, propertyName: string, element: Element): Promise<any> {
  await this.handlePrompts();

  const elementHandle = await this.getElement(element);
  const property = await elementHandle.getProperty(propertyName);

  return property.jsonValue();
}
