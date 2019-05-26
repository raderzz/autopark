<template lang='pug'>
  div
    .text-center
      h4(v-if='editMode') Editar categoria de vaga
      h4(v-else) Nova categoria de vaga
    form.form-horizontal
      .form-group.text-center(v-if='editMode')
        b-form-checkbox(v-model='categoria.ativo') Ativo      
      .form-group
        label(for='inputNome') Nome
        b-input#inputNome(v-model='categoria.nome' type='text' autofocus)
      .form-group
        label(for='inputDescricao') Descrição
        b-textarea#inputDescricao(v-model='categoria.descricao' type='descricao')
      .form-group
        label(for='inputAndar') Andar
        b-input#inputAndar(v-model='categoria.andar' type='text')
      .form-group
        label(for='inputValor') Valor por hora
        money#inputValor.form-control(v-model='categoria.valor' v-bind='money')
      .form-group
        b-button#buttonSubmit(v-if='editMode' variant='primary' @click='editCategoria') Alterar
        b-button#buttonSubmit(v-else variant='primary' @click='newCategoria') Cadastrar
</template>

<script>
import { Money } from 'v-money';  

export default {
  name: 'CategoriaForm',
  props: {
    editMode: Boolean
  },
  components: {
    Money
  },
  data() {
    return {
      categoria: {},
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2,
        masked: false
      }
    }
  },
  async created() {
    if (this.editMode && this.$route.params.id) {
      this.getCategoria();
    }
  },
  methods: {
    newCategoria() {
      const url = this.$store.state.api.url + 'categorias/novo';
      this.$axios.$post(url, this.categoria)
        .then(function (response) {
          alert('Criado com sucesso.');
        })
        .catch(function (error) {
          alert(error.response.data);
        });
    },
    editCategoria() {
      const url = this.$store.state.api.url + 'categorias/' + this.$route.params.id;
      this.$axios.$post(url, this.categoria)
        .then(function (response) {
          alert('Alterado com sucesso.')
        })
        .catch(function (error) {
          alert(error.response.data);
        });
    },
    getCategoria() {
      const url = this.$store.state.api.url + 'categorias/' + this.$route.params.id;
      this.$axios
        .$get(url)
        .then(
          function(response) {
            if (response.length > 0) {
              this.categoria = response[0];
            } else {
              alert('Categoria não encontrado');
              this.$router.push({ path: '/categorias' });
            }            
          }.bind(this)
        )
        .catch(function(error) {
          alert(error.response.data);
          this.$router.push({ path: '/categorias' });
        });
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
