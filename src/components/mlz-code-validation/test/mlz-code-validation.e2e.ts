import { newE2EPage } from '@stencil/core/testing';

describe('mlz-code-validation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mlz-code-validation></mlz-code-validation>');

    const element = await page.find('mlz-code-validation');
    expect(element).toHaveClass('hydrated');
  });
});
