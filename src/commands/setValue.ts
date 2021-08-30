import { Element } from 'appium-base-driver';
import { Driver } from '../Driver';
import { SPECIAL_SYMBOLS } from './performActions';

export async function setValue(this: Driver, chars: string[], element: Element): Promise<void> {
  await this.handlePrompts();

  const type = await this.getProperty('type', element);
  const elementHandle = await this.getElement(element);

  // Upload Files
  if (type === 'file') {
    const files = chars.join('').split('\n');
    await elementHandle.setInputFiles(files);
    return;
  }

  // Send text / keys
  let text = '';
  chars = chars.reverse();
  while (chars.length) {
    const char = chars.pop();

    // @ts-ignore
    const key = SPECIAL_SYMBOLS[char];

    if (key) {
      if (text) {
        await elementHandle.type(text);
        text = '';
      }

      await elementHandle.press(key);
    } else {
      text += char;
    }
  }

  if (text) {
    await elementHandle.type(text);
  }
}
