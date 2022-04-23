export const state = () => ({
  language: [],
  alternateLanguages: [],
  footer: {},
  header: {},
  navigation: {},
  helpCard: {}
})

export const mutations = {
  setLanguage(state, language) {
    state.language = language
  },
  setAlternateLanguages(state, alternateLanguages) {
    state.alternateLanguages = alternateLanguages
  },
  setFooter(state, footer) {
    state.footer = footer
  },
  setHeader(state, header) {
    state.header = header
  },
  setNavigation(state, navigation) {
    state.navigation = navigation
  },
  setHelpCard(state, helpCard) {
    state.helpCard = helpCard
  },
}

export const actions = {
  async load(store, { lang, page = { alternate_languages: [] } }) {
    const footer = await this.$prismic.api.getSingle('footer', { lang });
    const header = await this.$prismic.api.getSingle('header', { lang });
    const navigation = await this.$prismic.api.getSingle('navigation', { lang });
    const helpCard = await this.$prismic.api.getSingle('helpCard', { lang });
    store.commit('setFooter', footer);
    store.commit('setHeader', header);
    store.commit('setNavigation', navigation);
    store.commit('setHelpCard', helpCard);
    store.commit('setLanguage', page.lang);
    store.commit('setAlternateLanguages', page.alternate_languages);
  }
}
