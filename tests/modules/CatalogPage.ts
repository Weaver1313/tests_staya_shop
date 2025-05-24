import { test, expect, Page } from "@playwright/test";

export class CatalogPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closetModal() {
    const modal = this.page.getByRole("dialog");
    if (await modal.isVisible()) {
      await this.page.getByRole("button", { name: "Закрыть" }).click();
    }
  }

  async openCatalog() {
    await this.page.goto("https://staya.dog/catalog");
  }

  async checkOpenCard() {
    await this.page.getByRole("article").nth(0).click();
    await expect.soft(this.page).toHaveURL(/\/product\/.+/);
  }

  async checkFilter() {
    await this.page.waitForSelector('label:has-text("По категориям")');
    await this.page.locator('label:has-text("По категориям")').click();
    await this.page.getByRole("button", { name: "От старых к новым" }).click();
    await expect
      .soft(this.page)
      .toHaveURL("https://staya.dog/catalog?ordering=otn");

    await this.page.locator('[data-test="test"]').getByRole("button").click();
    await this.page.getByRole("button", { name: "От новых к старым" }).click();
    await expect
      .soft(this.page)
      .toHaveURL("https://staya.dog/catalog?ordering=nto");
  }
}
