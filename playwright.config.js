// playwright.config.js
import { defineConfig } from '@playwright/test';

const isCI = !!process.env.CI;
export default defineConfig({
  testDir: './tests',
  reporter: [
    ['line'], // prints to terminal
    ['html', { open: 'never' }], // generates HTML report
  ],
  use: {
    headless: isCI, // 👈 Forces browsers to open visibly
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
      },
  }
});
