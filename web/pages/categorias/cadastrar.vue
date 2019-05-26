<template lang="pug">
  div.container    
    form-categoria(editMode=false)
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
      categoria: {}
    }
  },
  async created() {
    
  },
  methods: {
  }
}
</script>
