
import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/LoginPage'); 

const BASE_URL = 'https://kw.com/';
const VALID_EMAIL = 'Valeriia.Horiuchkina@ventionteams.com';
const VALID_PASSWORD = 'Kriscolfer654321!';
const INVALID_EMAIL = 'invalid@example';
const INVALID_PASSWORD = 'wrongpass';

//Successful login

test('Successful login with valid credentials', async ({ page }) => {
 let loginPage = new LoginPage(page);
 await loginPage.navigate();
 await loginPage.login(VALID_EMAIL, VALID_PASSWORD);
 await expect(page).toHaveURL(BASE_URL);

});
 

//Login fails

test('Login fails with incorrect password', async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(VALID_EMAIL, INVALID_PASSWORD);
    await expect(await loginPage.getErrorMessage()).toContain('Invalid log in credentials. Please verify the email and password'); ;
});

test('Login fails with incorrect email', async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(INVALID_EMAIL, VALID_PASSWORD);
    await expect(await loginPage.getErrorMessage()).toContain('Invalid log in credentials. Please verify the email and password'); ;
});


// When fields are empty

test('Login button is disabled when fields are empty', async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('','');
    await expect(loginPage.logInDiv).toBeDisabled();
});

// Forget password page

test('Forgot password link redirects to reset page', async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.clickForgotPassword();
    await expect.toHaveText("Forgot Password?");
});

// Google authorization


//'Password input field hides text

