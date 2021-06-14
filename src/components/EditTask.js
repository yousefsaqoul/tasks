import React,{ useState, useContext, useEffect} from 'react'
import {TaskContext} from '../context/TaskContext'
export default function EditTask () {
    const {editTask,items} = useContext(TaskContext)
    const [title,setTitle]= useState("")

    useEffect(()=>{
        if(items !== null){
            setTitle(items.title)
        }
    },[items]) 


    const handleSubmite = (e)=>{
            e.preventDefault()
            editTask({title:title, id:items.id})
            setTitle("")

    }
    
    const handleChangee = (e)=>{
        setTitle(e.target.value)
    }

    

    return (
  
        <>
        <form className="border p-3 my-3" onSubmit={handleSubmite}>
             <h1 className="text-center display-4">Edit Task</h1>

            <div className="mb-3">
                <input type="text" className="form-control" onChange={handleChangee} value={title} placeholder="Type Title of Task"/>
            </div>
        
             <div className="d-grid gap-2">
            <button className="btn btn-success"  type="submit">Submit</button>
            </div>
        </form>
        </>
  
    )
}


