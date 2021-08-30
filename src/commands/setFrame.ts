import { Element } from 'appium-base-driver';
import { Frame } from 'playwright';
import { Driver } from '../Driver';

export async function setFrame(this: Driver, selector: null | number | string | Element): Promise<void> {
  const { page } = await this.handlePrompts();

  let frame: Frame | undefined | null;

  // switch to main frame
  if (selector === null) {
    frame = page.current.mainFrame();
  }

  // switch to iframe by index
  else if (typeof selector === 'number') {
    frame = page.frame.childFrames()[selector];
  }

  // switch to iframe by name
  else if (typeof selector === 'string') {
    frame = page.frame.childFrames().find((frame) => frame.name() === selector);
  }

  // switch to iframe represented by element
  else {
    const element = await this.getElement(selector);
    const tagProperty = await element.getProperty('tagName');
    const tagName = await tagProperty.jsonValue();
    if (tagName.toLowerCase() !== 'iframe') {
      throw new this.errors.NoSuchFrameError('Element is not a frame');
    }

    frame = await element.contentFrame();
  }

  if (!frame) {
    throw new this.errors.NoSuchFrameError(`No frame element found by name or id ${selector}`);
  }

  page.frame = frame;
}
