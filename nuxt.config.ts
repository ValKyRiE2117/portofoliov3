// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  css: ["./assets/css/main.css"],
  app: {
    head: {
      title: "Aritza Ganendra Kusuma - Portfolio",
      htmlAttrs: {
        lang: "en",
        class: "scroll-smooth",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "google-site-verification",
          content: "lNZZzMwCzMdKS_pMsK781pp2cgbg5gn620BaoKpe3hc",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        },
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    families: [
      {
        name: "Sansation",
        provider: "google",
        weights: [300, 400, 500, 600, 700, 800, 900],
      },
      {
        name: "Plus Jakarta Sans",
        provider: "google",
        weights: [300, 400, 500, 600, 700, 800, 900],
      },
    ],
  },

  modules: [
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/seo",
    "@nuxt/content",
    "nuxt-studio",
  ],

  site: {
    url: "https://aritzagk.vercel.app/",
    name: "Aritza Ganendra Kusuma - Portfolio",
    description:
      "Hi, Welcome to my personal website, showcasing my projects and skills.",
    defaultLocale: "en",
  },

  routeRules: {
    "/": { prerender: true },
  },

  studio: {
    route: "/_studio",
    repository: {
      provider: "github",
      owner: "ValKyRiE2117",
      repo: "portofoliov3",
      branch: "main",
    },
  },
});
