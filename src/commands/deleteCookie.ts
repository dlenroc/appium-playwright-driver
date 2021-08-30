import { Driver } from '../Driver';

export async function deleteCookie(this: Driver, name: string): Promise<void> {
  const cookies = await this.getCookies();
  const deleteCookies = [];

  for (const cookie of cookies) {
    if (cookie.name === name) {
      cookie.expires = 0;

      deleteCookies.push(cookie);
    }
  }

  await this.state.context.current.addCookies(deleteCookies);
}
