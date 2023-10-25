import type { Cookie } from '@appium/types';
import type { Driver } from '../Driver';

export async function getCookies(this: Driver): Promise<Cookie[]> {
  const { context, page } = await this.handlePrompts();

  return context.current.cookies(page.frame.url()) as Promise<Cookie[]>;
}
