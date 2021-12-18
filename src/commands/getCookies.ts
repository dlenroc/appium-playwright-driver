import type { Cookie } from '@appium/base-driver';
import type { Driver } from '../Driver';

export async function getCookies(this: Driver): Promise<Cookie[]> {
  const { context, page } = await this.handlePrompts();

  return context.current.cookies(page.frame.url()) as Promise<Cookie[]>;
}
