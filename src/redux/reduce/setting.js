
import * as actionType from '../actionType/index.js'
import customSet from '../../setting'

const setting = {
  isCollapsed: customSet.isCollapsed
}


const settings = (state=setting, action) => {
  switch (action.type) {
    case actionType.U_Collapsed:
      state.isCollapsed = action.val
      return JSON.parse(JSON.stringify(state))
    default:
      return state
  }
}

export default settings

