import { List } from "./list"
import { SearchPanel } from "./searc-panel"
import React,{useState} from 'react'
import { useDebounce } from '../../utils'
import styled from "@emotion/styled"
import { Typography } from "antd"
import { useProjects } from "utils/project"
import { useUser } from "utils/user"
export const ProjectListScreen = ()=>{
    const [params,setParams] = useState({
        name:"",
        personId:""
    })
    //防抖Hooks
    const debouncedParams = useDebounce(params,500)
    const {isLoading,error,data:list} = useProjects(debouncedParams)
    const {data:users} = useUser()
    return <Container>
        <h1>项目列表</h1>
        <SearchPanel users={users || []} params={params} setParams={setParams}/>
        {error? <Typography.Text type="danger">{error.message}</Typography.Text> : null}
        <List loading={isLoading} users={users || []} dataSource={list || []}/>
    </Container>
}

const Container = styled.div`
    padding:3.2rem
`