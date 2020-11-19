import React, { useState } from 'react'
import { Button } from 'antd'


const UiButton = (props) => {
  const info = useName()
  return (
    <div className="Ui-Burtton_warper">
      <Button onClick={() => info.setName()}>{ info.user }</Button>
    </div>
  )
}

const useName = () => {

  const [user, setUser] = useState('click me');
  const setName = (cb) => {
    setUser("click other")
    cb && cb()
  }

  return {
    user,
    setName
  };
  
}

export default UiButton