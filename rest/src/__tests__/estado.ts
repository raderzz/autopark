import EstadoDAO from '../dao/estado';
import Estado from '../models/estado';

jest.mock('../dao/estado');

it('listarTodos', async function () {
  let encontrado: boolean = false;
  
  const estado: Estado = new Estado();
  estado.setSigla('Acre');
  
  const estadoDAO: EstadoDAO = new EstadoDAO();
  const estados = await estadoDAO.listarTodos();

  for (let i: number = 0; i < estados.length; i++) {
    if (estados[i].getSigla() === estado.getSigla()) {
      encontrado = true;
      break;
    }
  }

  expect(encontrado).toBeTruthy();
});

