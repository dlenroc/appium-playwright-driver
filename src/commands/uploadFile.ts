import { errors } from '@appium/base-driver';
import fs from 'fs';
import JSZip from 'jszip';
import type { Driver } from '../Driver';

export async function uploadFile(this: Driver, base64File: string): Promise<string> {
  const zip = await JSZip.loadAsync(base64File, { base64: true });
  const files = Object.values(zip.files);
  if (files.length !== 1) {
    throw new errors.InvalidArgumentError('Only 1 file upload per call is allowed');
  }

  const file = files[0];
  const target = this.opts.tmpDir + '/' + file.name;
  const content = await file.async('nodebuffer');

  await fs.promises.writeFile(target, content);

  return target;
}
