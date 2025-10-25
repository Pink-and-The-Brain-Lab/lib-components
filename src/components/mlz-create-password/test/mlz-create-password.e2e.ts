import { newE2EPage } from '@stencil/core/testing';

describe('mlz-create-password', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mlz-create-password></mlz-create-password>');

    const element = await page.find('mlz-create-password');
    expect(element).toHaveClass('hydrated');
  });
});
