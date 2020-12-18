import React, { useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import { getInfo } from '@/reudx/action/index.js'
import { useGetInfo } from '@/hook/customHook'
import { getUserData } from '@/redux/action' 

const mapStateToProps = state => ({
  userData: state.userData
})

const mapDispatchToProps = dispatch => (
  {
    getInfo: _ => dispatch(getUserData())
  }
)


function AuthProvide({ children, ...reset}) {
  const userData = reset.userData
  useGetInfo(reset)
  if (!userData.token) {

    return <Redirect
      to={
        {
          pathname: '/login'
        }
      }
    ></Redirect>
  }
  

  if (reset.location.pathname==='/') {
    return (
      <Redirect to={
        {
          pathname: '/ui/button'
        }
      }/>
    )
  }
  return (
    <div>
      {
        userData.token ? children : <Redirect
              to={
                {
                  pathname: "/login",
                }
              }
            />
      }
    </div>
  )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthProvide))