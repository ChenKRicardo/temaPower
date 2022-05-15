import { useAuth } from 'context/auth-context'
import React from 'react'
import {LongButton} from './index';
import {Form,Input} from 'antd'
export const RegisterScreen = ()=>{
    const {register,user} = useAuth()
    const handleSubmit = (valuse:{username:string,password:string})=>{
        register(valuse)
    }
    return <Form 
    onFinish={handleSubmit}>
        <Form.Item
            name='username'
            rules={[{required:true,message: '请输入你的用户名!'}]}
            >
            <Input placeholder='用户名'/>
        </Form.Item>
        <Form.Item
        name='password'
        rules={[{ required: true, message: '请输入你的密码!' }]}
        >
           <Input.Password placeholder='密码'/>
        </Form.Item>
        <Form.Item>
            <LongButton htmlType='submit' type='primary'>注册</LongButton>
        </Form.Item>
    </Form>
}