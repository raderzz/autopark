export const state = () => ({
  url: 'http://127.0.0.1:3001/',
  estados: null
})

export const mutations = {
  setEstados (state, value) {
    state.estados = value;
  }
}

export const actions = {
  async fetchEstados (context, payload = {}) {
    if (payload.renew || !context.state.estados) {
      const url = context.state.url + 'diversos/estados';
      const estados = await this.$axios.$get(url);
      await context.commit('setEstados', estados);
    }    
    return context.state.estados;
  }
}