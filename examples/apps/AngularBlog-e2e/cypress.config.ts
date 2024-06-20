import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run AngularBlog:serve:development',
        production: 'nx run AngularBlog:serve:production',
      },
      ciWebServerCommand: 'nx run AngularBlog:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
