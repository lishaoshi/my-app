import { connect } from 'react-redux'
import SiderBar from './index'
import { updateCollapsed } from '@/redux/action/app.js'

const mapStateToProp = state => ({
  isCollapsed: state.setting.isCollapsed
})

const mapDispatchToProp = dispatch => ({
  setCollapsed: val => dispatch(updateCollapsed(val))
})



export default connect(mapStateToProp, mapDispatchToProp)(SiderBar)