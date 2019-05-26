<template lang="pug">
  div.container    
    form-vaga(editMode=false)
</template>

<script>

import VagaForm from '~/components/forms/Vaga';

export default {
  layout: 'main',
  components: {
    'form-vaga' : VagaForm
  },
  data() {
    return {      
      vaga: {},
      estados: []
    }
  },
  async created() {
    
  },
  methods: {
  }
}
</script>
