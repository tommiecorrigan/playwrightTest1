import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';
import { JoinNowPage } from '../pages/joinNowPage.js';

test('Click Join Now on homepage and check registration form details', async ({ page }) => {
  const home = new HomePage(page);
  await home.clickJoinNow();

  const joinNowPage = new JoinNowPage(page);
  await joinNowPage.checkRegistrationFormDetails();

},
test('Dutch Sign up page smoke test', async ({ page }) => {
  const home = new HomePage(page);
  const joinNowPage = new JoinNowPage(page);

  await test.step('Navigate to Join Now page', async () => {
  await home.clickJoinNow();
  });

  await test.step('Check registration form details and enter pet name', async () => {
  await joinNowPage.checkRegistrationFormDetails();
  });

  await test.step('Enter pet name', async () => {
  await joinNowPage.enterPetName();
  });

  await test.step('Verify pet age options in dropdown', async () => {
    await joinNowPage.verifyPetAgeOptions();
  })

  await test.step('Select how old is your pet', async () => {
    await joinNowPage.selectPetAge('0-2')
  })

  await test.step('Verify state dropdown options', async () => {
    await joinNowPage.verifyStateDropdownOptions();
  })

  await test.step('Select state in dropdown', async () => {
    await joinNowPage.selectState('California');
  })

}
)
);

