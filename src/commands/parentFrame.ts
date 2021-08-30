import { Driver } from '../Driver';

export async function parentFrame(this: Driver): Promise<void> {
  const { page } = await this.handlePrompts();

  let frame = page.frame.parentFrame();
  if (!frame) {
    frame = page.current.mainFrame();
  }

  page.frame = frame;
}
