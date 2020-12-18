
import * as actionType from '../actionType/index.js'
import Cookie from 'js-cookie'

const userInfo = {
  token: Cookie.get('token')
}


const userData = (state=userInfo, action) => {

  switch (action.type) {
    case actionType.UPDATETOKEN:
      state.token = action.token
      return state
    case actionType.UPDATEINFO:
      state.userInfo = action.info
      return state
    default:
      break
  }
  return state
}

export default userData

