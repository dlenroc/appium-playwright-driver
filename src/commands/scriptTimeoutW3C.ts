import type { Driver } from '../Driver';

export async function scriptTimeoutW3C(this: Driver, ms: number): Promise<void> {
  this.opts.timeouts.script = ms;
}
