// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image'],

  // devtools: {
  //   enabled: true
  // },
 nitro: {
    prerender: {
      routes: ['/contact', '/success']
    }
  },
  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
    
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})