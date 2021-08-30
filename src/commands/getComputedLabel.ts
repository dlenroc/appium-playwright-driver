import { Element } from 'appium-base-driver';
import { Driver } from '../Driver';

export async function getComputedLabel(this: Driver, element: Element): Promise<string | null> {
  return this.getAttribute('aria-label', element);
}
