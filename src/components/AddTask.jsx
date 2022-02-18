import React, { useState } from 'react'
import { GrAddCircle } from 'react-icons/gr'
import TaskForm from './TaskForm'
import Tasks from './Tasks';


const AddTask = () => {
  const [displayForm, setDisplayForm] = useState(false);

  return (
    <>
    { displayForm && <TaskForm /> }
    <GrAddCircle onClick={() => setDisplayForm(true)} />
    </>
  )
}

export default AddTask