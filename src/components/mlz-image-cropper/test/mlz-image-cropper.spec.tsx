import { newSpecPage } from '@stencil/core/testing';
import { MlzImageCropper } from '../mlz-image-cropper';

describe('mlz-image-cropper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MlzImageCropper],
      html: `<mlz-image-cropper></mlz-image-cropper>`,
    });
    expect(page.root).toEqualHtml(`
      <mlz-image-cropper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mlz-image-cropper>
    `);
  });
});
