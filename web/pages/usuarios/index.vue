<template lang="pug">
  div.container
    .text-center
      h4 Usuários
    b-table.usuarios(striped hover :items='usuarios' :fields="fields" @row-clicked='usuarioClicked')
</template>

<script>
export default {
  layout: "main",
  data() {
    return {
      fields: {
        nome: {
          label: "Nome",
          sortable: true
        },
        email: {
          label: "E-mail",
          sortable: true
        },
        celular: {
          label: "Celular"
        }
      },
      usuarios: []
    };
  },
  created() {
    this.listUsuarios();
  },
  methods: {
    listUsuarios() {
      const url = this.$store.state.api.url + "usuarios";
      this.$axios
        .$get(url)
        .then(
          function(response) {
            this.usuarios = response;
          }.bind(this)
        )
        .catch(function(error) {
          alert(error.response.data);
        });
    },
    usuarioClicked(item, index, event) {
      this.$router.push({
        path: '/usuarios/' + item.id
      });
    }
  }
};
</script>

<style lang="scss">
.usuarios {
  tbody {
    tr:hover {
      cursor: pointer;
      background: rgb(204, 221, 249);
    }
  }
}
</style>
