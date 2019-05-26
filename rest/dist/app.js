"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const conexaomongo_1 = require("./util/conexaomongo");
const diversos_1 = require("./routers/diversos");
const usuarios_1 = require("./routers/usuarios");
const categorias_1 = require("./routers/categorias");
const vagas_1 = require("./routers/vagas");
const test_1 = require("./routers/test");
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
const conexao = new conexaomongo_1.default();
conexao.abrir('mongodb://localhost/autoparking');
app.use('/diversos', diversos_1.default);
app.use('/usuarios', usuarios_1.default);
app.use('/categorias', categorias_1.default);
app.use('/vagas', vagas_1.default);
app.use('/test', test_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404, 'Página não encontrada. Por favor revise sua requisição.'));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500).json(err.message);
});
module.exports = app;
//# sourceMappingURL=app.js.map