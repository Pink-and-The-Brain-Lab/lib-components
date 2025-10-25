import { newE2EPage } from '@stencil/core/testing';

describe('mlz-loading-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mlz-loading-button></mlz-loading-button>');

    const element = await page.find('mlz-loading-button');
    expect(element).toHaveClass('hydrated');
  });
});
