"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createError = require("http-errors");
const selenium_webdriver_1 = require("selenium-webdriver");
let chrome = require('selenium-webdriver/chrome');
let chromedriver = require('chromedriver');
class CategoriaSelenium {
    /*
      Nome
      Descrição
      Andar
      Valor por hora
    */
    newCategoria(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let driver;
            try {
                driver = yield new selenium_webdriver_1.Builder().forBrowser('chrome').build();
                yield driver.get('http://127.0.0.1:3000/categorias/cadastrar');
                let inputNome = yield driver.findElement(selenium_webdriver_1.By.id('inputNome'));
                let inputDescricao = yield driver.findElement(selenium_webdriver_1.By.id('inputDescricao'));
                let inputAndar = yield driver.findElement(selenium_webdriver_1.By.id('inputAndar'));
                let inputValor = yield driver.findElement(selenium_webdriver_1.By.id('inputValor'));
                let buttonSubmit = yield driver.findElement(selenium_webdriver_1.By.id('buttonSubmit'));
                yield inputNome.sendKeys('Selenium');
                yield inputDescricao.sendKeys('Teste com Selenium');
                yield inputAndar.sendKeys('3');
                yield inputValor.sendKeys('45');
                yield buttonSubmit.click();
                res.redirect('http://127.0.0.1:3000/categorias');
            }
            catch (err) {
                next(createError(500, err));
            }
            finally {
                driver.quit();
            }
        });
    }
}
exports.default = CategoriaSelenium;
//# sourceMappingURL=categoria.js.map