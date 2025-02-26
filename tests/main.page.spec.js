const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/MainPage');

const BASE_URL = 'https://kw.com/';
const FULLCITYNAME = 'new york';
const query = 'N';
const SEARCHURL = 'https://kw.com/search/';
const NUMERICINPUT = '123456'
const AGENTNAME = 'Jane'

    
    
  //BUY

    test('Check search functionality', async ({ page }) => {
        let mainPage = new MainPage(page);
        await mainPage.navigate();
        await mainPage.searchForProperty(FULLCITYNAME);
        await mainPage.clickSearchButton();
        await expect(page.url()).toContain("https://www.kw.com/search")
        await expect.toHaveText(FULLCITYNAME);
    });

    test('Check search functionality with empty fields', async ({ page }) => {
        let mainPage = new MainPage(page);
        await mainPage.navigate();
        await mainPage.searchForProperty('');
        await mainPage.clickSearchButton();
        await expect(page.url()).toContain("https://www.kw.com/search")
    });


    test('Check special characters in search', async ({ page }) => {
        let mainPage = new MainPage(page);
        await mainPage.navigate();
        await mainPage.searchForProperty(query);
        await mainPage.clickSearchButton();
        await expect(page.url()).toContain("https://www.kw.com/search");
        await expect.toHaveText("No Results");
        ;
    });
    
    test('Check numerical input', async ({ page }) => {
        let mainPage = new MainPage(page);
        await mainPage.navigate();
        await mainPage.searchForProperty(NUMERICINPUT);
        await mainPage.clickSearchButton();
        await expect(page.url()).toContain("https://www.kw.com/search");
        await expect.toHaveText("No Results");
    });
    
    //RENT
    
    test('Check search functionality for Rent tab', async ({ page }) => {
        let mainPage = new MainPage(page);
        await mainPage.navigate();
        await mainPage.clickRentButton();
        await mainPage.searchForProperty(FULLCITYNAME);
        await mainPage.clickSearchButton();
        await expect(page.url()).toContain("https://www.kw.com/search");
        await expect.toHaveText(FULLCITYNAME);
    });

    test('Check search functionality with empty fields for Rent tab', async ({ page }) => {
        let mainPage = new MainPage(page);
        await mainPage.navigate();
        await mainPage.clickRentButton();
        await mainPage.searchForProperty('');
        await mainPage.clickSearchButton();
        await expect(page.url()).toContain("https://www.kw.com/search")
    });
    
    test('Check special characters in search for Rent', async ({ page }) => {
            let mainPage = new MainPage(page);
            await mainPage.navigate();
            await mainPage.clickRentButton();
            await mainPage.searchForProperty(query);
            await mainPage.clickSearchButton();
            await expect(page.url()).toContain("https://www.kw.com/search");
            await expect.toHaveText("No Results");
        });

    test('Check numerical input for Rent', async ({ page }) => {
            let mainPage = new MainPage(page);
            await mainPage.navigate();
            await mainPage.clickRentButton();
            await mainPage.searchForProperty(NUMERICINPUT);
            await mainPage.clickSearchButton();
            await expect(page.url()).toContain("https://www.kw.com/search");
            await expect.toHaveText("No Results");
        });

        
//FIND A KW AGEND
    
    
test('Check search functionality for agents ', async ({ page }) => {
    let mainPage = new MainPage(page);
    await mainPage.navigate();
    await mainPage.clickkwAgentButton();
    await mainPage.searchForProperty(AGENTNAME);
    await mainPage.clickSearchButton();
    await expect(page).toHaveURL(/Jane/);
    await expect.toHaveText(AGENTNAME);
});
