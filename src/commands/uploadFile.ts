import { Driver } from '../Driver';
import JSZip from 'jszip';
import fs from 'fs';

export async function uploadFile(this: Driver, base64File: string): Promise<string> {
  const zip = await JSZip.loadAsync(base64File, { base64: true });
  const files = Object.values(zip.files);
  if (files.length !== 1) {
    throw new this.errors.InvalidArgumentError('Only 1 file upload per call is allowed');
  }

  const file = files[0];
  const target = this.opts.tmpDir + '/' + file.name;
  const content = await file.async('nodebuffer');

  await fs.promises.writeFile(target, content);

  return target;
}
