import type { Driver } from '../Driver';
import { SPECIAL_SYMBOLS } from './performActions';

export async function setValue(this: Driver, chars: string | string[], element: string): Promise<void> {
  await this.handlePrompts();

  const value = Array.isArray(chars) ? chars.join('') : chars;
  const type = await this.getProperty('type', element);
  const elementHandle = await this.getElement(element);

  // Upload Files
  if (type === 'file') {
    const files = value.split('\n');
    await elementHandle.setInputFiles(files);
    return;
  }

  // Send text / keys
  let text = '';
  chars = value.split('').reverse();
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
