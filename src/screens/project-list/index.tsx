import { List } from "./list"
import { SearchPanel } from "./searc-panel"
import React,{useState,useEffect} from 'react'
import {cleanObject, useDebounce, useMount} from '../../utils'
import * as qs from 'qs'
const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen = ()=>{
    const [params,setParams] = useState({
        name:"",
        personId:""
    })
    const [list,setList] = useState([])
    const [users,setUsers] = useState([])
    const debouncedParams = useDebounce(params,500)
    useEffect(()=>{
        /* 
            qs.stringify 是把一个参数对象格式化为一个字符串
            qs.stringify({ c: 'b', a: 'd' })
            'c=b&a=d'
         */
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParams))}`).then(async response =>{
            if(response.ok){
                setList(await response.json())
            }
        })
    },[debouncedParams])
    useMount(()=>{
        fetch(`${apiUrl}/users`).then(async response=>{
            if(response.ok){
                setUsers(await response.json())
            }
        })
    })
    return <div>
        <SearchPanel users={users} params={params} setParams={setParams}/>
        <List users={users} list={list}/>
    </div>
}