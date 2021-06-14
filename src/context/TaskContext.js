import React, { useState, createContext } from 'react'

export const TaskContext = createContext()
const initialState = [
    {title: 'first task', id: 1},
    {title: 'scond task', id: 2},
    {title: 'third task', id: 3},
];


export const TaskContextProvider = (props) => {
    const [tasks, setTasks]= useState(initialState)
    const [items, setItems]= useState(null)

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
        setItems(task)
    }
    const editTask = (task) =>
    {
        const editTasks = tasks.map((item)=>{
            return item.id === task.id ? task: item
        })
        setTasks(editTasks)
        setItems(null)
    }
    return (
        <TaskContext.Provider value={{tasks,removeItem,addNewTask,findTask,items,editTask}}>
            {props.children}
        </TaskContext.Provider>
    )
}

