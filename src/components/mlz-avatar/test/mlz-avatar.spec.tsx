import { newSpecPage } from '@stencil/core/testing';
import { MlzAvatar } from '../mlz-avatar';

describe('mlz-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MlzAvatar],
      html: `<mlz-avatar></mlz-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <mlz-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mlz-avatar>
    `);
  });
});
