import React from 'react';
import {Users} from 'screens/project-list/searc-panel'
import { Table, TableProps} from 'antd';
import dayjs from 'dayjs';
export interface Project {
    id:string;
    name:string;
    personId:string;
    pin:boolean;
    organization:string;
    created:number;
}
/* 
    ListProps继承了表格的所有属性同时也有User的属性,这样就不必每次单个添加table属性
    由父组件传递的属性直接传到table并解构
 */

interface ListProps extends TableProps<Project> {
    users:Users[];
}
export const List = ({users,...props}:ListProps)=>{
    return <Table
    rowKey='id'
    pagination={false}
    columns={[
    {
        title:'名称',
        dataIndex:'name',
        sorter:(a,b) => a.name.localeCompare(b.name)
    },
    {
        title:'部门',
        dataIndex:'organization',
    },
    {
        title:"负责人",
        render(value,project){
            return <span>
                {users.find(user=>user.id === project.personId)?.name || '未知'}
            </span>
        }
    },
    {
        title:'创建时间',
        render(value,project){
            return <span>
                {project.created ? dayjs(project.created).format('YYYY-MM-DD') : '无' }
            </span>
        }
    },
]}
    {...props}
    />
}