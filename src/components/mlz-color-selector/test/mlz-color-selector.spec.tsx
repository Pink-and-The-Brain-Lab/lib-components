import { newSpecPage } from '@stencil/core/testing';
import { MlzColorSelector } from '../mlz-color-selector';

describe('mlz-color-selector', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MlzColorSelector],
      html: `<mlz-color-selector></mlz-color-selector>`,
    });
    expect(page.root).toEqualHtml(`
      <mlz-color-selector>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mlz-color-selector>
    `);
  });
});
