import React from 'react'

const FormContainer = (props) => {

    // console.log(props);
    let {course,trainer,handleSubmit,handleChange,handleClear}=props

  return (
    <>
      <form onSubmit={handleSubmit} className='formContainer'>
        <h1>ENTER THE DETAILS IN BELOW FORM</h1>
        <div>
            <label htmlFor="cname">COURSE :</label>
            <input type="text" id='cname' name="course" 
            value={course} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="tname">TRAINER :</label>
            <input type="text" id='tname' name="trainer"
            value={trainer} onChange={handleChange}/>
        </div>
        <div>
            <button>SUBMIT</button>
        </div>
        <div>
          <button type='button' onClick={handleClear}>Clear All</button>
        </div>
      </form>
    </>
  )
}

export default FormContainer
