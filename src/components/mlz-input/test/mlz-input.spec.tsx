import { newSpecPage } from '@stencil/core/testing';
import { MlzInput } from '../mlz-input';

describe('mlz-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MlzInput],
      html: `<mlz-input></mlz-input>`,
    });
    expect(page.root).toEqualHtml(`
      <mlz-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mlz-input>
    `);
  });
});
