import { Driver } from '../Driver';

export async function implicitWaitW3C(this: Driver, ms: number): Promise<void> {
  this.opts.timeouts.implicit = ms;
}
