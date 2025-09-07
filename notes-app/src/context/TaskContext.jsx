//* send the data from "TakContext.jsx" to "FormCompo.jsx"

import React ,{createContext, useState} from 'react'

//! step 1 : create a context
export let TaskApi = createContext()

const TaskContext = (props) => {
    // console.log(props);

    let [formData , setFormData] = useState({
        title:"",
        description:"",
        category:""
    })

    let handleChange=(event)=>{
        let {name,value} = event.target
        setFormData({...formData,[name]:value})
    }

    let handleSubmit = (event)=>{
        event.preventDefault()
    }

    //! step 2 : context provider
  return (
    <TaskApi.Provider value={{handleSubmit,formData,handleChange}}>
        {props.children}
        {/* context consumer-->FormCompo , ToDo*/}
    </TaskApi.Provider>
  )
}

export default TaskContext