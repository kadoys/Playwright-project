const { expect } = require('@playwright/test');

class MainPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
     
        this.logo = page.locator('.kw-logo'); 
        
        
        this.searchInput = page.locator('input[placeholder="City, Neighborhood, Address, Postal Code, School District"]');
        this.searchButton = page.locator('button:has-text("Search")');
        
        // Buy, Rent, Find and KW Agent
        this.buyTab = page.locator('text=BUY');
        this.rentTab = page.locator('text=RENT');
        this.findAgentTab = page.locator('text=FIND A KW® AGENT');

      
        this.searchLink = page.locator('text=Search');
        this.findAgentLink = page.locator('text=Find a KW® Agent');
        this.becomeAgentLink = page.locator('text=Become a KW® Agent');

       
        this.userIcon = page.locator('button:has-text("VH")');
    }

   
    async navigate() {
        await this.page.goto('https://www.kw.com/'); 
    }

    /**
     * Find property
     * @param {string} query
     */
    async searchForProperty(query) {
        await this.searchInput.fill(query);
        await this.searchButton.click();
    }

   
    async goToBuyTab() {
        await this.buyTab.click();
    }

   
    async goToRentTab() {
        await this.rentTab.click();
    }


    async goToFindAgentTab() {
        await this.findAgentTab.click();
    }

   
    async verifyLogoIsVisible() {
        await expect(this.logo).toBeVisible();
    }
}

module.exports = { HomePage };


