<template lang='pug'>
  div.container
    .text-center
      h4 Vaga
    b-table.vagas(striped hover :items='vagas' :fields='fields' @row-clicked='vagaClicked')
</template>

<script>
export default {
  layout: 'main',
  data() {
    return {
      fields: {
        numero: {
          label: 'Número',
          sortable: true
        },
        localizacao: {
          label: 'Localização',
          sortable: true
        }
      },
      vagas: []
    };
  },
  created() {
    this.listVagas();
  },
  methods: {
    listVagas() {
      const url = this.$store.state.api.url + 'vagas';
      this.$axios
        .$get(url)
        .then(
          function(response) {
            this.vagas = response;
          }.bind(this)
        )
        .catch(function(error) {
          alert(error)
          alert(error.response.data);
        });
    },
    vagaClicked(item, index, event) {
      this.$router.push({
        path: '/vagas/' + item.id
      });
    }
  }
};
</script>

<style lang='scss'>
.vagas {
  tbody {
    tr:hover {
      cursor: pointer;
      background: rgb(204, 221, 249);
    }
  }
}
</style>
