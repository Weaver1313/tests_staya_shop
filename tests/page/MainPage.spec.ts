import { test } from "@playwright/test";
import { MainPage } from "../modules/MainPage";

test.describe("Тесты главной страницы", () => {
  test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.closetModal();
    await mainPage.openMainPage();
  });

  test("Проверка header", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.closetModal();
    await mainPage.checkHeaderElement();
  });

  test("Проверка Href header", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.closetModal();
    await mainPage.checkHrefHeader();
  });
});
