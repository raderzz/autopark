<template lang="pug">
  div.container    
    form-usuario(editMode=false)
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
      usuario: {}
    }
  },
  async created() {
    
  },
  methods: {
  }
}
</script>
