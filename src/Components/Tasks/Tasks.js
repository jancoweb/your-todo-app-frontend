import React, { useEffect } from "react";
import api from "../../services/api";
import { getLocalItem } from "../../services/functions";
import deleteIcon from "../../assets/delete-icon.svg"

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

  async function handleCheck(task) {
    let check = !task.checked
    const token = getLocalItem('token')
    try {
      await api.patch(`/task/${task.id}`, { checked: check }, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
    } catch (error) {

    }
    setUpdate(true)
  }

  return <ul>
    {
      tasks.map((task) => {
        return (
          <li key={task.id} className='task'>
            <input className="check" type='checkbox' defaultChecked={task.checked} onClick={(e) => handleCheck(task)} />
            <div className='task_content'>
              <h2>{task.title}</h2>
              <div className='btn_container'>
                <button className='delete' onClick={(e) => handleDelete(task.id)}><img src={deleteIcon} alt='delete button' /></button>
              </div>
            </div>
          </li>
        )
      })
    }
  </ul>
}

export default Task