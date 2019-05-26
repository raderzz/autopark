import createError = require('http-errors');

import { Request, Response, NextFunction } from 'express';

import Categoria from '../models/categoria';
import CategoriaDAO from '../dao/categoria';

class CategoriaController {

  async getCategorias(req: Request, res: Response, next: NextFunction) {
    const categoriaDAO: CategoriaDAO = new CategoriaDAO();

    try {
      res.json(await categoriaDAO.listarTodos());      
    } catch (err) {
      next(createError(500, err));
    }
  }

  async getCategoria(req: Request, res: Response, next: NextFunction) {
    const categoriaDAO: CategoriaDAO = new CategoriaDAO();

    try {
      const categoria: Categoria = new Categoria();
      categoria.setId(req.params.id);
      res.json(await categoriaDAO.buscarPorId(categoria));      
    } catch (err) {
      next(createError(500, err));
    }
  }

  async newCategoria(req: Request, res: Response, next: NextFunction) {
    const categoriaDAO: CategoriaDAO = new CategoriaDAO();

    const categoria: Categoria = new Categoria();
    categoria.fromJson(req.body);

    try {
      res.json(await categoriaDAO.cadastrar(categoria));
    } catch (err) {
      next(createError(500, err));
    }
  }

  async editCategoria(req: Request, res: Response, next: NextFunction) {
    const categoriaDAO: CategoriaDAO = new CategoriaDAO();

    const categoria = new Categoria();
    categoria.fromJson(req.body);

    try {
      res.json(await categoriaDAO.editar(categoria));
    } catch (err) {
      next(createError(500, err));
    }
  }
}

export default CategoriaController;