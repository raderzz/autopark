<template lang='pug'>
  div.container
    .text-center
      h4 Categoria de vagas
    b-table.categorias(striped hover :items='categorias' :fields='fields' @row-clicked='categoriaClicked')
</template>

<script>
export default {
  layout: 'main',
  data() {
    return {
      fields: {
        nome: {
          label: 'Nome',
          sortable: true
        },
        descricao: {
          label: 'Descrição'
        },
        andar: {
          label: 'Andar',
          sortable: true
        },
        valor: {
          label: 'Valor'
        }
      },
      categorias: []
    };
  },
  created() {
    this.listCategorias();
  },
  methods: {
    listCategorias() {
      const url = this.$store.state.api.url + 'categorias';
      this.$axios
        .$get(url)
        .then(
          function(response) {
            this.categorias = response;
            this.categorias.forEach(categoria => {
              categoria.valor = categoria.valor
                .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            });
          }.bind(this)
        )
        .catch(function(error) {
          alert(error)
          alert(error.response.data);
        });
    },
    categoriaClicked(item, index, event) {
      this.$router.push({
        path: '/categorias/' + item.id
      });
    }
  }
};
</script>

<style lang='scss'>
.categorias {
  tbody {
    tr:hover {
      cursor: pointer;
      background: rgb(204, 221, 249);
    }
  }
}
</style>
