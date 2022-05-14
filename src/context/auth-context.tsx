import React, { createContext, ReactNode, useContext, useState } from 'react'
import * as auth from 'auth-provider'
import {Users} from 'screens/project-list/searc-panel'
import { http } from 'utils/http';
import { useMount } from 'utils';
interface AuthForm {
    username:string;
    password:string;
}
//携带token发送请求'/me',获取用户信息
const bootstrapUser = async() =>{
    let user = null
    const token = auth.getToken()
    if(token){
        const data = await http('me',{token})
        user = data.user
    }
    return user
}
const AuthConetext = createContext<{
    user:Users | null,
    login:(form:AuthForm) => Promise<void>,
    register:(form:AuthForm) => Promise<void>,
    logout: () => Promise<void>;
} | undefined>(undefined)
AuthConetext.displayName = 'AuthContext'

//user => setUser(user) 消参point free => setUser
export const AuthProvider = ({children}:{children:ReactNode}) => {
    const [user,setUser] = useState<Users | null>(null)
    const login = (form:AuthForm) => auth.login(form).then(setUser)
    const register = (form:AuthForm) => auth.register(form).then(setUser)
    const logout = () => auth.logout().then(() => setUser(null))
    useMount(()=>{
        bootstrapUser().then(setUser)
    })
    return <AuthConetext.Provider children={children} value={{user,login,register,logout}}/>
}

export const useAuth = () => {
    const context = useContext(AuthConetext)
    if(!context){
        throw new Error(`useAuth必须在AuthProvider中使用`)
    }
    return context
}