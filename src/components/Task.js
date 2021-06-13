import React,{useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

const Task = ({item}) => {
    const {removeItem,findTask} = useContext(TaskContext)

    return (
            <li className="border p-3">
              {item.title}
              <button  onClick={()=>removeItem(item.id)}  className="btm btn-danger float-end me-2 rounded border-0">Delete</button>
              <button  onClick={()=>findTask(item.id)} className="btm btn-info float-end me-2 rounded border-0">Edit</button>

            </li> 
    )
}

export default Task
