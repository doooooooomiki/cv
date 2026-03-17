// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts'],
  fonts: {
    families: [
      { name: 'Bebas Neue', provider: 'google', weight: '700, 900' },
      { name: 'Roboto', provider: 'google', weight: '400' },
    ],
  },
})