import type { Driver } from '../Driver';

export async function getTimeouts(this: Driver): Promise<{ pageLoad: number; script: number; implicit: number }> {
  return this.opts.timeouts;
}
