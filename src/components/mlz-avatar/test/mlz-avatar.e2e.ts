import { newE2EPage } from '@stencil/core/testing';

describe('mlz-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mlz-avatar></mlz-avatar>');

    const element = await page.find('mlz-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
