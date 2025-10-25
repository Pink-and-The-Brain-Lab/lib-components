import { newE2EPage } from '@stencil/core/testing';

describe('mlz-range', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mlz-range></mlz-range>');

    const element = await page.find('mlz-range');
    expect(element).toHaveClass('hydrated');
  });
});
