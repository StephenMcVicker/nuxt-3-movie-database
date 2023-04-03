// https://nuxt.com/docs/api/configuration/nuxt-config
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
  }
})
