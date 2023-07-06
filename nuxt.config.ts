// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: [
        '@fortawesome/vue-fontawesome',
        '@fortawesome/fontawesome-svg-core',
        //'@fortawesome/pro-solid-svg-icons'
        //'@fortawesome/pro-regular-svg-icons',
        //'@fortawesome/pro-light-svg-icons',
        '@fortawesome/free-brands-svg-icons'
    ]
},
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' },
    {src: '~/plugins/fontAwesome.js',
    ssr: false}
  ],
})
