<template lang="pug">
  div.container
    form-categoria(editMode=true)
</template>

<script>

import CategoriaForm from '~/components/forms/Categoria';

export default {
  layout: 'main',
  components: {
    'form-categoria' : CategoriaForm
  },
  data() {
    return {      
      categoria: {},
      estados: []
    }
  },
  async created() {
    
  },
  methods: {
    newCategoria() {
      const url = this.$store.state.api.url + 'categorias/novo';

      this.$axios.$post(url, this.categoria)
        .then(function (response) {
          alert(response);
        })
        .catch(function (error) {
          alert(error.response.data);
        });
      
    }
  }
}
</script>
