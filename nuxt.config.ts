// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [`@twicpics/components/nuxt3`],
  twicpics: {
    domain: `https://demo.twic.pics`,
    maxDPR:2
  },
});
