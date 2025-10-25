import { newSpecPage } from '@stencil/core/testing';
import { MlzImageSelector } from '../mlz-image-selector';

describe('mlz-image-selector', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MlzImageSelector],
      html: `<mlz-image-selector></mlz-image-selector>`,
    });
    expect(page.root).toEqualHtml(`
      <mlz-image-selector>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mlz-image-selector>
    `);
  });
});
