import rimraf from 'rimraf';
import type { Driver } from '../Driver';

export async function deleteSession(this: Driver, deleteSession?: any): Promise<void> {
  await deleteSession();
  await this.state.browser.close();

  rimraf(this.opts.tmpDir, () => void 0);
}
