import { List } from "./list"
import { SearchPanel } from "./searc-panel"
import React,{useState,useEffect} from 'react'
import {cleanObject, useDebounce, useMount} from '../../utils'
import { useHttp } from "utils/http"
export const ProjectListScreen = ()=>{
    const [params,setParams] = useState({
        name:"",
        personId:""
    })
    const [list,setList] = useState([])
    const [users,setUsers] = useState([])
    const debouncedParams = useDebounce(params,500)
    const client = useHttp()

    useEffect(()=>{
        client('projects',{data:cleanObject(debouncedParams)}).then(setList)
    }, [debouncedParams])

    useMount(()=>{
        client('users').then(setUsers)
    })

    return <div>
        <SearchPanel users={users} params={params} setParams={setParams}/>
        <List users={users} list={list}/>
    </div>
}