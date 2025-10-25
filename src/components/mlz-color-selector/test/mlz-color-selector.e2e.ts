import { newE2EPage } from '@stencil/core/testing';

describe('mlz-color-selector', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mlz-color-selector></mlz-color-selector>');

    const element = await page.find('mlz-color-selector');
    expect(element).toHaveClass('hydrated');
  });
});
