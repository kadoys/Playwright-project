import { test, expect } from '@playwright/test';


test('Buy', async ({ page }) => {
    await page.goto('https://kw.com');

    await page.fill('SearchInput-input-box', 'New York'); 
    await page.click('Search'); 

    const results = await page.locator('.search-result'); // Находим результаты
    await expect(results).toHaveCountGreaterThan(0); // Проверяем, что есть хотя бы одно объявление
});

test('Default Search', async ({ page }) => { //Default 
    await page.goto('https://kw.com');

    await page.fill('SearchInput-input-box', ' '); 
    await page.click('Search'); 

    const results = await page.locator('.search-result'); // Находим результаты
    await expect(results).toHaveCountGreaterThan(0); // Проверяем, что есть хотя бы одно объявление
});

test('Rent', async ({ page }) => {
    await page.goto('https://kw.com');

    await page.fill('SearchInput-input-box', 'New York'); 
    await page.click('Search'); 

    const results = await page.locator('.search-result'); // Находим результаты
    await expect(results).toHaveCountGreaterThan(0); // Проверяем, что есть хотя бы одно объявление
});

