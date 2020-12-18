import React from 'react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom'
import style from './index.module.less'

// const menuDown = (
//   <Menu>
//     <Menu.Item>
//       <div onClick={() => handleOut()}>退出登录</div>
//     </Menu.Item>
//     <Menu.Item>
//     <div>个人信息</div>
//     </Menu.Item>
//     {/* <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
//         3rd menu item
//       </a>
//     </Menu.Item>
//     <Menu.Item danger>a danger item</Menu.Item> */}
//   </Menu>
// );
function menuDown(history) {
  function handleOut() {
    console.log('user sigle out')
    history.push('/login')
  }
  return (
      <Menu>
        <Menu.Item>
          <div onClick={() => handleOut()}>退出登录</div>
        </Menu.Item>
        <Menu.Item>
        <div>个人信息</div>
        </Menu.Item>
        {/* <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
          </a>
        </Menu.Item>
        <Menu.Item danger>a danger item</Menu.Item> */}
      </Menu>
  )
}



function Header (props) {
  let history = useHistory();
  const classNames = `${style.header} ${style.warper} ${style.title}`
  return (
    <div className={classNames}>
      <Dropdown overlay={menuDown(history)} arrow>
        <span>
          李少师 { ' ' }
          <DownOutlined />
        </span>
      </Dropdown>
    </div>
    // <HeaderWarper>
    //   <span>李少师</span>
    // </HeaderWarper>
  )
}


export default Header