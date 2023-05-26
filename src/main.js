import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { lang } from './i18n'
// import { defaultLocale } from './i18n'
import {createI18n, useI18n} from 'vue-i18n'

const Language = localStorage.getItem('lang')
const messages = Object.assign(lang)
const i18n = createI18n({
    legacy: false,
    locale: Language || 'en',
    messages
})

createApp(App, {
    setup() {
        const { t } = useI18n()
        return { t }
    }
}).use(i18n).use(router).mount('#app')
