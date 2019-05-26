import Conexao from '../util/conexaomongo';

import VagaDAO from '../dao/vaga';
import Vaga from '../models/vaga';

beforeAll(async function () {
  const conexao = new Conexao();
  await conexao.abrir('mongodb://localhost/autoparking');
});

it('cadastrar', async function () { 
  const vaga: Vaga = new Vaga();
  vaga.setNumero('A35');
  vaga.setLocalizacao(1);
  vaga.setCategoria('5cb7ab3dfc3c41527541066b');
  
  const vagaDAO: VagaDAO = new VagaDAO();
  const cadastrado: boolean = await vagaDAO.cadastrar(vaga);
  
   expect(cadastrado).toBeTruthy();
});

it('listarTodos', async function () {
  let encontrado: boolean = false;
  
  const vaga: Vaga = new Vaga();
  vaga.setNumero('A35');
  
  const vagaDAO: VagaDAO = new VagaDAO();
  const vagas = await vagaDAO.listarTodos();

  for (let i: number = 0; i < vagas.length; i++) {
    if (vagas[i].getNumero() === vaga.getNumero()) {
      encontrado = true;
      break;
    }
  }

  expect(encontrado).toBeTruthy();
});

it('cadastrar', async function () { 
  const vaga: Vaga = new Vaga();
  vaga.setId('5cbf9c2a06f76d1f14cb92b8');
  vaga.setNumero('A2');
  
  const vagaDAO: VagaDAO = new VagaDAO();
  const cadastrado: boolean = await vagaDAO.editar(vaga);
  
   expect(cadastrado).toBeTruthy();
});

it('buscarPorId', async function () { 
  const vaga: Vaga = new Vaga();
  vaga.setId('5cbf9c2a06f76d1f14cb92b8');
  vaga.setNumero('A2')
  
  const vagaDAO: VagaDAO = new VagaDAO();
  const vagas = await vagaDAO.buscarPorId(vaga);
  
  expect(vaga.getNumero()).toBe(vagas[0].getNumero());
});

