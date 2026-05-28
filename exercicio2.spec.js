const { test, expect } = require('@playwright/test');

test.only('Exercicio 2 - Laptops', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/');

  // clicar categoria
  await page.click('text=Laptops');

  // esperar produtos
  await page.waitForSelector('.card-title');

  // contar produtos
  const produtos = await page.locator('.card-title').count();

  console.log('Produtos encontrados:', produtos);

  expect(produtos).toBeGreaterThan(0);

  // clicar primeiro produto
  await page.locator('.card-title').first().click();

  // validar tela detalhe
  await expect(page.locator('.name')).toBeVisible();

  // desafio
  await expect(page.locator('text=Add to cart')).toBeVisible();

});