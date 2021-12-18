import type { Cookie } from 'playwright';
import type { Driver } from '../Driver';

export async function deleteCookies(this: Driver): Promise<void> {
  const cookies = (await this.getCookies()) as Cookie[];

  for (const cookie of cookies) {
    cookie.expires = 0;
  }

  await this.state.context.current.addCookies(cookies);
}
