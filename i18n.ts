import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import * as RNLocalize from "react-native-localize"

import en from './locales/en/translation.json' 
// --> {
//     "createPassphrase": {
//         "buttonTitle": "Create Passphrase"
//     }
// }


import pt from './locales/pt/translation.json'
// --> {
//     "createPassphrase": {
//         "buttonTitle": "Criar Passphrase"
//     }
// }

const resources = {
    en: { translation: en },
    pt: { translation: pt }
}

const getDeviceLanguage = () => {
    const locales = RNLocalize.getLocales()
    if (Array.isArray(locales)) {
        return locales[0].languageCode
    }
    return "en"
}

i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: "v4",
        lng: getDeviceLanguage(),
        fallbackLng:"en",
        resources,
        interpolation: {
            escapeValue: false,
        }
    })

export default i18n
