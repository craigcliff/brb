const { resolve } = require('path');

module.exports = {

    modules: [
        // provide path to the file with resources

        ['nuxt-sass-resources-loader', [
            
            resolve(__dirname, 'assets/css/abstracts/_variables.scss'),
            resolve(__dirname, 'assets/css/abstracts/_mixins.scss'),
            resolve(__dirname, 'assets/css/base/_typography.scss'),
            resolve(__dirname, 'assets/css/base/_utilities.scss'),
            resolve(__dirname, 'assets/css/base/_base.scss'),
            resolve(__dirname, 'assets/css/components/_feature-box.scss'),
            resolve(__dirname, 'assets/css/layout/_layout.scss')
        ]]


    ],

    /*
     ** Headers of the page
     */
    head: {
        title: 'brb',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Beers Ribs and Burgers fictional restaurant' }
        ],

        css: [
            '~/assets/css/fonts.min.css'
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,900' }
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */

    }
}