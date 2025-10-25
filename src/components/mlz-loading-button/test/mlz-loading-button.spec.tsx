import { newSpecPage } from '@stencil/core/testing';
import { MlzLoadingButton } from '../mlz-loading-button';

describe('mlz-loading-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MlzLoadingButton],
      html: `<mlz-loading-button></mlz-loading-button>`,
    });
    expect(page.root).toEqualHtml(`
      <mlz-loading-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mlz-loading-button>
    `);
  });
});
