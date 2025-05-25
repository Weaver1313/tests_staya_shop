import { test } from "@playwright/test";
import { CatalogPage } from "../modules/CatalogPage";

test.describe("Тесты раздела каталог", () => {
  test.beforeEach(async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openCatalog();
  });

  test("Открытие карточки товара", async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.checkOpenCard();
  });

  //Тяжолый случай
  test.fixme("Проверка фильтров каталога", async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.closetModal();
    await catalogPage.checkFilter();
  });
});
