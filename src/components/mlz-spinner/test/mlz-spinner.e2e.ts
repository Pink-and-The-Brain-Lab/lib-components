import { newE2EPage } from '@stencil/core/testing';

describe('mlz-spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mlz-spinner></mlz-spinner>');

    const element = await page.find('mlz-spinner');
    expect(element).toHaveClass('hydrated');
  });
});
