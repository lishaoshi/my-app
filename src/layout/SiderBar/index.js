import React from 'react'
import style from './index.module.less'
import MenuList from '../menu'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
const { SubMenu, Item } = Menu;

function SiderBar(props) {

  return (
    <div className={style.siderBarWarper}>
        <Menu theme="dark" mode="inline">
          { menuList(MenuList) }
        </Menu>
    </div>
  )
}

function menuList(data) {
  console.log(data)
  if (!Array.isArray(data)) return
  return data.map(l => {
    if(l.children && l.children.length > 0) {
      return <SubMenu key={l.key} title={l.title}>
        { menuList(l.children) }
      </SubMenu>
    } else {
    return <Item key={l.key}><Link to={l.key}>{l.title}</Link></Item>
    }
  })
}



export default SiderBar