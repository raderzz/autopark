import createError = require('http-errors');

import { Request, Response, NextFunction } from 'express';

import Usuario from '../models/usuario';
import UsuarioDAO from '../dao/usuario';

class UsuarioController {

  async getUsuarios(req: Request, res: Response, next: NextFunction) {
    const usuarioDAO: UsuarioDAO = new UsuarioDAO();

    try {
      res.json(await usuarioDAO.listarTodos());      
    } catch (err) {
      next(createError(500, err));
    }
  }

  async getUsuario(req: Request, res: Response, next: NextFunction) {
    const usuarioDAO: UsuarioDAO = new UsuarioDAO();

    const usuario: Usuario = new Usuario();
    usuario.setId(req.params.id);

    try {      
      res.json(await usuarioDAO.buscarPorId(usuario));      
    } catch (err) {
      next(createError(500, err));
    }
  }

  async newUsuario(req: Request, res: Response, next: NextFunction) {
    const usuarioDAO: UsuarioDAO = new UsuarioDAO();

    const usuario: Usuario = new Usuario();
    usuario.fromJson(req.body);

    try {
      res.json(await usuarioDAO.cadastrar(usuario));
    } catch (err) {
      next(createError(500, err));
    }
  }

  async editUsuario(req: Request, res: Response, next: NextFunction) {
    const usuarioDAO: UsuarioDAO = new UsuarioDAO();

    const usuario: Usuario = new Usuario();
    usuario.fromJson(req.body);

    try {
      res.json(await usuarioDAO.editar(usuario));
    } catch (err) {
      next(createError(500, err));
    }
  }
}

export default UsuarioController;