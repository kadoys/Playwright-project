const { expect } = require('@playwright/test');

 export class MainPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        
        this.searchInput = page.getByPlaceholder('City, Neighborhood, Address, Postal Code, School District');
        this.searchButton = page.locator('button[type="submit"]');
        
        // Buy, Rent, Find and KW Agent
        this.buyTab = page.locator('text=BUY');
        this.rentTab = page.locator('text=RENT');
        this.kwAgent = page.locator('text= FIND A KW® AGENT')
        this.findAgentTab = page.locator('text=FIND A KW® AGENT');  
        this.searchLink = page.locator('text=Search');
        this.findAgentLink = page.locator('text=Find a KW® Agent');
        this.becomeAgentLink = page.locator('text=Become a KW® Agent');
        this.rentButton = page.locator('label[for="Search-Quick-Filter-Rent"]');
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
        
    }

    async searchBox(query) {
        await this.searchInput();
        
    }

   //click the search button

   async clickSearchButton() {
    await this.searchButton.click(); 
}


async clickRentButton() {
    await this.rentButton.click(); 
}

async clickkwAgentButton() {
    await this.rentButton.click(); 
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

module.exports = { MainPage };


