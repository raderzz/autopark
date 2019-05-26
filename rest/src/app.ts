import express = require('express');
import createError = require('http-errors');
import path = require('path');
import cookieParser = require('cookie-parser');
import logger = require('morgan');
import cors = require('cors');

import { Application, Request, Response, NextFunction } from 'express';
import { HttpError } from 'http-errors';

import Conexao from './util/conexaomongo';

import diversosRouter from './routers/diversos';
import usuariosRouter from './routers/usuarios';
import categoriasRouter from './routers/categorias';
import vagasRouter from './routers/vagas';
import testRouter from './routers/test';

const app: Application = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

const conexao = new Conexao();
conexao.abrir('mongodb://localhost/autoparking');

app.use('/diversos', diversosRouter);
app.use('/usuarios', usuariosRouter);
app.use('/categorias', categoriasRouter);
app.use('/vagas', vagasRouter);
app.use('/test', testRouter);

// catch 404 and forward to error handler
app.use(function(req: Request, res: Response, next: NextFunction) {
  next(createError(404, 'Página não encontrada. Por favor revise sua requisição.'));
});

// error handler
app.use(function(err: HttpError, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).json(err.message);
});

module.exports = app;
