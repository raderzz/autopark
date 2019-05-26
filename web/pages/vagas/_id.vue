<template lang="pug">
  div.container
    form-vaga(editMode=true)
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
    newVaga() {
      const url = this.$store.state.api.url + 'vagas/novo';

      this.$axios.$post(url, this.vaga)
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
