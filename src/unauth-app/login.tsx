import { useAuth } from 'context/auth-context'
import React from 'react'
import {LongButton} from './index';
import {Form,Input} from 'antd'
import { useAsync } from 'utils/use-async';
export const LoginScreen = ({onError}:{onError:(error:Error) => void})=>{
    const {login,user} = useAuth()
    const {run,isLoading} = useAsync(undefined,{throwOnError:true})
    const handleSubmit =async (values:{username:string,password:string})=>{
        try {
          await run(login(values))
        } catch (error:any) {            
            onError(error)
        }
    }
    return <Form 
    onFinish={handleSubmit}>
        <Form.Item
        name="username"
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
            <LongButton loading={isLoading} type="primary" htmlType='submit'>登录</LongButton>
        </Form.Item>
    </Form>
}
