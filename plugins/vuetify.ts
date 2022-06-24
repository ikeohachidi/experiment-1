import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const custom: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#4571C4',
    'primary-darken-1': '#1976D2',
    'primary-lighten-1': '#E3F2FD'
  }
}


export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'custom',
      themes: {
        custom 
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})