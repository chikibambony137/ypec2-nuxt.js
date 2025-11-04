// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Ярославский промышленно-экономический колледж", // default fallback title
      htmlAttrs: {
        lang: "ru",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "google-site-verification",
          content: "KqpNGuL7lFpZpA3YIngmW-DWzOBMRVWVtm8M1qgIVfs",
        },
      ],
    },
  },
  modules: ["@pinia/nuxt", "@nuxtjs/sitemap", "@nuxtjs/robots"],

  site: {
    url: "https://ypec.netlify.app",
    name: "ЯПЭК",
  },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
});