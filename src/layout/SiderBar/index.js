import React from 'react'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import style from './index.module.less'
import MenuList from '../menu'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
const { SubMenu, Item } = Menu;


function SiderBar(props) {
  let className = `${style.siderBarWarper} `
  if(props.isCollapsed) {
    className += `${style.isCollapsed}`
  }
  return (
    <div className={className}>
        <Menu theme="dark" mode="inline"  inlineCollapsed={props.isCollapsed}>
          { menuList(MenuList) }
        </Menu>
    </div>
  )
}

function menuList(data, isRoot=true) {
  if (!Array.isArray(data)) return
  return data.map(l => {
    if(l.children && l.children.length > 0) {
      return <SubMenu key={l.key} title={l.title} icon={isRoot?<AppstoreOutlined />:''}>
        { menuList(l.children, false) }
      </SubMenu>
    } else {
    return <Item icon={isRoot?<MenuUnfoldOutlined />:''} key={l.key}><Link to={l.key}>{l.title}</Link></Item>
    }
  })
}



export default SiderBar