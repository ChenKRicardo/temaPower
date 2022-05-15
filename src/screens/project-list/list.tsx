import React from 'react';
import {Users} from 'screens/project-list/searc-panel'
import { Table} from 'antd';
interface Project {
    id:string;
    name:string;
    personId:string;
    pin:boolean;
    organization:string;
}
interface ListProps {
    list:Project[],
    users:Users[];
}
export const List = ({users,list}:ListProps)=>{
    return <Table
    pagination={false}
    columns={[{
        title:'名称',
        dataIndex:'name',
        sorter:(a,b) => a.name.localeCompare(b.name)
    },{
        title:"负责人",
        render(value,project){
            return <span key={project.personId}>
                {users.find(user=>user.id === project.personId)?.name || '未知'}
            </span>
        }
    }]}
    dataSource={list}
    >
    </Table>
}