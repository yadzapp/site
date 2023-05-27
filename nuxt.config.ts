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
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Simple app for launching DayZ. Coming soon.'
        },
        {
          hid: 'og:type', property: 'og:type', content: 'website'
        },
        {
          hid: 'og:title', property: 'og:title', content: 'YADZ — Yet Another DayZ Launcher'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Simple app for launching DayZ. Coming soon.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://yadz.app/share.png'
        },
        {
          hid: 'og:url', property: 'og:url', content: 'https://yadz.app/'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:title', name: 'twitter:title', content: 'YADZ — Yet Another DayZ Launcher'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Simple app for launching DayZ. Coming soon.'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://yadz.app/share.png'
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.svg'
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
