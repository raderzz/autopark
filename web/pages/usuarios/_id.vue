<template lang="pug">
  div.container
    form-usuario(editMode=true)
</template>

<script>

import UsuarioForm from '~/components/forms/Usuario';

export default {
  layout: 'main',
  components: {
    'form-usuario' : UsuarioForm
  },
  data() {
    return {      
      usuario: {},
      estados: []
    }
  },
  async created() {
    
  },
  methods: {
    newUsuario() {
      const url = this.$store.state.api.url + 'usuarios/novo';

      this.$axios.$post(url, this.usuario)
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
