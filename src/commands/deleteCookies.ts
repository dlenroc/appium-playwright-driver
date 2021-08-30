import { Driver } from '../Driver';

export async function deleteCookies(this: Driver): Promise<void> {
  const cookies = await this.getCookies();

  for (const cookie of cookies) {
    cookie.expires = 0;
  }

  await this.state.context.current.addCookies(cookies);
}
