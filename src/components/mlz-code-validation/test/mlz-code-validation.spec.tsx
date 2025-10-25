import { newSpecPage } from '@stencil/core/testing';
import { MlzCodeValidation } from '../mlz-code-validation';

describe('mlz-code-validation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MlzCodeValidation],
      html: `<mlz-code-validation></mlz-code-validation>`,
    });
    expect(page.root).toEqualHtml(`
      <mlz-code-validation>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mlz-code-validation>
    `);
  });
});
