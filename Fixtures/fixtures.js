import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

const test = base.extend({
    // noinspection JSUnusedGlobalSymbols
    mainPage: async ({ page }, use) => {
        const mainPage = new MainPage(page);
       // await mainPage.navigate(); // Открываем сайт перед тестами
        await use(mainPage); // Передаём `mainPage` в тесты

    },

});
export { test };
