import { useEffect } from 'react'
import {Project} from 'screens/project-list/list'
import { cleanObject} from 'utils'
import { useAsync } from "utils/use-async"
import { useHttp } from './http'

export const useProjects = (params?:Partial<Project>) => {
    //封装的请求Hooks
    const client = useHttp()
    const {run,...result} = useAsync<Project[]>()
    useEffect(()=>{
       run(client('projects',{data:cleanObject(params || {})}))
        // eslint-disable-next-line
    }, [params])
    return result
}