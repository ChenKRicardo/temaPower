import React from 'react'
import {Routes,Route,} from 'react-router'
import { Link,Navigate } from 'react-router-dom'
import {KanbanScreen} from 'screens/kanban'
import {EpicScreen} from 'screens/epic'
export const ProjectScreen = () => {
    return <div>
        <h1>ProjectScreen</h1>
        <Link to={'kanban'}>看板</Link>
        <Link to={'epic'}>任务组</Link>
        <Routes>
            <Route path={'kanban'} element={<KanbanScreen/>}/>
            <Route path={'epic'} element={<EpicScreen/>}/>
            <Route path={'/projects/:project'} element={<Navigate to={'/kanban'}/>}/>
        </Routes>
    </div>
}