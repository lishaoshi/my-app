
import { 
  login,
  getUserInfo
 } from '@/api/user.js'
import Cookie from 'js-cookie'


export const updateToken = token => ({
  type: 'update_token',
  token
})

const getInfo = info => ({
  type: 'update_info',
  info
})

export const userLogin = loginForm => {
  return async dispatch => {
    const {username, password} = loginForm
    const {success, result, message} = await login({username, password})
    if (success) {
      Cookie.set('token', result.token)
      await dispatch(updateToken(result.token))
      await dispatch(getUserData())
    } else {
     return message
    }
  }
}

export const getUserData = () => {
  return async dispatch => {
    const { data } = await getUserInfo()
    dispatch(getInfo(data))
  }
}