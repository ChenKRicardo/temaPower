//在真实环境中，如果使用firebase这种第三方auth服务的话，则不需要开发
import {Users} from 'screens/project-list/searc-panel'
import { useHttp } from "utils/http"
const apiUrl = process.env.REACT_APP_API_URL
export const localStorageKey = '__auth_provider_token__'

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUserResponse = ({user}:{user:Users}) => {
    window.localStorage.setItem(localStorageKey,user.token || '')
    return user
}
//登录
export const login = (data:{username:string,password:string}) => {
  return fetch(`${apiUrl}/login`,{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(data),
    }).then(async response =>{
        if(response.ok){
           return handleUserResponse(await response.json())
        }else{
            return Promise.reject(await response.json())
        }
    })
}

//注册
export const register = (data:{username:string,password:string}) => {
    return fetch(`${apiUrl}/register`,{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(data),
    }).then(async response =>{
        if(response.ok){
          return  handleUserResponse(await response.json())
        }else{
            return Promise.reject(await response.json())
        }
    })
}

//退出登录
export const logout = async() =>  window.localStorage.removeItem(localStorageKey)
