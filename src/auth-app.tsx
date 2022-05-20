import React from 'react'
import { useAuth } from 'context/auth-context'
import { ProjectListScreen } from 'screens/project-list'
import styled from '@emotion/styled'
import { Row } from 'commponents/lib'
import {ReactComponent as SoftwareLogo}  from 'assets/software-logo.svg';
import { Dropdown, Menu,Button } from 'antd'
import {Route,Routes,Navigate} from 'react-router'
import { ProjectScreen } from 'screens/project'
export const Auth = () => {
    return <Container>
        <PageHeader/>
        <Main>
            <Routes>
                <Route path={'/projects'} element={<ProjectListScreen/>}/>
                <Route path={'/projects/:projectId/*'} element={<ProjectScreen/>}/>
                <Route path={'/'} element={<Navigate to={'/projects'}/>}/>
            </Routes>
        </Main>
    </Container>
}
const PageHeader = () => {
    const {logout,user} = useAuth()
    return  <Header between={true}>
    <HeaderLeft gap={true}>
        <SoftwareLogo width={'18rem'} color={'rgb(38,132,155)'} />
        <h2>项目</h2>
        <h2>用户</h2>
    </HeaderLeft>
    <HeaderRight>
        <Dropdown overlay={<Menu>
            <Menu.Item key={'logout'} onClick={logout}>
                <Button type='link'>登出</Button>
            </Menu.Item>
        </Menu>}>
            <Button type='link' onClick={e => e.preventDefault()}>
                Hi! {user?.name}
            </Button>
        </Dropdown>
    </HeaderRight>
</Header>
}

const Container = styled.div`
    display: grid;
    grid-template-rows: 6rem 1fr;
    height: 100vh;
`
const Header = styled(Row)`
    padding:3.2rem ;
    box-shadow: 0 0 5px rgba(0,0,0,.1);
    z-index: 1;
`
const HeaderLeft = styled(Row)`
`
const HeaderRight = styled.div`
`
const Main = styled.main`
`