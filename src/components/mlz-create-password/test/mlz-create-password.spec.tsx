import { newSpecPage } from '@stencil/core/testing';
import { MlzCreatePassword } from '../mlz-create-password';

describe('mlz-create-password', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MlzCreatePassword],
      html: `<mlz-create-password></mlz-create-password>`,
    });
    expect(page.root).toEqualHtml(`
      <mlz-create-password>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mlz-create-password>
    `);
  });
});
