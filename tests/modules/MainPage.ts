import { expect, Page, test } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly elements;

  constructor(page: Page) {
    this.page = page;
    this.elements = [
      {
        locator: (page: Page) =>
          page.getByRole("link", { name: "staya", exact: true }),
        name: "staya",
        path: {
          key: "href",
          value: "/",
        },
      },
      {
        locator: (page: Page) =>
          page.getByRole("link", { name: "Каталог", exact: true }),
        name: "Каталог",
        path: {
          key: "href",
          value: "/catalog",
        },
      },
      {
        locator: (page: Page) => page.getByRole("link", { name: "Коллекции" }),
        name: "Коллекции",
        path: {
          key: "href",
          value: "/collections",
        },
      },
      {
        locator: (page: Page) => page.getByRole("link", { name: "Журнал" }),
        name: "Журнал",
        path: {
          key: "href",
          value: "/blog",
        },
      },
      {
        locator: (page: Page) => page.getByRole("link", { name: "О нас" }),
        name: "О нас",
        path: {
          key: "href",
          value: "/about",
        },
      },
      {
        locator: (page: Page) => page.getByRole("button", { name: "Корзина" }),
        name: "Корзина",
      },
      {
        locator: (page: Page) =>
          page.getByRole("link", { name: "Мой профиль" }),
        name: "Мой профиль",
      },
    ];
  }

  async openMainPage() {
    await this.page.goto("https://staya.dog/");
  }

  async closetModal() {
    const modal = this.page.getByRole("dialog");
    if (await modal.isVisible()) {
      await this.page.getByRole("button", { name: "Закрыть" }).click();
    }
  }

  async checkHeaderElement() {
    for (const { locator, name } of this.elements) {
      test.step(`Проверка отображения ${name}`, async () => {
        await expect.soft(locator(this.page)).toBeVisible();
      });
    }
  }

  async checkHrefHeader() {
    for (const { locator, name, path } of this.elements) {
      if (!path) continue;

      await test.step(`Проверка отображения ${name}`, async () => {
        await expect
          .soft(locator(this.page))
          .toHaveAttribute(path.key, path.value);
      });
    }
  }
}
