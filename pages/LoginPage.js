import {test, expect} from '@playwright/test';
class LoginPage {
    constructor(page) {
      this.page = page; 
      this.emailField = '#email'; 
      this.passwordField = '#password'; 
      this.loginButton = '#login'; 
    }
    
    async navigate(url) {
        await this.page.goto("https://kw.com/"); 
      }
    
      async login(email, password) {
        await this.page.fill(this.emailField, email); 
        await this.page.fill(this.passwordField, password); 
        await this.page.click(this.loginButton); 
      }
    }
    
    module.exports = LoginPage;