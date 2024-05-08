// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@formkit/auto-animate", "@nuxt/content", "@vueuse/nuxt"],
  extends: "../snowDog/base/",
});
