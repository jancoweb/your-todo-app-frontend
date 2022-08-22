import React from "react";
import api from "../../services/api";
import { getLocalItem } from "../../services/functions";

const Task = ({ tasks, setUpdate }) => {

  async function handleDelete(id) {
    try {
      const token = getLocalItem('token')
      await api.delete(`/task/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      )
      setUpdate(true)
    } catch (error) {

    }
  }

  return <ul>
    {
      tasks.map((task) => {
        return (
          <li key={task.id} className='task'>
            <div className='task_content'>
              <h2>{task.title}</h2>
              <div className='btn_container'>
                <button className='delete' onClick={(e) => handleDelete(task.id)}>Excluir</button>
              </div>
            </div>
          </li>
        )
      })
    }
  </ul>
}

export default Task