import type { Driver } from '../Driver';

export async function printPage(this: Driver, options: any): Promise<string> {
  const { page } = await this.handlePrompts();

  options = Object.assign(
    {
      orientation: 'portrait',
      scale: 1,
      background: false,
      page: {
        width: 21.59,
        height: 27.94,
      },
      margin: {
        top: 1,
        bottom: 1,
        left: 1,
        right: 1,
      },
      shrinkToFit: true,
      pageRanges: [],
    },
    options
  );

  const pdf = await page.current.pdf({
    ...(options.page.width && options.page.height ? { width: `${options.page.width}cm`, height: `${options.page.height}cm` } : {}),
    pageRanges: (options.pageRanges || []).join(', '),
    landscape: options.orientation === 'landscape',
    margin: options.margin,
    printBackground: options.background,
    scale: options.scale,
    preferCSSPageSize: !options.shrinkToFit,
  });

  return pdf.toString('base64');
}
