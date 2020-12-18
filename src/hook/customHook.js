import React, { useEffect } from 'react'


export function useGetInfo(props) {
  useEffect(() => {
    if (!props.userData.userInfo) {
      props.getInfo()
    }
  })
}