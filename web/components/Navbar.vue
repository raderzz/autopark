<template lang="pug">
  div
    b-navbar(type='dark', variant='success')
      b-navbar-brand(href="/") autoparking
      b-navbar-nav
        b-navbar-nav
        b-nav-item(href='/') Home          
        b-nav-item-dropdown(html='<i class="fa fa-user"></i> Usuários' no-caret left)
          b-dropdown-item(href='/usuarios/cadastrar')
            i.fa.fa-plus
            span  Cadastrar
          b-dropdown-item(href='/usuarios')
            i.fa.fa-list
            span  Listar
        b-nav-item-dropdown(html='<i class="far fa-object-ungroup"></i> Categorias' no-caret left)
          b-dropdown-item(href='/categorias/cadastrar')
            i.fa.fa-plus
            span  Cadastrar
          b-dropdown-item(href='/categorias')
            i.fa.fa-list
            span  Listar
        b-nav-item-dropdown(html='<i class="fas fa-vector-square"></i> Vagas' no-caret left)
          b-dropdown-item(href='/vagas/cadastrar')
            i.fa.fa-plus
            span  Cadastrar
          b-dropdown-item(href='/vagas')
            i.fa.fa-list
            span  Listar        
      .collapse.navbar-collapse.justify-content-end
        b-navbar-nav
          b-nav-item(href='/teste') 
            i.fa.fa-cog
            span  Conta
          b-nav-item(href='#')  
            i.fa.fa-sign-out-alt
            span  Sair
</template>

<script>
  import Logo from '~/components/Logo.vue';

  export default {
    name: 'Navbar',
    components: {
      Logo
    }
  };
</script>

<style>
</style>

