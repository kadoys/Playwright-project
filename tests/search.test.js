//const { test } from ('../Fixtures/fixtures.js');
import { expect } from '@playwright/test';
import { test } from '../Fixtures/fixtures';
import * as fs from 'fs';
const config = JSON.parse(fs.readFileSync('config.json', 'utf-8'))



test.describe('BUY', () => {
  test('Check search functionality', async ({ mainPage, config }) => {
    await mainPage.searchForProperty(testData.fullCityName);
    await expect(mainPage.searchInput).toHaveValue();
    await mainPage.clickSearchButton();
    await expect(mainPage.page).toHaveURL(/search/);
    await expect(mainPage.page.locator('body')).toHaveText(testData.fullCityName);
  });
});

  test('Check search functionality with empty fields', async ({ mainPage }) => {
    await mainPage.searchForProperty('');
    await mainPage.clickSearchButton();
    await expect(mainPage.page).toHaveURL(/search/);
  });

  test('Check special characters in search', async ({ mainPage, testData }) => {
    await mainPage.searchForProperty(testData.query);
    await expect(mainPage.searchInput).toHaveValue(testData.query);
    await mainPage.clickSearchButton();
    await expect(mainPage.page).toHaveURL(/search/);
    await expect(mainPage.page.locator('body')).toHaveText("No Results");
  });

  test('Check numerical input', async ({ mainPage, testData }) => {
    await mainPage.searchForProperty(testData.numericInput);
    await mainPage.clickSearchButton();
    await expect(mainPage.page).toHaveURL(/search/);
    await expect(mainPage.page.locator('body')).toHaveText("No Results");
  });


test.describe('RENT', () => {
  test('Check search functionality for Rent tab', async ({mainPage, testData}) => {
    await mainPage.clickRentButton();
    await mainPage.searchForProperty(testData.fullCityName);
    await mainPage.clickSearchButton();
    await expect(mainPage.page).toHaveURL(/search/);
    await expect(mainPage.page.locator('body')).toHaveText(testData.fullCityName);
  });

  test('Check search functionality with empty fields for Rent tab', async ({mainPage}) => {
    await mainPage.clickRentButton();
    await mainPage.searchForProperty('');
    await mainPage.clickSearchButton();
    await expect(mainPage.page).toHaveURL(/search/);
  });

  test('Check special characters in search for Rent', async ({mainPage, testData}) => {
    await mainPage.clickRentButton();
    await mainPage.searchForProperty(testData.query);
    await mainPage.clickSearchButton();
    await expect(mainPage.page).toHaveURL(/search/);
    await expect(mainPage.page.locator('body')).toHaveText("No Results");
  });

  test('Check numerical input for Rent', async ({mainPage, testData}) => {
    await mainPage.clickRentButton();
    await mainPage.searchForProperty(testData.numericInput);
    await mainPage.clickSearchButton();
    await expect(mainPage.page).toHaveURL(/search/);
    await expect(mainPage.page.locator('body')).toHaveText("No Results");
  });


  test.describe('FIND A KW AGENT', () => {
    test('Check search functionality for agents', async ({mainPage, testData}) => {
      await mainPage.clickkwAgentButton();
      await mainPage.searchForProperty(testData.agentName);
      await mainPage.clickSearchButton();
      await expect(mainPage.page).toHaveURL(/Jane/);
      await expect(mainPage.page.locator('body')).toHaveText(testData.agentName);
    });
  })
})


