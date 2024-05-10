// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.js',
    injectPosition: "first"
  },
  
  pwa: {
    manifest: {
      name: 'My Awesome App',
      short_name: 'AwesomeApp',
      description: 'An awesome app made with Nuxt',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: '/icon.png',
          sizes: '580x580',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    },
    devOptions: {
      enabled: true
    }
  },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css' }
      ]
    }
  }
})

