// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import { en, pt } from 'vuetify/locale'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // Optional for icons

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    locale: {
      locale: 'pt',
      fallback: 'en',
      messages: { en, pt }
    },
    theme: {
      defaultTheme: 'light', // initial theme
      themes: {
        light: {
          dark: false,
          colors: {
            background: '#F2F2F2',
            primary: '#1976d2',
            black: '#000000',
            white: '#ffffff',

            success: '#4CAF50',
            error: '#FF5252',
            warning: '#FB8C00',
          },
        },
        dark: {
          dark: true,
          colors: {
            background: '#222222',
            primary: '#135da7ff',
            black: '#000000',
            white: '#ffffff',
            
            success: '#4CAF50',
            error: '#FF5252',
            warning: '#FB8C00',
          },
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
