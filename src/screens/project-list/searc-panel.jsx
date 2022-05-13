import {useState } from "react"

export const SearchPanel = ({users,params,setParams})=>{
   
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