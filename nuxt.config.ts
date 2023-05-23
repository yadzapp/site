// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'YADZ — Yet Another DayZ Launcher',
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, height=device-height, user-scalable=no, initial-scale=1'
        }
      ],
      link: [
        {
          rel: 'icon',
          href: '@/favicon.svg'
        }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-FTTMEJ49JT'
        }
      ],
      noscript: [
        {
          children: 'Javascript is required'
        }
      ]
    }
  }, 
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/main.scss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
