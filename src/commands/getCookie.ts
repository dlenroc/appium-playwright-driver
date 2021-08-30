import { Cookie } from 'playwright';
import { Driver } from '../Driver';

export async function getCookie(this: Driver, name: string): Promise<Cookie> {
  const cookies = await this.getCookies();
  const cookie = cookies.find((cookie) => cookie.name == name);

  if (!cookie) {
    throw new this.errors.NoSuchCookieError();
  }

  return cookie;
}
