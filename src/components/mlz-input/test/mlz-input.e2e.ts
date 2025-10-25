import { newE2EPage } from '@stencil/core/testing';

describe('mlz-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mlz-input></mlz-input>');

    const element = await page.find('mlz-input');
    expect(element).toHaveClass('hydrated');
  });
});
