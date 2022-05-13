import React,{ useEffect, useState } from "react"

export const isFalsy = (value:unknown)  =>value === 0? false :!value
//一个！求反 2个！！转布尔
//在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object:object)=>{
    //等价于 Object.assign({},object)
    const result = {...object} 
    Object.keys(result).forEach(key=>{
        //@ts-ignore
        const value = object[key]
        if(isFalsy(value)){
            //@ts-ignore
            delete result[key]
            //删除null和undefined值,因为传递参数有可能为空这类情况
            //!null = true(假值)
        }
    })
    return result
}

export const useMount = (callback:()=>void)=>{
    useEffect(()=>{
        callback()
    },[])
}
//防抖
// const debounce = (func,delay) => {
//     let timer;
//     return (...params)=>{
//         if(timer){
//             clearInterval(timer)
//         }
//         timer = setTimeout(()=>{
//             func(...params)
//         },delay)
//     }
// }
export const useDebounce  = <T,>(value:T,delay?:number) => {
    const [debouncedValue,setDebouncedValue] = useState(value)
    useEffect(()=>{
        //每次在value变化后进行页面更新，设置一个定时器
        const timer = setTimeout(()=> setDebouncedValue(value),delay)
        //在上一个useEffect处理完后在运行，清理定时器
        return () => clearInterval(timer)
    },[value,delay])
    return debouncedValue
}