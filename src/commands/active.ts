import type { Element } from '@appium/base-driver';
import { errors } from '@appium/base-driver';
import { util } from 'appium-support';
import base64 from 'base-64';
import type { Driver } from '../Driver';

export async function active(this: Driver): Promise<Element> {
  const { page } = await this.handlePrompts();

  // @ts-ignore
  let elementHandle = await page.frame.evaluateHandle(() => document.activeElement);
  if (!elementHandle) {
    throw new errors.NoSuchElementError();
  }

  // @ts-ignore because `_guid` is an internal property
  const id = base64.encode(elementHandle['_guid']);
  page.elements[id] = elementHandle;
  return util.wrapElement(id);
}
