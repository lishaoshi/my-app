import React from 'react'
import style from './index.module.less'

import logoImg from '@/assets/logo_images/logo1.png'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { useHistory } from 'react-router-dom'

import 'antd/dist/antd.css';

// form for input layou
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

// not input layout
const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
};


function Login(props) {
  return (
    <div className={style.loginWarper}>
      { topLogo }
      { bgImg }
      <div className={style.loginForm}>
        <div className={style.title}>登 录</div>
        <LoginForm {...props}/>
      </div>
    </div>
  )
}

const topLogo = <div className={style.header}>
  <div className={style.opacity} />
  <div className={style.logo}>
    <img src={logoImg} alt=""/>
  </div>
</div> 

const bgImg = <div className={style.bgImg}>
  <div className={style.opacityImg}></div>
</div>

const LoginForm = (props) => {

  let history = useHistory();
  let { from } = { from: { pathname: "/ui/buttons" } };
  
  const onFinish = async values => {
    const msg = await props.userLogin(values)
    if (msg) {
      message.error(msg)
    } else {
      history.replace(from)
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={ onFinish }
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登 录
          </Button>
        </Form.Item>
      </Form> 
    ) 
}

export default Login