import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://staya.dog/login");
  await page
    .getByRole("textbox", { name: "E-mail" })
    .fill("ismail.shukurov.2002@gmail.com");
  await page.getByRole("textbox", { name: "Пароль" }).fill("13130913Vv");
  await page.getByRole("button", { name: "Войти" }).click();
  await page.getByRole("link", { name: "Каталог" }).click();
  await page.getByRole("link", { name: "Коллекции" }).click();
});
