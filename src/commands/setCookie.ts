import type { Cookie } from '@appium/base-driver';
import { URL } from 'url';
import type { Driver } from '../Driver';

export async function setCookie(this: Driver, cookie: Cookie): Promise<void> {
  const { context, page } = await this.handlePrompts();

  const url = new URL(page.frame.url());
  const path = '/';
  const domain = url.host;
  cookie = Object.assign({ domain, path, secure: false, httpOnly: false }, cookie);

  await context.current.addCookies([cookie]);
}
