import { util } from 'appium-support';
import type { Driver } from '../Driver';

export async function executeAsync(this: Driver, script: string, args: any[]): Promise<any> {
  const { page } = await this.handlePrompts();

  for (let i = 0; i < args.length; i++) {
    const isElement = util.unwrapElement(args[i]) !== args[i];

    if (isElement) {
      args[i] = await this.getElement(args[i]);
    }
  }

  return page.frame.evaluate(
    ([script, args]) => {
      return new Promise((resolve) => {
        return new Function(script as any)(...args, resolve);
      });
    },
    [script, args]
  );
}
