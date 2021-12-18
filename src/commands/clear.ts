import type { Driver } from '../Driver';

export async function clear(this: Driver, element: string): Promise<void> {
  await this.handlePrompts();

  const elementHandle = await this.getElement(element);
  await elementHandle.fill('', { force: true });
}
