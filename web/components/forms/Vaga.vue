<template lang="pug">
  div
    .text-center
      h4(v-if='editMode') Editar vaga
      h4(v-else) Nova vaga
    form.form-horizontal
      .form-group.text-center(v-if='editMode')
        b-form-checkbox(v-model='vaga.ativo') Ativo
      .form-group
        label(for='inputNumero') Número
        b-input#inputNumero(v-model='vaga.numero' type='text' autofocus)
      .form-group
        label(for='inputEmail') Localização (metros de distância das lojas)
        money.form-control(v-model='vaga.localizacao' v-bind='location')
      .form-group
        label(for='inputCategoria') Categoria
        b-select#inputCategoria(v-model='vaga.categoria')
          option(v-for='e, i in categorias' :key='i' :value='e.id') {{ e.nome }}
      .form-group
        b-button(v-if='editMode' variant='primary' @click='editVaga') Alterar
        b-button(v-else variant='primary' @click='newVaga') Cadastrar
</template>

<script>
import { Money } from 'v-money';

export default {  
  name: 'VagaForm',
  props: {
    editMode: Boolean
  },
  components: {
    Money
  },
  data() {
    return {      
      vaga: {},
      categorias: [],
      location: {
        decimal: ',',
        thousands: '.',
        sulfix: '',
        precision: 2,
        masked: false
      }
    }
  },
  async created() {
    this.listCategorias();
    if (this.editMode && this.$route.params.id) {
      this.getVaga();
    }
  },
  methods: {
    newVaga() {
      const url = this.$store.state.api.url + 'vagas/novo';

      this.$axios.$post(url, this.vaga)
        .then(function (response) {
          alert('Criado com sucesso.');
        })
        .catch(function (error) {
          alert(error.response.data);
        });
    },
    editVaga() {
      const url = this.$store.state.api.url + "vagas/" + this.$route.params.id;

      this.$axios.$post(url, this.vaga)
        .then(function (response) {
          alert('Alterado com sucesso.')
        })
        .catch(function (error) {
          alert(error.response.data);
        });
    },
    getVaga() {
      const url = this.$store.state.api.url + "vagas/" + this.$route.params.id;
      this.$axios
        .$get(url)
        .then(
          function(response) {
            if (response.length > 0) {
              this.vaga = response[0];
            } else {
              alert('Vaga não encontrado');
              this.$router.push({ path: '/vagas' });
            }            
          }.bind(this)
        )
        .catch(function(error) {
          alert(error.response.data);
          this.$router.push({ path: '/vagas' });
        });
    },
    listCategorias() {
      const url = this.$store.state.api.url + "categorias";
      this.$axios
        .$get(url)
        .then(
          function(response) {
            this.categorias = response;
          }.bind(this)
        )
        .catch(function(error) {
          alert(error.response.data);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
