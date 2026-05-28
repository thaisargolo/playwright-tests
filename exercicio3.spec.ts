import { test, expect } from '@playwright/test';

test('Alert de produto', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/');

  // clicar produto
  await page.locator('.card-title').first().click();

  // esperar botão
  await page.waitForSelector('text=Add to cart');

  // esperar o alert
  page.once('dialog', async dialog => {
    console.log('Mensagem do alert:', dialog.message());

    expect(dialog.message()).toContain('added');

    await dialog.accept();
  });

  // clicar botão
  await page.click('text=Add to cart');

  // voltar para home (desafio)
  await page.click('#nava');

});