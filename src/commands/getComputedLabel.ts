import type { Driver } from '../Driver';

export async function getComputedLabel(this: Driver, element: string): Promise<string | null> {
  return this.getAttribute('aria-label', element);
}
