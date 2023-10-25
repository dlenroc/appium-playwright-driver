import type { Cookie } from '@appium/types';
import { errors } from '@appium/base-driver';
import type { Driver } from '../Driver';

export async function getCookie(this: Driver, name: string): Promise<Cookie> {
  const cookies = await this.getCookies();
  const cookie = cookies.find((cookie) => cookie.name == name);

  if (!cookie) {
    throw new errors.NoSuchCookieError();
  }

  return cookie as Cookie;
}
