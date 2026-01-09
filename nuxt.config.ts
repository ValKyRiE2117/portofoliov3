// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
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

  modules: ["@nuxt/fonts", "@nuxt/image", "@nuxtjs/google-fonts", "@nuxtjs/supabase"],

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    }
  },

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false
  }
});