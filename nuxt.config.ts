// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxt/ui'],
  ssr: false,
  nitro: {
    storage: {
      // kv: {
      //   driver: 'cloudflare-kv-binding',
      // },
      deno: {
        driver: 'deno-kv',
      }
    },
    devStorage: {
      kv: {
        driver: 'fs',
        base: './data/kv'
      }
    }
  }
});
