import React,{ useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
import TaskList from './TaskList'
export default function AddTask () {
    const {addNewTask} = useContext(TaskContext)
    const [title,setTitle]= useState("")

    const handleSubmit = (e)=>{
            e.preventDefault()
            addNewTask({title:title, id:Math.floor(Math.random() * 100000)})
            setTitle("")

    }
    
    const handleChange = (e)=>{
        setTitle(e.target.value)
    }


    return (
  
        <>
        <form className="border p-3 my-3" onSubmit={handleSubmit}>
             <h1 className="text-center display-4">Add New Task</h1>

            <div className="mb-3">
                <input type="text" className="form-control" onChange={handleChange} value={title} placeholder="Type Title of Task"/>
            </div>
        
             <div className="d-grid gap-2">
            <button className="btn btn-success"  type="submit">Submit</button>
            </div>
        </form>
        </>
  
    )
}


