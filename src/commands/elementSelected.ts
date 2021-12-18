import type { Driver } from '../Driver';

export async function elementSelected(this: Driver, element: string): Promise<boolean> {
  await this.handlePrompts();

  const tagName = await this.getName(element);
  const elementHandle = await this.getElement(element);

  if (tagName === 'option') {
    return elementHandle.evaluate((node) => node.selected);
  }

  return elementHandle.isChecked();
}
