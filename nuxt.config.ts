// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Ярославский промышленно-экономический колледж', // default fallback title
      htmlAttrs: {
        lang: 'ru',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      ],
    },
  },
  modules: ['@pinia/nuxt'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
})