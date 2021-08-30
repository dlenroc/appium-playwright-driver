import { Driver } from '../Driver';

export async function pageLoadTimeoutW3C(this: Driver, ms: number): Promise<void> {
  this.opts.timeouts.pageLoad = ms;
}
