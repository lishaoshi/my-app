import React, { useEffect } from 'react'
import { Route, useState, Redirect } from 'react-router-dom'

export default function AuthProvide({ children, reset}) {
  return (
    <Route
    {...reset}
    render={
      ({ location }) =>{
        return <Redirect
          to={
            {
              pathname: "/login",
              state: { from: location }
            }
          }
          ></Redirect>
      }
    }
    >
    </Route>
  )
}