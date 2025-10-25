import { newSpecPage } from '@stencil/core/testing';
import { MlzSpinner } from '../mlz-spinner';

describe('mlz-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MlzSpinner],
      html: `<mlz-spinner></mlz-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <mlz-spinner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mlz-spinner>
    `);
  });
});
