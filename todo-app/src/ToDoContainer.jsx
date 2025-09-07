import React, { Fragment } from 'react'

const ToDoContainer = (props) => {
  // console.log(props);
  let {items, handleEdit, handleDelete}=props

  return (
    <>
    <table className='heading'>
      <thead >
        <tr>
          <th>COURSE</th>
          <th>TRAINER</th>
          <th>MORE OPTIONS</th>
        </tr>
      </thead>
      <tbody>
        {items.length>0 && items.map((val)=>{
          // console.log("current val",val); //obj
          return (
            <Fragment key={val.id}>
              <tr>
                <td>{val.course}</td>
                <td>{val.trainer}</td>
                <td>
                  <button onClick={()=>{handleEdit(val.id)}}>
                    EDIT
                  </button>
                  <button onClick={()=>{handleDelete(val.id)}}>
                    DELETE
                  </button>
                </td>
              </tr>
            </Fragment>
          )
        })}
      </tbody>
    </table>
    </>
  )
}

export default ToDoContainer