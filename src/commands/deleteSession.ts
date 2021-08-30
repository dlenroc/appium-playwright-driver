import { Driver } from '../Driver';
import rimraf from 'rimraf';

export async function deleteSession(this: Driver, deleteSession?: any): Promise<void> {
  await deleteSession();
  await this.state.browser.close();

  rimraf(this.opts.tmpDir, () => void 0);
}
