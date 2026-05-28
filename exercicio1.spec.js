const { test, expect } = require('@playwright/test');

test.only('Exercicio 1 - Buscar livros Travel', async ({ page }) => {

  // Abrir site
  await page.goto('https://books.toscrape.com/');

  // Clicar em Travel
  await page.click('text=Travel');

  // Validar título
  await expect(page.locator('h1')).toHaveText('Travel');

  // Contar livros
  const livros = await page.locator('.product_pod').count();

  console.log('Quantidade de livros:', livros);

  // Validar pelo menos 1
  expect(livros).toBeGreaterThan(0);

  // Screenshot
  await page.screenshot({ path: 'exercicio1.png' });
});