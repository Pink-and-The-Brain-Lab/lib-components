import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'millez-components',
  globalStyle: 'src/global/styles/styles.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [{
        src: 'global/styles/styles.scss',
        dest: 'build/styles.css',
      }, {
        src: 'global/styles/variables.scss',
        dest: 'build/variables.css'
      }]
    },
  ],
  plugins: [
    sass()
  ],
  testing: {
    browserHeadless: "shell",
  },
};
