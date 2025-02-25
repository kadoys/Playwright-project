
const { expect } = require('@playwright/test');

 export class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.loginButton = page.locator('button:has-text("Log In / Sign Up")');
        this.logInDiv = page.locator('#submit-button');
        this.emailInput = page.locator('#email'); // Email field
        this.passwordInput = page.locator('#password'); // Password field
        this.loginButton = page.locator('button:has-text("Log In")'); // Log in button
        this.forgotPasswordLink = page.locator('text=Forgot Password?'); // Forgot password field
        this.googleLogin = page.locator('button:has-text("Google")');
        this.appleLogin = page.locator('button:has-text("Apple")');
        this.facebookLogin = page.locator('button:has-text("Facebook")');
        this.errorMessage = page.locator('.error-message');

      
    }

    /**
     * Open login page
     */
    async navigate() {
        await this.page.goto('https://kw.com/'); 
        await this.page.getByRole('button', { name: 'Log In / Sign Up' }).click();

    }
    /**
     * Logins
     *
     *
     */
    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        
        if (await this.loginButton.isEnabled()) {
            await this.loginButton.click();
        } else {
            console.log('Кнопка `Login` отключена, клик не выполняется.');
        }
    }

  /**
     * Log in button is disabled
     */

  async getErrorMessage() {
    return await this.errorMessage.textContent(); 
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

   
}

module.exports = { LoginPage };