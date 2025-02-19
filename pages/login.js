
import { Page } from "playwright/test"

class LoginPage {
   readonly page
    constructor(page) {
        this.page = page;
        this.username = "#email"
        this.passwordInput = page.locator('input[name="password"]'); // Password field
        this.loginButton = page.locator('button:has-text("Log In")'); // Log in button
        this.forgotPasswordLink = page.locator('text=Forgot Password?'); // Forgot password field
        this.signUpLink = page.locator('text=Sign Up'); // Registration

       
        this.googleLogin = page.locator('button:has-text("Google")');
        this.appleLogin = page.locator('button:has-text("Apple")');
        this.facebookLogin = page.locator('button:has-text("Facebook")');

       // Error messages 
        this.errorMessage = page.locator('.error-message'); // Error message
    }

    /**
     * Open login page
     */
    async navigate() {
        await this.page.goto('https://accounts.kw.com/as/authorize'); // 
    }

    /**
     * Login
     * @param {string} email
     * @param {string} password
     */
    async login(email, password) {
        await this.username.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    /**
     * Log in button is disabled
     */
    async verifyLoginButtonDisabled() {
        await expect(this.loginButton).toBeDisabled();
    }

    /**
     * Forgot password page
     */
    async clickForgotPassword() {
        await this.forgotPasswordLink.click();
    }

    /**
     * Sign Up page
     */
    async clickSignUp() {
        await this.signUpLink.click();
    }

    /**
     * Login with Google
     */
    async loginWithGoogle() {
        await this.googleLogin.click();
    }

    /**
     * Login with Apple
     */
    async loginWithApple() {
        await this.appleLogin.click();
    }

    /**
     * Login with Facebook
     */
    async loginWithFacebook() {
        await this.facebookLogin.click();
    }

    /**
     * Invalid data
     */
    async verifyErrorMessage(expectedText) {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText(expectedText);
    }
}

module.exports = { LoginPage };