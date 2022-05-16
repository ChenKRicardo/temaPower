import { useAuth } from 'context/auth-context'
import React from 'react'
import {LongButton} from './index';
import {Form,Input} from 'antd'
import { useAsync } from 'utils/use-async';
export const RegisterScreen = ({onError}:{onError:(error:Error) => void})=>{
    const {register,user} = useAuth()
    const {run,isLoading,error} = useAsync(undefined,{throwOnError:true})
    const handleSubmit = async ({cpassword,...values}:{username:string,password:string,cpassword:string})=>{
       if(cpassword!==values.password){
           onError(new Error('请确认两次密码是否相同'))
           return
       }
        try {
       await run(register(values))
       } catch (error:any) {
           onError(error)
       }
    }
    return <Form 
    onFinish={handleSubmit}>
        {error ? error.message : null}
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
        <Form.Item
        name='cpassword'
        rules={[{ required: true, message: '请确认你的密码!' }]}
        >
           <Input.Password placeholder='密码'/>
        </Form.Item>
        <Form.Item>
            <LongButton loading={isLoading} htmlType='submit' type='primary'>注册</LongButton>
        </Form.Item>
    </Form>
}