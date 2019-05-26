import createError = require('http-errors');

import { Request, Response, NextFunction } from 'express';

import Vaga from '../models/vaga';
import VagaDAO from '../dao/vaga';

class VagaController {

  async getVagas(req: Request, res: Response, next: NextFunction) {
    const vagaDAO: VagaDAO = new VagaDAO();

    try {
      res.json(await vagaDAO.listarTodos());      
    } catch (err) {
      next(createError(500, err));
    }
  }

  async getVaga(req: Request, res: Response, next: NextFunction) {
    const vagaDAO: VagaDAO = new VagaDAO();

    try {
      const vaga: Vaga = new Vaga();
      vaga.setId(req.params.id);
      res.json(await vagaDAO.buscarPorId(vaga));      
    } catch (err) {
      next(createError(500, err));
    }
  }

  async newVaga(req: Request, res: Response, next: NextFunction) {
    const vagaDAO: VagaDAO = new VagaDAO();

    const vaga: Vaga = new Vaga();
    vaga.fromJson(req.body);

    try {
      res.json(await vagaDAO.cadastrar(vaga));
    } catch (err) {
      next(createError(500, err));
    }
  }

  async editVaga(req: Request, res: Response, next: NextFunction) {
    const vagaDAO: VagaDAO = new VagaDAO();

    const vaga = new Vaga();
    vaga.fromJson(req.body);

    try {
      res.json(await vagaDAO.editar(vaga));
    } catch (err) {
      next(createError(500, err));
    }
  }
}

export default VagaController;