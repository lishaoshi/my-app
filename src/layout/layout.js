import React, { useEffect } from 'react'
import SiderBar from '@/layout/SiderBar'
import Header from '@/layout/rightCenter/header'
import { Row, Col } from 'antd'

import './layout.less'
import Title from 'antd/lib/skeleton/Title'


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
            <div className='right-warper'>
              <Header />
              <div className='main-warper'>
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