const { expect } = require('@playwright/test');
 /**
     * @param {import('@playwright/test').Page} page
     */

const { test, expect } = require('@playwright/test');

test('Test for dropdown and properties', async ({ page }) => {
  // Opem the page
  await page.goto('https://kw.com/search/sale');
  //Locator "For Sale" dropdown list
  const dropdown = page.locator('button:has-text("For Sale")');
  await dropdown.click();
// Select for Rent option
  const forRentOption = page.locator('li:has-text("For Rent")');
  await forRentOption.click();
  await expect(dropdownButton).toHaveText("For Rent");
  // Check of updating "For Sale" dropdown
  const propertyList = page.locator('div[data-testid="property-list"]');
  await expect(propertyList).toBeVisible();



  const priceDropdownButton = page.locator('button:has-text("Price")');
  await priceDropdownButton.click();

  // Verify that dropdown is displayed and visable
  const priceDropdown = page.locator('div[data-testid="price-range-dropdown"]');
  await expect(priceDropdown).toBeVisible();
  // Set min value
  const minPriceInput = page.locator('input[placeholder="No Min"]');
  await minPriceInput.fill('500000');
  // Set max value
  const maxPriceInput = page.locator('input[placeholder="No Max"]');
  await maxPriceInput.fill('1000000');
  // Сlick "Apply"
  const applyButton = page.locator('button:has-text("Apply")');
  await applyButton.click();
  // Check the filter has changed
  const filterResults = page.locator('div[data-testid="property-list"]');
  await expect(filterResults).toContainText('500,000'); // Проверить наличие объектов в заданном диапазоне
  // Reset filter
  const resetButton = page.locator('button:has-text("Reset")');
  await resetButton.click();
  
  await expect(minPriceInput).toHaveValue('');
  await expect(maxPriceInput).toHaveValue('');
});

test('dropdownButton', async ({ page }) => {
const dropdownButton = page.locator('button:has-text("Beds & Baths")');
await dropdownButton.click();

// Dropdown is open
const dropdownMenu = page.locator('div[data-testid="beds-baths-menu"]');
await expect(dropdownMenu).toBeVisible();

// Beds can be more than 2
const twoPlusBedrooms = page.locator('button:has-text("2+")');
await twoPlusBedrooms.click();

// Bethrooms can be more than 3
const threePlusBathrooms = page.locator('button:has-text("3+")');
await threePlusBathrooms.click();

// Click "Apply"
const applyButton = page.locator('button:has-text("Apply")');
await applyButton.click();



  //Property dropdown is open
  const dropdownButton = page.locator('button:has-text("Property Type")');
  await dropdownButton.click();

  // Verify that dropdown is open
  const dropdownMenu = page.locator('div[data-testid="property-type-menu"]');
  await expect(dropdownMenu).toBeVisible();

  // Houses option is selected
  const housesOption = page.locator('button:has-text("Houses")');
  await housesOption.click();

  // Verify that Houses option is selected
  await expect(housesOption).toHaveClass(/selected/); // Проверка, что кнопка стала активной

  // Click Apply button
  const applyButton = page.locator('button:has-text("Apply")');
  await applyButton.click();

  // Verify that filter has updated
  const results = page.locator('div[data-testid="property-list"]');
  await expect(results).toBeVisible();

  // Reset filter
  const resetButton = page.locator('button:has-text("Reset")');
  await resetButton.click();

  // Check that filter has reset
  await expect(housesOption).not.toHaveClass(/selected/); 

 
    //Filter dropdown list
    const filtersButton = page.locator('button:has-text("Filters")');
    await filtersButton.click();
  
    // Dropdown list o
    const filtersMenu = page.locator('div[data-testid="filters-menu"]');
    await expect(filtersMenu).toBeVisible();
  
    // Установить минимальную и максимальную цену
    const minPrice = page.locator('input[placeholder="No Min"]');
    const maxPrice = page.locator('input[placeholder="No Max"]');
    await minPrice.fill('500000');
    await maxPrice.fill('1000000');
  
    // Установить количество спален (например, 2+)
    const twoPlusBedrooms = page.locator('button:has-text("2+")');
    await twoPlusBedrooms.click();
  
    // Установить тип недвижимости "Houses"
    const housesOption = page.locator('button:has-text("Houses")');
    await housesOption.click();
  
    // Нажать "Apply"
    const applyButton = page.locator('button:has-text("Apply")');
    await applyButton.click();
  
    // Проверить, что фильтры применились
    const results = page.locator('div[data-testid="property-list"]');
    await expect(results).toBeVisible();
  
    // Сбросить все фильтры
    const resetFiltersButton = page.locator('button:has-text("Reset All Filters")');
    await resetFiltersButton.click();
  
    // Проверить, что фильтры сброшены
    await expect(minPrice).toHaveValue('');
    await expect(maxPrice).toHaveValue('');


// Filter has changed
const results = page.locator('div[data-testid="property-list"]');
await expect(results).toBeVisible();

  // Verify the first property
  const firstProperty = page.locator('div.property-item').first();
  await expect(firstProperty).toBeVisible();
  // Verify the first property price
  const firstPropertyPrice = firstProperty.locator('span.price');
  await expect(firstPropertyPrice).toHaveText(/\$\d+(,\d+)*\.?\d*/); // price data
// Map locator
  const mapContainer = page.locator('div.map-container');
  await expect(mapContainer).toBeVisible();

});






;
        
        
        







