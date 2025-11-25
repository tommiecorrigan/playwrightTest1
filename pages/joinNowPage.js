import { expect } from '@playwright/test';
// pages/joinNowPage.js
export class JoinNowPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.dogRadioButton = page.getByRole('radio', { name: 'Dog' });
    this.catRadioButton = page.getByRole('radio', { name: 'Cat' });
    this.petNameInput = page.locator('#pet-name');
    this.petAgeDropdown = page.getByRole('combobox', {
      name: /how old is your pet/i,
    });
    this.stateDropdown = page.getByRole('combobox', { name: /state/i });
  }

  async checkRegistrationFormDetails() {
    await this.dogRadioButton.check();
    await expect(this.dogRadioButton).toBeChecked();
    await this.catRadioButton.check();
    await expect(this.catRadioButton).toBeChecked();
  }

  async enterPetName() {
    await expect(this.petNameInput).toBeVisible();
    await this.petNameInput.fill('Tito');
  }
  async verifyPetAgeOptions() {
    const options = this.petAgeDropdown.locator('option:not(:disabled)');
    const texts = await options.allTextContents();
    const expectedAgeOptions = ['0-2', '3-7', '8+'];

    for (const option of expectedAgeOptions) {
      if (!texts.includes(option)) {
        throw new Error(
          `Age option "${option}" is not available in the dropdown`,
        );
      } else {
        console.log(`Age option "${option}" is available in the dropdown`);
      }
    }
  }
  async selectPetAge(age) {
    await this.petAgeDropdown.selectOption(age);
    const selectedOption = this.petAgeDropdown.locator('option:checked');
    await expect(selectedOption).toHaveText(age);
  }

  async verifyStateDropdownOptions() {
    const options = this.stateDropdown.locator('option:not(:disabled)');
    const states = await options.allTextContents();
    const expectedStates = [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming',
    ];

    for (const state of expectedStates) {
      if (!states.includes(state)) {
        throw new Error(`State "${state}" is not available in the dropdown`);
      } else {
        console.log(`State "${state}" is available in the dropdown`);
      }
    }
  }

  async selectState(state) {
    await this.stateDropdown.selectOption({ label: state });
    const selectedOption = this.stateDropdown.locator('option:checked');
    await expect(selectedOption).toHaveText(state);
  }

}