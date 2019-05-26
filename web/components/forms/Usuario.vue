<template lang="pug">
  div
    .text-center
      h4(v-if='editMode') Editar usuário
      h4(v-else) Novo usuário
    form.form-horizontal
      .form-group.text-center(v-if='editMode')
        b-form-checkbox(v-model='usuario.ativo') Ativo        
      .form-group
        label(for='inputNome') Nome
        b-input#inputNome(v-model='usuario.nome' type='text' autofocus)
      .form-row(v-if='!editMode')
        .form-group.col-md-6
          label(for='inputEmail') Email
          b-input#inputEmail(v-model='usuario.email' type='email')
        .form-group.col-md-6
          label(for='inputSenha') Senha
          b-input#inputSenha(v-model='usuario.senha' type='password')
      .form-row(v-if='editMode')
        .form-group.col-md-12
          label(for='inputEmail') Email
          b-input#inputEmail(v-model='usuario.email' type='email')
      .form-row
        .form-group.col-md-6
          label(for='inputTelefone') Telefone
          b-input#inputTelefone(v-model='usuario.telefone' type='text' v-mask='"(##) ####-####"')
        .form-group.col-md-6
          label(for='inputCelular') Celular
          b-input#inputCelular(v-model='usuario.celular' type='text' v-mask='"(##) #####-####"')
      .form-row
        .form-group.col-md-10
          label(for='inputEndereco') Endereço
          b-input#inputEndereco(v-model='usuario.endereco' type='text')
        .form-group.col-md-2
          label(for='inputNumero') Número
          b-input#inputNumero(v-model='usuario.numero' type='text')
      .form-row
        .form-group.col-lg-8.col-md-12
          label(for='inputCidade') Cidade
          b-input#inputCidade(v-model='usuario.cidade' type='text')
        .form-group.col-lg-2.col-md-2
          label(for='inputEstado') Estado
          b-select#inputEstado(v-model='usuario.estado')
            option(v-for='e, i in estados' :key='i' :value='e.id') {{ e.sigla }}
        .form-group.col-lg-2.col-md-10
          label(for='inputCEP') CEP
          b-input#inputCEP(v-model='usuario.cep' type='text' v-mask='"#####-###"')
      .form-group
        label(for='inputNivel') Nível de acesso
        b-select#inputNivel(v-model='usuario.nivel')
          option(v-for='n, i in niveis' :key='i' :value='n.value') {{ n.label }}
      .form-group
        b-button(v-if='editMode' variant='primary' @click='editUsuario') Alterar
        b-button(v-else variant='primary' @click='newUsuario') Cadastrar
</template>

<script>

export default {  
  name: 'UsuarioForm',
  props: {
    editMode: Boolean
  },
  data() {
    return {      
      usuario: {},
      estados: [],
      niveis: [
        {
          label: 'Cliente',
          value: 1
        },
        {
          label: 'Funcionário',
          value: 2
        },
        {
          label: 'Administrador',
          value: 3
        }
      ]      
    }
  },
  async created() {
    this.estados = await this.$store.dispatch('api/fetchEstados');
    if (this.editMode && this.$route.params.id) {
      this.getUsuario();
    }
  },
  methods: {
    newUsuario() {
      const url = this.$store.state.api.url + 'usuarios/novo';

      this.$axios.$post(url, this.usuario)
        .then(function (response) {
          alert('Criado com sucesso.');
        })
        .catch(function (error) {
          alert(error.response.data);
        });
    },
    editUsuario() {
      const url = this.$store.state.api.url + "usuarios/" + this.$route.params.id;

      this.$axios.$post(url, this.usuario)
        .then(function (response) {
          alert('Alterado com sucesso.')
        })
        .catch(function (error) {
          alert(error.response.data);
        });
    },
    getUsuario() {
      const url = this.$store.state.api.url + "usuarios/" + this.$route.params.id;
      this.$axios
        .$get(url)
        .then(
          function(response) {
            if (response.length > 0) {
              this.usuario = response[0];
            } else {
              alert('Usuário não encontrado');
              this.$router.push({ path: '/usuarios' });
            }            
          }.bind(this)
        )
        .catch(function(error) {
          alert(error.response.data);
          this.$router.push({ path: '/usuarios' });
        });
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
