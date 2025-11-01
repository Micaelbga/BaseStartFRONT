import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'https://fallback.example.com',
    },
  },

  devtools: { enabled: true },
  
  css: [
    '~/assets/scss/main.scss', 
    'vuetify/styles', 
    '@mdi/font/css/materialdesignicons.css',
    'notivue/notification.css',
    'notivue/animations.css'
  ],
  
  build: {
    transpile: ['vuetify'],
  },
  
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'notivue/nuxt'
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  notivue: {
    position: 'top-right',
    limit: 4,
    enqueue: true,
    avoidDuplicates: true,
  },

  plugins: [
    '~/plugins/vuetify', 
    '~/plugins/axios',
  ],
})
