import type { Driver } from '../Driver';

export async function getComputedRole(this: Driver, element: string): Promise<string | null> {
  return this.getAttribute('role', element);
}
