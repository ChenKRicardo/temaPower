import React from 'react'
import {Form, Input,Select} from 'antd'
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
    return (
    <Form 
    style={{marginBottom:'2rem'}} 
    layout='inline'
    >
        <Form.Item>
        {/* 等价于setParams(Object.assign({},params,{name:evt.target.value})) */}
            <Input placeholder='项目名称' value={params.name} onChange={evt =>setParams({
                ...params,
                name:evt.target.value
            })}/>
        </Form.Item>
        <Form.Item>
            <Select 
            showSearch
            value={params.personId} 
            onChange ={value =>setParams({
                ...params,
                personId:value
            })}>
                <Select.Option value={''}>负责人</Select.Option>
                {
                    users.map(user =><Select.Option key={user.id } value={user.id}>{user.name}</Select.Option>)
                }
            </Select>
        </Form.Item>
    </Form>
    )
}