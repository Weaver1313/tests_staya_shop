import { test as setup, expect } from "@playwright/test";
import path from "path";

const authFile = path.join(__dirname, "../playwright/.auth/user.json");

setup("authenticate", async ({ page }) => {
  await page.goto("https://staya.dog/login");
  await page
    .getByRole("textbox", { name: "E-mail" })
    .fill("ismail.shukurov.2002@gmail.com");
  await page.getByRole("textbox", { name: "Пароль" }).fill("13130913Vv");
  await page.getByRole("button", { name: "Войти" }).click();
  await page.getByRole("link", { name: "Каталог" }).click();
  await page.getByRole("link", { name: "Коллекции" }).click();

  await page.context().storageState({ path: authFile });
});
