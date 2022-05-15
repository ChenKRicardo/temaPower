import React,{ useState } from "react"
import { LoginScreen } from "./login"
import { RegisterScreen } from "./register"
import styled from '@emotion/styled'
import {Card, Divider,Button} from 'antd';
import logo from 'assets/logo.svg'
import left from 'assets/left.svg'
import right from 'assets/right.svg'

export const Unauth = () => {
    const [isRegister,setIsRegister] = useState(false)
    return <Background>
        <Container>
        <Header/>
        <ShadowCard>
            <Title>
                {isRegister ? '请注册' : '请登录'}
            </Title>
        {
            isRegister ? <RegisterScreen/> : <LoginScreen/> 
        }
        <Divider/>
        <a onClick={() => setIsRegister(!isRegister)}>{isRegister?'已有账号？登录' : '没有账号？注册'}</a>
        </ShadowCard>
    </Container>
    </Background>
}

//登录公共样式
export const LongButton = styled(Button)`
    width: 100%;
`
//标题样式
const Title = styled.h2`
    margin-bottom: 2.4rem;
    color:rgb(94,108,132)
`
//背景图
const Background = styled.div`
position: absolute;
height: 100%;
width: 100%;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: left bottom,right bottom;
background-size:calc(calc(100vw-40rem)/2-3.2rem),calc(calc(100vw-40rem)/2-3.2rem),cover;
background-image: url(${left}),url(${right});
`
//加入图标
const Header = styled.header`
    background:url(${logo}) no-repeat center;
    padding: 5rem 0rem;
    background-size: 8rem;
    width: 100%;
`
//修改antd组件(Card)样式
const ShadowCard = styled(Card)`
width: 40rem;
min-height: 56rem;
padding: 3.2rem 4rem;
box-sizing: border-box;
box-shadow: rgba(0,0,0,.1) 0 0 10px;
text-align: center;
`
//修改样式'.'后面是HTML标签
const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
min-height:100vh;
`