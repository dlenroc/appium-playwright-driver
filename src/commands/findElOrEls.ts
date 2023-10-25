import type { Element } from '@appium/types';
import { errors } from '@appium/base-driver';
import { util } from 'appium-support';
import * as base64 from 'base-64';
import type { ElementHandle } from 'playwright';
import type { Driver } from '../Driver';

export async function getElement(this: Driver, element: string): Promise<ElementHandle> {
  const id = util.unwrapElement(element);
  const elementHandler = this.state.context.page!.elements[id];
  if (!elementHandler) {
    throw new errors.StaleElementReferenceError('Element is not part of the document page');
  }

  const isConnected = await elementHandler.evaluate((e) => e.isConnected).catch(() => false);
  if (!isConnected) {
    delete this.state.context.page!.elements[id];
    throw new errors.StaleElementReferenceError('Element is not attached to the page document');
  }

  return elementHandler;
}

export async function findElOrEls(this: Driver, strategy: string, selector: string, multiple?: boolean, parent?: string): Promise<Element[] | Element> {
  switch (strategy) {
    case 'id':
      selector = `id=${selector}`;
      break;
    case 'css selector':
      selector = `css=${selector}`;
      break;
    case 'link text':
      selector = `text=${selector}`;
      break;
    case 'partial link text':
      selector = `text=${selector}`;
      break;
    case 'tag name':
      selector = `css=${selector}`;
      break;
    case 'xpath':
      selector = `xpath=${selector}`;
      break;
  }

  const parentElement = parent ? await this.getElement(parent) : (await this.handlePrompts()).page.frame;
  if (this.opts.timeouts.implicit) {
    await parentElement.waitForSelector(selector, { state: 'attached', timeout: this.opts.timeouts.implicit }).catch(() => void 0);
  }

  const elementOrElements = multiple ? await parentElement.$$(selector) : await parentElement.$(selector);
  if (!elementOrElements) {
    throw new errors.NoSuchElementError(`Unable to locate element: ${selector}`);
  }

  if (Array.isArray(elementOrElements)) {
    return elementOrElements.map((element) => {
      // @ts-ignore because `_guid` is an internal property
      const id = base64.encode(element['_guid']);

      this.state.context.page!.elements[id] = element;
      return util.wrapElement(id);
    }) as any;
  }

  // @ts-ignore because `_guid` is an internal property
  const id = base64.encode(elementOrElements['_guid']);

  this.state.context.page!.elements[id] = elementOrElements;
  return util.wrapElement(id) as any;
}
