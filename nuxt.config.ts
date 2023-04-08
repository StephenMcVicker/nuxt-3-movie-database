import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  buildModules: [
    '@nuxtjs/style-resources'
  ],
  runtimeConfig: {
    apiKey: '',
    apiBaseUrl: ''
  },
  styleResources: {
    scss: './style-resources.js'
  },
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/styles/main.scss";'
            },
        },
    },
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
        ]
      })
    ]
  }
})
