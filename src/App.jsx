import TaskForm from "./components/TaskForm";
import {AllTasks} from "./components/Styles";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState } from "react";
import TaskList from "./components/Tasks";


const App = () =>  {

  return (
  
    <div className="todo-app">
        <TaskList />
    </div>

  )
  
}

export default App
