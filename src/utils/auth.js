import Cookies from 'js-cookie'

const TokenKey = 'SESSION_TOKEN'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function publics(params) {
  return Cookies.set('redirect', params)
}
// export function getToken() {
//   return localStorage.getItem(TokenKey)
// }

// export function setToken(token) {
//   return localStorage.setItem(TokenKey, token)
// }

// export function removeToken() {
//   return localStorage.removeItem(TokenKey)
// }
// export function publics(params) {
//   return localStorage.setItem('redirect', params)
// }

