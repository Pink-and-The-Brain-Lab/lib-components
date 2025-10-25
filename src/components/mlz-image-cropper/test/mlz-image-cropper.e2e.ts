import { newE2EPage } from '@stencil/core/testing';

describe('mlz-image-cropper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mlz-image-cropper></mlz-image-cropper>');

    const element = await page.find('mlz-image-cropper');
    expect(element).toHaveClass('hydrated');
  });
});
