import React, { useEffect } from 'react'
import SiderBar from '@/layout/SiderBar/siderbar.js'
import Header from '@/layout/rightCenter/header'
import { Row, Col } from 'antd'

import style from'./layout.module.less'


function Layout(props) {
  useEffect(() => {
  })
 
  return (
    <div className={style.layoutWarper}>
      <SiderBar />
      <div className={style.rightWarper}>
        <Header />
        {/* <div className={style.mainWarper}>
          { props.children }
        </div> */}
      </div>
    </div>
  )
}

// function useAuth() {
//   const data
// }

export default Layout