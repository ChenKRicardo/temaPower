import { useEffect } from 'react'
import { Users } from 'screens/project-list/searc-panel'
import { cleanObject } from 'utils'
import { useHttp } from './http'
import { useAsync } from './use-async'
export const useUser = (params?:Partial<Users>) => {
    const client = useHttp()
    const {run,...result} = useAsync<Users[]>()
    useEffect(()=>{
        run(client('users',{data:cleanObject(params || {})}))
        // eslint-disable-next-line
    },[params])
    return result
}