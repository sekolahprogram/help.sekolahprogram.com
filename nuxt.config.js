export default {

    target: 'static',

    head: {
        title: process.env.APP_NAME,
        titleTemplate: '%s - Pusat Bantuan Dari Sekolah Program'
    },

    env: {
        appName: process.env.APP_NAME
    },

    modules: [
        '@nuxt/components',
        '@nuxt/content'
    ]

}