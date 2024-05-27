// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "img/logo.png" }],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/image"],
});
