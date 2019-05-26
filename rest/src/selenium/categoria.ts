import createError = require('http-errors');

import { Request, Response, NextFunction } from 'express';

import { Builder, By, Key, until, WebElement, WebDriver } from 'selenium-webdriver';

let chrome = require('selenium-webdriver/chrome');
let chromedriver = require('chromedriver');

class CategoriaSelenium {

  /*
    Nome
    Descrição
    Andar
    Valor por hora
  */

  async newCategoria(req: Request, res: Response, next: NextFunction) {
    let driver: WebDriver;
    try {
      driver = await new Builder().forBrowser('chrome').build();

      await driver.get('http://127.0.0.1:3000/categorias/cadastrar');

      let inputNome: WebElement = await driver.findElement(By.id('inputNome'));
      let inputDescricao: WebElement = await driver.findElement(By.id('inputDescricao'));
      let inputAndar: WebElement = await driver.findElement(By.id('inputAndar'));
      let inputValor: WebElement = await driver.findElement(By.id('inputValor'));
      let buttonSubmit: WebElement = await driver.findElement(By.id('buttonSubmit'));

      await inputNome.sendKeys('Selenium');
      await inputDescricao.sendKeys('Teste com Selenium');
      await inputAndar.sendKeys('3');
      await inputValor.sendKeys('45');

      await buttonSubmit.click();
      
      res.redirect('http://127.0.0.1:3000/categorias');
    } catch (err) {
      next(createError(500, err));
    } finally {
      driver.quit();
    }
  }

}

export default CategoriaSelenium;