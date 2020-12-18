import React, { useEffect } from 'react'
import SiderBar from '@/layout/SiderBar'
import Header from '@/layout/rightCenter/header'
import { Row, Col } from 'antd'

import style from'./layout.module.less'


function Layout(props) {
  useEffect(() => {
  })
 
  return (
    <div>
      <Row>
          <Col span={3}>
            <SiderBar />
          </Col>
          <Col span={21}>
            <div className={style.rightWarper}>
              <Header />
              <div className={style.mainWarper}>
                { props.children }
              </div>
            </div>
          </Col>
        </Row>
    </div>
  )
}

// function useAuth() {
//   const data
// }

export default Layout