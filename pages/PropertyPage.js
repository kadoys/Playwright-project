const { expect } = require('@playwright/test');
 /**
     * @param {import('@playwright/test').Page} page
     */

 class PropertyPage 
  {
    
    constructor(ForSaleDropdownlist) {
    const dropdown = page.locator('button:has-text("For Sale")');   //For Sale dropdown 
    const forRentOption = page.locator('li:has-text("For Rent")');  // For Rent dropdown list
    const propertyList = page.locator('div[data-testid="property-list"]'); //Property list locator
    const dropdownOptions = page.locator('ul.dropdown-options');// Check that options are visable
    }
  /**
   * Open dropdown list
   */
  async openDropdown() {
    await this.page.click(this.forSaleDropdown);
  }

  /**
   * Check specific type (For Sale, For Rent, Sold)
   * @param {string} option - "forSale", "forRent" или "sold"
   */
  async selectOption(option) {
    const options = {
      forSale: this.forSaleOption,
      forRent: this.forRentOption,
      sold: this.soldOption,
    };
    await this.page.click(options[option]);
  }
}



 constructor(PriceDropdownList) {
        // Dropdown trigger
        this.priceDropdown = 'button:has-text("Price")';
        // Price Range inputs
        this.minPriceInput = 'input[placeholder="No Min"]';
        this.maxPriceInput = 'input[placeholder="No Max"]';
    
        // Slider handles 
        this.minPriceSlider = 'input[type="range"]:nth-of-type(1)';
        this.maxPriceSlider = 'input[type="range"]:nth-of-type(2)';
    
        // Buttons
        this.resetButton = 'button:has-text("Reset")';
        this.applyButton = 'button:has-text("Apply")';
      }
 
      /**
       * Open the Price dropdown list
       */
      async openDropdown() {
        await this.page.click(this.priceDropdown);
      }
    
      /**
       * Set min price
       * @param {string} value - min price value
       */
      async setMinPrice(value) {
        await this.page.fill(this.minPriceInput, value);
      }
    
      /**
       * Set max price
       * @param {string} value - max value
       */
      async setMaxPrice(value) {
        await this.page.fill(this.maxPriceInput, value);
      }
    
      /**
       * Reset filters
       */
      async resetFilters() {
        await this.page.click(this.resetButton);
      }
    
      /**
       * Apply filters
       */
      async applyFilters() {
        await this.page.click(this.applyButton);
      }

 constructor(BedsAndBaths) {
    this.bedsAndBathsDropdown = 'button:has-text("Beds & Baths")';

    // Bedrooms section
    this.bedroomsSection = 'div:has-text("BEDROOMS")';
    this.bedroomsAnyButton = 'button:has-text("Any"):below(:has-text("BEDROOMS"))';
    this.bedrooms1PlusButton = 'button:has-text("1+"):below(:has-text("BEDROOMS"))';
    this.bedrooms2PlusButton = 'button:has-text("2+"):below(:has-text("BEDROOMS"))';
    this.bedrooms3PlusButton = 'button:has-text("3+"):below(:has-text("BEDROOMS"))';
    this.bedrooms4PlusButton = 'button:has-text("4+"):below(:has-text("BEDROOMS"))';
    this.bedrooms5PlusButton = 'button:has-text("5+"):below(:has-text("BEDROOMS"))';
    this.bedroomsExactMatchCheckbox = 'input[type="checkbox"]:below(:has-text("Exact match")):above(:has-text("BATHROOMS"))';
    this.bedroomsResetButton = 'button:has-text("Reset"):above(:has-text("BATHROOMS"))';

    // Bathrooms section
    this.bathroomsSection = 'div:has-text("BATHROOMS")';
    this.bathroomsAnyButton = 'button:has-text("Any"):below(:has-text("BATHROOMS"))';
    this.bathrooms1PlusButton = 'button:has-text("1+"):below(:has-text("BATHROOMS"))';
    this.bathrooms2PlusButton = 'button:has-text("2+"):below(:has-text("BATHROOMS"))';
    this.bathrooms3PlusButton = 'button:has-text("3+"):below(:has-text("BATHROOMS"))';
    this.bathrooms4PlusButton = 'button:has-text("4+"):below(:has-text("BATHROOMS"))';
    this.bathrooms5PlusButton = 'button:has-text("5+"):below(:has-text("BATHROOMS"))';
    this.bathroomsExactMatchCheckbox = 'input[type="checkbox"]:below(:has-text("Exact match")):below(:has-text("BATHROOMS"))';
    this.bathroomsResetButton = 'button:has-text("Reset"):below(:has-text("BATHROOMS"))';

    // Apply button
    this.applyButton = 'button:has-text("Apply")';
  }

  // Методы для работы с "Beds & Baths"

  async openDropdown() {
    await this.page.click(this.bedsAndBathsDropdown);
  }

  async selectBedrooms(option) {
    const bedroomsOptions = {
      any: this.bedroomsAnyButton,
      '1+': this.bedrooms1PlusButton,
      '2+': this.bedrooms2PlusButton,
      '3+': this.bedrooms3PlusButton,
      '4+': this.bedrooms4PlusButton,
      '5+': this.bedrooms5PlusButton,
    };
    await this.page.click(bedroomsOptions[option]);
  }

  async selectBathrooms(option) {
    const bathroomsOptions = {
      any: this.bathroomsAnyButton,
      '1+': this.bathrooms1PlusButton,
      '2+': this.bathrooms2PlusButton,
      '3+': this.bathrooms3PlusButton,
      '4+': this.bathrooms4PlusButton,
      '5+': this.bathrooms5PlusButton,
    };
    await this.page.click(bathroomsOptions[option]);
  }

  async toggleExactMatch(type) {
    if (type === 'bedrooms') {
      await this.page.click(this.bedroomsExactMatchCheckbox);
    } else if (type === 'bathrooms') {
      await this.page.click(this.bathroomsExactMatchCheckbox);
    }
  }

  async reset(type) {
    if (type === 'bedrooms') {
      await this.page.click(this.bedroomsResetButton);
    } else if (type === 'bathrooms') {
      await this.page.click(this.bathroomsResetButton);
    }
  }

  async applyFilters() {
    await this.page.click(this.applyButton);
  }
  
  constructor(PriceDropdownList) {

        this.page = page;
    
        // Dropdown trigger
        this.propertyTypeDropdown = 'button:has-text("Property Type")';
    
        // Property type options
        this.housesOption = 'button:has-text("Houses")';
        this.apartmentsOption = 'button:has-text("Apartments")';
        this.townhomesOption = 'button:has-text("Townhomes")';
        this.condosOption = 'button:has-text("Condos")';
        this.coOpsOption = 'button:has-text("Co-ops")';
        this.lotsLandOption = 'button:has-text("Lots/Land")';
        this.manufacturedOption = 'button:has-text("Manufactured")';
        this.multiFamilyOption = 'button:has-text("Multi-family")';
        this.otherOption = 'button:has-text("Other")';
    
        // Buttons
        this.resetButton = 'button:has-text("Reset")';
        this.applyButton = 'button:has-text("Apply")';
      
  
      /**
       * Open "Property Type" dropdown list
       */
      async openDropdown() {
        await this.page.click(this.propertyTypeDropdown);
      }
    
      /**
       * Select type
       * @param {string} type - Type (houses, apartments, townhomes, condos, coOps, lotsLand, manufactured, multiFamily, other)
       */
      async selectPropertyType(type) {
        const options = {
          houses: this.housesOption,
          apartments: this.apartmentsOption,
          townhomes: this.townhomesOption,
          condos: this.condosOption,
          coOps: this.coOpsOption,
          lotsLand: this.lotsLandOption,
          manufactured: this.manufacturedOption,
          multiFamily: this.multiFamilyOption,
          other: this.otherOption,
        };
        await this.page.click(options[type]);
      }
    
      /**
       * Reset filters
       */
      async resetFilters() {
        await this.page.click(this.resetButton);
      }
    
      /**
       * Apply filter
       */
      async applyFilters() {
        await this.page.click(this.applyButton);
      }

      this.page = page;

      // Dropdown trigger
      this.filtersDropdown = 'button:has-text("Filters")';
    }
      
    constructor(PriceDropdownList) {
      // Features
      this.featuresSection = 'div:has-text("FEATURES")';
      this.pondOption = 'button:has-text("Pond")';
      this.poolOption = 'button:has-text("Pool")';
      this.hotTubOption = 'button:has-text("Hot tub")';
      this.deckOption = 'button:has-text("Deck")';
      this.porchOption = 'button:has-text("Porch")';
      this.gateOption = 'button:has-text("Gate")';
      this.garageOption = 'button:has-text("Garage")';
      this.parkingOption = 'button:has-text("Parking")';
      this.gardenOption = 'button:has-text("Garden")';
      this.fireplaceOption = 'button:has-text("Fireplace")';
  
      // Add Keywords
      this.addKeywordsInput = 'input[placeholder="+ Add your own"]';
  
      // Listing Status
      this.activeStatus = 'button:has-text("Active")';
      this.pendingStatus = 'button:has-text("Pending")';
      this.comingSoonStatus = 'button:has-text("Coming Soon")';
  
      // Listing Types
      this.newConstructionOption = 'button:has-text("New Construction")';
      this.foreclosureOption = 'button:has-text("Foreclosure")';
      this.shortSaleOption = 'button:has-text("Short Sale")';
  
      // Listing Details
      this.openHouseToggle = 'input[type="checkbox"]:below(:has-text("Open House"))';
      this.priceReducedToggle = 'input[type="checkbox"]:below(:has-text("Price Reduced"))';
  
      // Buttons
      this.resetFiltersButton = 'button:has-text("Reset All Filters")';
      this.showResultsButton = 'button:has-text("Show")';
    }
  
    
  
    /**
     * Open filter
     */
    async openFiltersDropdown() {
      await this.page.click(this.filtersDropdown);
    }
  
    /**
     * Select "Features" option
     * @param {string} feature - Option name(, "Pond", "Pool", "Garage")
     */
    async selectFeature(feature) {
      const features = {
        pond: this.pondOption,
        pool: this.poolOption,
        hotTub: this.hotTubOption,
        deck: this.deckOption,
        porch: this.porchOption,
        gate: this.gateOption,
        garage: this.garageOption,
        parking: this.parkingOption,
        garden: this.gardenOption,
        fireplace: this.fireplaceOption,
      };
      await this.page.click(features[feature]);
    }
  
    /**
     * 
     * @param {string} keywords - key words
     */
    async addKeywords(keywords) {
      await this.page.fill(this.addKeywordsInput, keywords);
    }
  
    /**
     * Set
     * @param {string} status - "active", "pending", "comingSoon"
     */
    async selectListingStatus(status) {
      const statuses = {
        active: this.activeStatus,
        pending: this.pendingStatus,
        comingSoon: this.comingSoonStatus,
      };
      await this.page.click(statuses[status]);
    }
  
    /**
     * Listing
     * @param {string} type - "newConstruction", "foreclosure", "shortSale"
     */
    async selectListingType(type) {
      const types = {
        newConstruction: this.newConstructionOption,
        foreclosure: this.foreclosureOption,
        shortSale: this.shortSaleOption,
      };
      await this.page.click(types[type]);
    }
  
    /**
     * On/OFF listing
     * @param {string} detail - "openHouse" или "priceReduced"
     * @param {boolean} value 
     */
    async toggleListingDetail(detail, value) {
      const toggles = {
        openHouse: this.openHouseToggle,
        priceReduced: this.priceReducedToggle,
      };
      const toggle = this.page.locator(toggles[detail]);
      if (value) {
        await toggle.check();
      } else {
        await toggle.uncheck();
      }
    }
  
    /**
     * Reset filters
     */
    async resetFilters() {
      await this.page.click(this.resetFiltersButton);
    }
  
    /**
     * Apply result
     */
    async showResults() {
      await this.page.click(this.showResultsButton);
    }
  


        
        






    
 