import { newE2EPage } from '@stencil/core/testing';

describe('mlz-image-selector', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mlz-image-selector></mlz-image-selector>');

    const element = await page.find('mlz-image-selector');
    expect(element).toHaveClass('hydrated');
  });
});
