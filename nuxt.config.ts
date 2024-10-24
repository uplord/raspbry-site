// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    buildAssetsDir: "/nuxt/",
    head: {
      title: 'raspbry',
      link: [
        {
          rel: 'icon',
          href: '/favicon.png'
        }
      ],
      htmlAttrs: {
        lang: "en"
      },
    }
  },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/scss/globals.scss'],
  devtools: { enabled: true },
  image: {
    domains: ['msaas.img.freeviewplay.net', 'fdp-sv15-image-v1-0.gcprod1.freetime-platform.net'],
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/image'],
  srcDir: "src/",
  ssr: true,
})