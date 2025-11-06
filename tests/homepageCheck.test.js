// tests/header.spec.js
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';

test('header links are visible on Dutch homepage', async ({ page }) => {
  const home = new HomePage(page);

  await home.goto();
  await home.checkHeaderLinks();

});

test (' go to dog allergies', async ({ page }) => {
  const home = new HomePage(page);
  await home.goToDogAllergyPage();

})
test ('go to cat allergies', async ({ page }) => {
  const home = new HomePage(page);
  await home.goToCatAllergyPage();
})

test('What we treat menu can be clicked', async ({ page }) => {
  const home = new HomePage(page);

  await home.goto();
  await home.clickWhatWeTreat();

  // Example: just assert that we're still on Dutch and something loads
  await expect(page).toHaveURL(/dutch\.com/);
});


