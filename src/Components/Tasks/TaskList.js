import React, { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import './styles.css'
import Task from "./Tasks";
import api from '../../services/api';
import { getLocalItem } from "../../services/functions";

const TaskList = () => {

  const [tasks, setTasks] = useState([]);
  const [current, setCurrent] = useState(1);
  const [taskPerPage] = useState(6);
  const paginate = (pageNumber) => setCurrent(pageNumber)

  const indexLastTask = current * taskPerPage;
  const indexFirstTask = indexLastTask - taskPerPage;
  const currentTasks = tasks.slice(indexFirstTask, indexLastTask);

  async function listTasks() {
    try {
      const token = getLocalItem('token');
      const res = await api.get('/task', {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      setTasks(res.data)
    } catch (error) {

    }
  }

  useEffect(() => {
    listTasks()
  }, [])


  return (
    <div className="list_container">
      <Task tasks={currentTasks} />
      <Pagination taskPerPage={taskPerPage} totalTasks={tasks.length} paginate={paginate} />
    </div>
  )

}

export default TaskList