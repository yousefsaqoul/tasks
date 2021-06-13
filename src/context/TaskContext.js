import React, { useState, createContext } from 'react'

export const TaskContext = createContext()
const initialState = [
    {title: 'first task', id: 1},
    {title: 'scond task', id: 2},
    {title: 'third task', id: 3},
];


export const TaskContextProvider = (props) => {
    const [tasks, setTasks]= useState(initialState)
    const removeItem =(id)=>{
        const newTask = tasks.filter((item)=> item.id !==id)
        setTasks(newTask)
    }

    const addNewTask = (task) =>{
        console.log(task)
        setTasks([...tasks,task])
    }

    const findTask = (id) =>{
        const task = tasks.find((item)=> item.id === id)
        console.log(task) 
    }
    return (
        <TaskContext.Provider value={{tasks,removeItem,addNewTask,findTask}}>
            {props.children}
        </TaskContext.Provider>
    )
}

