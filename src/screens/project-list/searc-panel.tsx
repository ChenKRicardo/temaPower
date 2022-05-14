import React from 'react'
export interface Users {
    id:string;
    name:string;
    email:string;
    title:string;
    organization:string;
    token:string;
}
interface SearchPanelProps {
    users:Users[],
    params:{
        name:string,
        personId:string
    },
    setParams:(params:SearchPanelProps['params'])=> void
}
export const SearchPanel = ({users,params,setParams}:SearchPanelProps)=>{
   
    return <form>
        <div>
        {/* 等价于setParams(Object.assign({},params,{name:evt.target.value})) */}
            <input type="text" value={params.name} onChange={evt =>setParams({
                ...params,
                name:evt.target.value
            })}/>
            <select value={params.personId} onChange ={evt =>setParams({
                ...params,
                personId:evt.target.value
            })}>
                <option value={''}>负责人</option>
                {
                    users.map(user =><option key={user.id} value={user.id}>{user.name}</option>)
                }
            </select>
        </div>
    </form>
}