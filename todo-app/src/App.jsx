import React, { useState } from 'react'
import FormContainer from './FormContainer'
import ToDoContainer from './ToDoContainer'
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  let [formData,setFormData]= useState({
    items : [] ,//! to store "multi set" of data
    course:"" ,//? to store course
    trainer:"", //? to stire trainer
    id:uuidv4() //! generate random id for each data set
  })

  let handleChange=(event)=>{
    // console.log(event);
    let {name,value}= event.target
    setFormData({...formData,[name]:value})
  }

  //event-->SBE
  let handleSubmit=(event)=>{
    event.preventDefault()

    const course = formData.course.trim();
    const trainer = formData.trainer.trim();

    if (!course && !trainer) {
      alert("Please enter course and trainer.");
      return;
    } else if (!course) {
      alert("Please enter course.");
      return;
    } else if (!trainer) {
      alert("Please enter trainer.");
      return;
    }

    //! to pass the data into array
    setFormData({
      ...formData, //? to stop the overriding of key&value pair/to preventing overriding inside state obj
      items:[
        ...formData.items,//? prevent overriding inside array
        {
        course:formData.course,
        trainer:formData.trainer,
        id:formData.id
      }],
      course:"", //! to set "course input" back to empty to collect new data
      trainer:"", //! to set "trainer input" back to empty to collect new data
      id:uuidv4()//! to generate "new id" for "next data"
    });
    // alert("Data added successfully!");
  };

  //! ClearAll the data
  let handleClear = () => {
    setFormData({
      items: [],        // clears all submitted entries
      course: "",       // clears input field
      trainer: "",      // clears input field
      id: uuidv4(),     // resets ID
    });
  };
  

  //! delete set of data
  let handleDelete = (delId)=>{
    console.log("id of item to delete",delId);
    let filterdata = formData.items.filter((val)=>{
      // console.log("current val",val); //obj
      return val.id !== delId //! if "id" of current val if not matching with "id
      //! of value we are deleting" then items will be removed
    })
    console.log("filtered val",filterdata);
    setFormData({...formData,items:filterdata}) //? storing remaing val back into array
  }

  //! Editing the data
  let handleEdit = (editId)=>{
    console.log("id of item to edit",editId);

    //? collecting "all remaining values" apart from "value to be updated"
    let remainingVal = formData.items.filter((val)=>{
      // console.log("current val",val); //obj
      return val.id !== editId
    })

    //? finding specific value to update from an array
    let editItem = formData.items.find((val)=>{
      console.log("current val",val); //obj
      return val.id === editId //* if the id of current val.matches with edited then we will get item to edit
    })
    console.log("item to update",editItem); //val
    console.log("remaining value",remainingVal);

    setFormData({
      items:remainingVal, //returning remaining values (apart from item to edit)
      course:editItem.course, //brining "course to update" in course input field
      trainer:editItem.trainer, //brining "trainer to update" in trainer input field
      id:editItem.id //pointing to the id that we are editing
    })
  }

  return (
    <>
    <section id='mainContainer'>
        <FormContainer handleSubmit={handleSubmit}
        course={formData.course}
        trainer={formData.trainer}
        handleChange={handleChange}
        handleClear={handleClear}/>
        <ToDoContainer items={formData.items}
        handleEdit={handleEdit} handleDelete={handleDelete} />
    </section>
    </>
  )
}
export default App

// ! uuid --> generate random idZ