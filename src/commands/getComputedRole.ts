import { Element } from 'appium-base-driver';
import { Driver } from '../Driver';

export async function getComputedRole(this: Driver, element: Element): Promise<string | null> {
  return this.getAttribute('role', element);
}
