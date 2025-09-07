import React from 'react'
import FormCompo from './FormCompo'
import Navbar from './Navbar'
import ToDo from "./ToDo"
import TaskContext from './context/TaskContext'

const App = () => {
  return (
    <>
    <Navbar/>
    <TaskContext>
    <main>
      <FormCompo/>
      <ToDo/>
    </main>
    </TaskContext>
    </>
  )
}

export default App