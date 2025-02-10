const { test, expect } = require('@playwright/test');
const { HomePage } = require('./HomePage');

const { test, expect } = require('@playwright/test');

test.describe('KW Main Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://kw.com');
    });
    
    test('Check page loads successfully', async ({ page }) => {
        await expect(page).toHaveTitle(/kw/i);
    });
    
    test('Check search functionality', async ({ page }) => {
        const searchInput = page.locator('input[placeholder="City, Neighborhood, Address, Postal Code, School District"]');
        await searchInput.fill('New York');
        await page.locator('button:has-text("Search")').click();
        await expect(page).toHaveURL(/search/);
    });
    test('Check special characters in search', async ({ page }) => {
        const searchInput = page.locator('input[placeholder="City, Neighborhood, Address, Postal Code, School District"]');
        await searchInput.fill('@#$%^&*()');
        await page.locator('button:has-text("Search")').click();
        await expect(page).not.toHaveURL(/search/);
    });
    
    test('Check numerical input', async ({ page }) => {
        const searchInput = page.locator('input[placeholder="City, Neighborhood, Address, Postal Code, School District"]');
        await searchInput.fill('12345');
        await page.locator('button:has-text("Search")').click();
        await expect(page).toHaveURL(/search/);
    });
    
    test('Check long string input', async ({ page }) => {
        const searchInput = page.locator('input[placeholder="City, Neighborhood, Address, Postal Code, School District"]');
        await searchInput.fill('This is a very long input text to check the behavior of the search field');
        await page.locator('button:has-text("Search")').click();
        await expect(page).toHaveURL(/search/);
    });
    
    test('Check Log In / Sign Up button', async ({ page }) => {
        await page.locator('text=Log In / Sign Up').click();
        await expect(page).toHaveURL(/login/);
    });
    
    test('Check navigation tabs', async ({ page }) => {
        await page.locator('text=RENT').click();
        await expect(page).toHaveURL(/rent/);
        
        await page.locator('text=BUY').click();
        await expect(page).toHaveURL(/buy/);
        
        await page.locator('text=FIND A KW® AGENT').click();
        await expect(page).toHaveURL(/agents/);
    });
    
    test('Check language switcher', async ({ page }) => {
        await page.locator('text=Worldwide').click();
        await page.locator('text=Español').click();
        await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    });
});