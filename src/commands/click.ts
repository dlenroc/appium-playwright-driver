import { Driver } from '../Driver';
import { Element } from 'appium-base-driver';

export async function click(this: Driver, element: Element): Promise<void> {
  await this.handlePrompts();

  const tagName = await this.getName(element);
  const elementHandle = await this.getElement(element);

  if (tagName === 'option') {
    const index = await elementHandle.evaluate((node) => node.index);
    const parentElementHandle = await elementHandle.evaluateHandle((node) => node.parentElement);
    await parentElementHandle.selectOption({ index: index }, { force: true });
  } else {
    await elementHandle.click({ force: true });
  }
}
