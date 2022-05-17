import { message } from "antd";
import React,{ useEffect, useRef, useState } from "react"

export const isFalsy = (value:unknown)  =>value === 0? false :!value

export const isVoid = (value:unknown) => value === undefined || value === null || value === '';
//一个！求反 2个！！转布尔
//在一个函数里，改变传入的对象本身是不好的
// let a:object
// a = ()=>{}
// let result = {...a} //输出的就是一个空对象
//对result进行限制必须是一个键值对类型，因为万物皆对象函数也是，导致传入时，result是一个空对象
export const cleanObject = (object:{[key:string]:unknown})=>{
    //等价于 Object.assign({},object)
    const result = {...object} 
    Object.keys(result).forEach(key=>{
        const value = result[key]
        if(isVoid(value)){
            delete result[key]
            //删除null和undefined值,因为传递参数有可能为空这类情况
            //!null = true(假值)
        }
    })
    return result
}

export const useMount = (callback:()=>void)=>{
    useEffect(()=>{
        callback();
        //依赖项里加上callback会造成无限循环、这和useCallback以及useMeno有关
        // eslint-disable-next-line
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

export const useArray =<T,>(initialArray:T[]) => {
    const [value,setValue] = useState(initialArray)
    return {
        value,
        setValue,
        add:(item:T) => setValue([...value,item]),
        clear:() => setValue([]),
        removeIndex:(index:number) => {
            const copy = [...value];
            copy.splice(index,1)
            setValue(copy)
        }
    }
}
//实现文档标题的动态变换
export const useDocumentTitle = (title:string,keepOnUnMount = true) =>{
    //页面加载时，title = 旧title
    //返回的 ref 对象在组件的整个生命周期内持续存在
    const oldTitle = useRef(document.title).current
    //加载后 oldTitle = 新传入的标题 
    useEffect(()=>{
        document.title = title
    },[title])
    useEffect(()=>{
        return () => {
            if(!keepOnUnMount){
                //页面卸载时，不指定依赖读到的就是旧title
                document.title = oldTitle
            }
        }
    },[keepOnUnMount,oldTitle])
}