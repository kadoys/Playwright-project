const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://accounts.kw.com';
const VALID_EMAIL = 'kadoys@gmail.com';
const VALID_PASSWORD = 'Kriscolfer1!';
const INVALID_EMAIL = 'invalid@example';
const INVALID_PASSWORD = 'wrongpass';

//Successful login

test('Successful login with valid credentials', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('input[name="email"]', VALID_EMAIL);
    await page.fill('input[name="password"]', VALID_PASSWORD);
    await page.click('button:has-text("Log In")');
    await expect(page).toHaveURL(/dashboard/); // Проверяем, что редирект на dashboard
});

//Login fails

test('Login fails with incorrect password', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('input[name="email"]', VALID_EMAIL);
    await page.fill('input[name="password"]', INVALID_PASSWORD);
    await page.click('button:has-text("Log In")');
    await expect(page.locator('.error-message')).toHaveText('Incorrect email or password');
});

//Login fails with invalid email

test('Login fails with invalid email format', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('input[name="email"]', INVALID_EMAIL);
    await page.fill('input[name="password"]', VALID_PASSWORD);
    await page.click('button:has-text("Log In")');
    await expect(page.locator('.error-message')).toHaveText('Invalid email format');
});

// When fields are empty

test('Login button is disabled when fields are empty', async ({ page }) => {
    await page.goto(BASE_URL);
    const loginButton = page.locator('button:has-text("Log In")');
    await expect(loginButton).toBeDisabled();
});

// Forget password page

test('Forgot password link redirects to reset page', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('text=Forgot Password?');
    await expect(page).toHaveURL(/forgot-password/);
});

// Google authorization

test('Login with Google button works', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('button:has-text("Google")');
    await expect(page).toHaveURL(/accounts.google.com/);
});

// 'Password input field hides text

test('Password input field hides text', async ({ page }) => {
    await page.goto(BASE_URL);
    const passwordInput = page.locator('input[name="password"]');
    await passwordInput.fill(VALID_PASSWORD);
    await expect(passwordInput).toHaveAttribute('type', 'password');
});