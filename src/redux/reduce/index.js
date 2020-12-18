import { combineReducers } from 'redux'

import UserData from './user'
import setting from './setting'

export default combineReducers({
  userData: UserData,
  setting
})