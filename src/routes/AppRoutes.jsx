import React, { useEffect, useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router'
import MyTask from '../components/MyTask'
import NewTaskForm from '../components/NewTaskForm'
import Dashboard from '../components/Dashboard'
import EditTask from '../components/EditTask'
const AppRoutes = () => {
    

    const [tasks, setTasks] = useState(() => {
    try {
        const savedTasks = JSON.parse(localStorage.getItem("tasks"));
        return Array.isArray(savedTasks) ? savedTasks : [];
    } catch {
        return [];
    }
});

    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks])

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Dashboard tasks={tasks} setTasks={setTasks} />
        },
        {
            path: "/my-tasks",
            element: <MyTask tasks={tasks} setTasks={setTasks} />
        },
        {
            path: "/addTask",
            element: <NewTaskForm tasks={tasks} setTasks={setTasks} />
        },
        {
            path: "/editTask/:id",
            element: <EditTask tasks={tasks} setTasks={setTasks} />
        }
    ])


  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes