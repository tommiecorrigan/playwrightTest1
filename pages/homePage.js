import { expect } from '@playwright/test';
// pages/homePage.js
export class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // URL for this page
    this.url = 'https://www.dutch.com/';
    // Header selectors (top nav)
    this.whatWeTreatLink = 'text=What We Treat';
    this.pharmacyStoreLink = 'text=Pharmacy & Store';
    this.ourServicesLink = 'text=Our Services';
    this.aboutDutchLink = 'text=About Dutch';
    this.loginLink = 'text=Log In';
    this.joinNowButton = 'text=Join Now';

    // Example of a title selector
    this.heroTitle = 'h1';

  }

  async goto() {
    await this.page.goto(this.url);
  }

  async checkHeaderLinks() {
    const { page } = this;
    await expect(page.getByRole('link', { name: 'What we treat' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Pharmacy & Store' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Our Services' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About Dutch' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Log In' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'JOIN NOW' })).toBeVisible();
  }


  // async checkHeaderLinks() {
  //       const links = [
  //         'What We Treat',
  //         'Pharmacy & Store',
  //         'Our Services',
  //         'About Dutch',
  //         'Log In',
  //         'Join Now'
  //       ];
  //       for (const name of links) {
  //         const locator = this.page.getByRole('link', { name });
  //         await locator.waitFor({ state: 'visible', timeout: 5000 });
  //         const visible = await locator.isVisible();
  //         if (!visible) throw new Error (`Header link "${name}" is not visible`);
  //       }
  //     }

async goToDogAllergyPage() {
  const { page } = this;
  await page.goto(this.url);
  await page.getByRole('link', { name: 'What we treat' }).hover();

  await page.getByRole('link', { name: 'Dogs', exact: true }).hover();
  await page.locator('#main-nav-desktop').getByRole('link', { name: 'Allergy' }).click();
  await expect(this.page).toHaveURL(/.*allergy/);
}
async goToCatAllergyPage() {
  const { page } = this;
  await page.goto(this.url);
  await page.getByRole('link', { name: 'What we treat' }).hover();

  await page.getByRole('link', { name: 'Cats', exact: true }).hover();
  await page.locator('#main-nav-desktop').getByRole('link', { name: 'Allergy' }).click();
  await expect(this.page).toHaveURL(/.*allergy/);
}

  async clickWhatWeTreat() {
    await this.page.hover(this.whatWeTreatLink)

  }

  async getHeroTitleText() {
    return this.page.textContent(this.heroTitle);
  }
}
