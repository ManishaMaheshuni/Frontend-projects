// ? let value = useContext(contextApi)
import React, {useContext} from 'react'
import {TaskApi} from './context/TaskContext'

const FormCompo = () => {

  //! step 3 : context consumer
  let data = useContext(TaskApi)
  console.log("value",data); //obj
  let {handleSubmit,formData,handleChange} = data
  let {title , description , category} = formData

  return (
    <>
    <form onSubmit={handleSubmit}>
      <section>
        <h1>TAKE NOTES BELOW</h1>
      </section>
      <section>
        <label htmlFor="tname">TITLE :</label>
        <div>
          <input type='text' id='tname' name='title' value={title}
          onChange={handleChange}/>
        </div>
      </section>
      <section>
        <label htmlFor="desc">DESCRIPTION : </label>
        <div>
          <textarea name="description" id="desc" value={description} onChange={handleChange}></textarea>
        </div>
      </section>
      <section>
        <label htmlFor="">CATEGORY : </label>
        <select name="category" value={category} onChange={handleChange}>
          <option value="" disabled>--select--</option>
          <option value="general">GENERAL</option>
          <option value=""></option>
        </select>
      </section>
      <section></section>
    </form>
    </>
  )
}

export default FormCompo