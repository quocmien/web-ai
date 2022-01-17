import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export const getToken = () => {
  return Cookies.get(TokenKey)
}

export const setToken = (token) => {
  return Cookies.set(TokenKey, token)
}

export const removeToken = () => {
  return Cookies.remove(TokenKey)
}

export const setLanguage = (lang) => {
  return Cookies.set('lang', lang)
}

export const getLanguage = () => {
  return Cookies.get('lang') || 'en'
}
