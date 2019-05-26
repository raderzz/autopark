import createError = require('http-errors');

import { Request, Response, NextFunction } from 'express';

import EstadoDAO from '../dao/estado';

class DiversoController {

  async getEstados(req: Request, res: Response, next: NextFunction) {
    const estadoDAO: EstadoDAO = new EstadoDAO();

    try {
      res.json(await estadoDAO.listarTodos());
    } catch (err) {
      next(createError(500, err.stack));
    }
  }
}

export default DiversoController;