import Conexao from '../util/conexaomongo';

import UsuarioDAO from '../dao/usuario';
import Usuario from '../models/usuario';

beforeAll(async function () {
  const conexao = new Conexao();
  await conexao.abrir('mongodb://localhost/autoparking');
});

it('cadastrar', async function () { 
  const usuario: Usuario = new Usuario();
  usuario.setNome('Teste');
  usuario.setEmail('teste123@abc.com');
  usuario.setSenha('123');
  usuario.setCelular('(11) 11111-1111');
  usuario.setEndereco('Rua X');
  usuario.setNumero('1');
  usuario.setEstado('5ca3dd3613481e9011eaaab0');
  usuario.setCidade('Mogi das Cruzes');
  usuario.setCep('11111-111');
  
  const usuarioDAO: UsuarioDAO = new UsuarioDAO();
  const cadastrado: boolean = await usuarioDAO.cadastrar(usuario);
  
   expect(cadastrado).toBeTruthy();
});

it('listarTodos', async function () {
  let encontrado: boolean = false;
  
  const usuario: Usuario = new Usuario();
  usuario.setEmail('teste123@abc.com');
  
  const usuarioDAO: UsuarioDAO = new UsuarioDAO();
  const usuarios = await usuarioDAO.listarTodos();

  for (let i: number = 0; i < usuarios.length; i++) {
    if (usuarios[i].getEmail() === usuario.getEmail()) {
      encontrado = true;
      break;
    }
  }

  expect(encontrado).toBeTruthy();
});

it('editar', async function () { 
  const usuario: Usuario = new Usuario();
  usuario.setId('5cb35d3dd50a172070fd790a');
  usuario.setNome('claudio2');
  
  const usuarioDAO: UsuarioDAO = new UsuarioDAO();
  const cadastrado: boolean = await usuarioDAO.editar(usuario);
  
   expect(cadastrado).toBeTruthy();
});

it('buscarPorId', async function () { 
  const usuario: Usuario = new Usuario();
  usuario.setId('5cb35d3dd50a172070fd790a');
  usuario.setNome('claudio2');
  
  const usuarioDAO: UsuarioDAO = new UsuarioDAO();
  const usuarios = await usuarioDAO.buscarPorId(usuario);
  
  expect(usuario.getNome()).toBe(usuarios[0].getNome());
});

