import React, { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import './styles.css'
import Task from "./Tasks";

const TaskList = () => {
  const axios = ''

  const [tasks, setTasks] = useState([{ id: 1, content: 'Estudar React.js', done: false }, { id: 13, content: 'Estudar React.js', done: true }, { id: 12, content: 'Estud1ar React.js', done: true }, { id: 134, content: 'Estudar React.js', done: true }, { id: 1555, content: 'Estud222ar React.js', done: true }, { id: 15, content: 'Estudar Reac44t.js', done: true }, { id: 17, content: 'Estudar Reaceeeet.js', done: false }, { id: 155, content: 'Estu2323dar React.js', done: true }, { id: 132, content: 'Estudar React.js', done: true }, { id: 15, content: 'Estudar React.js', done: true }, { id: 61, content: 'eeee React.js', done: true }, { id: 21, content: 'Estudddddar React.js', done: false }]);

  const [current, setCurrent] = useState(1);
  const [taskPerPage] = useState(6);

  const paginate = (pageNumber) => setCurrent(pageNumber)

  const indexLastTask = current * taskPerPage;
  const indexFirstTask = indexLastTask - taskPerPage;
  const currentTasks = tasks.slice(indexFirstTask, indexLastTask);

  useEffect(() => {
    const getTasks = async () => {
      const res = await axios.get('http://localhost:3000/tasks');
      setTasks(res.data)
    }
  }, [])


  return (
    <div className="list_container">
      <Task tasks={currentTasks} />
      <Pagination taskPerPage={taskPerPage} totalTasks={tasks.length} paginate={paginate} />
    </div>
  )

}

export default TaskList