import Conexao from '../util/conexaomongo';

import CategoriaDAO from '../dao/categoria';
import Categoria from '../models/categoria';

beforeAll(async function () {
  const conexao = new Conexao();
  await conexao.abrir('mongodb://localhost/autoparking');
});

it('cadastrar', async function () { 
  const categoria: Categoria = new Categoria();
  categoria.setNome('Teste2');
  categoria.setDescricao('Testando');
  categoria.setAndar('Térreo');
  categoria.setValor(10);
  
  const categoriaDAO: CategoriaDAO = new CategoriaDAO();
  const cadastrado: boolean = await categoriaDAO.cadastrar(categoria);
  
   expect(cadastrado).toBeTruthy();
});

it('listarTodos', async function () {
  let encontrado: boolean = false;
  
  const categoria: Categoria = new Categoria();
  categoria.setNome('Teste2')
  
  const categoriaDAO: CategoriaDAO = new CategoriaDAO();
  const categorias = await categoriaDAO.listarTodos();

  for (let i: number = 0; i < categorias.length; i++) {
    if (categorias[i].getNome() === categoria.getNome()) {
      encontrado = true;
      break;
    }
  }

  expect(encontrado).toBeTruthy();
});

it('editar', async function () { 
  const categoria: Categoria = new Categoria();
  categoria.setId('5cc0d11547d10f26147b8f0f');
  categoria.setNome('Teste4');
  
  const categoriaDAO: CategoriaDAO = new CategoriaDAO();
  const cadastrado: boolean = await categoriaDAO.editar(categoria);
  
   expect(cadastrado).toBeTruthy();
});

it('buscarPorId', async function () { 
  const categoria: Categoria = new Categoria();
  categoria.setId('5cc0d11547d10f26147b8f0f');
  categoria.setNome('Teste4');
  
  const categoriaDAO: CategoriaDAO = new CategoriaDAO();
  const categorias = await categoriaDAO.buscarPorId(categoria);
  
  expect(categoria.getNome()).toBe(categorias[0].getNome());
});

