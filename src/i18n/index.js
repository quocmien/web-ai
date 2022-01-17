import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './locales/en/index'
import kr from './locales/kr'

Vue.use(VueI18n)

const messages = {
    en,
    kr
}
const i18n = new VueI18n({
    messages,
    locales: 'en'
})

export default i18n
