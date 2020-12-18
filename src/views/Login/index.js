import Login from './loginUI.js'
import { connect } from 'react-redux'
import { userLogin } from '@/redux/action/index.js'

// import { useHistory } from 'react-router-dom'


const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  userLogin: loginForm => dispatch(userLogin(loginForm))
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)