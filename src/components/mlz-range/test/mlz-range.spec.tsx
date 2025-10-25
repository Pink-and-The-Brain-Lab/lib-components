import { newSpecPage } from '@stencil/core/testing';
import { MlzRange } from '../mlz-range';

describe('mlz-range', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MlzRange],
      html: `<mlz-range></mlz-range>`,
    });
    expect(page.root).toEqualHtml(`
      <mlz-range>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mlz-range>
    `);
  });
});
