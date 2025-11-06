// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [
    ['line'], // prints to terminal
    ['html', { open: 'never' }], // generates HTML report
  ],
  use: {
    headless: false, // 👈 Forces browsers to open visibly
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
      },
  }
});
