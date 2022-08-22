import React, { useState } from "react";
import { clearLocalItems, getLocalItem } from "../../services/functions";
import TaskList from "../Tasks/TaskList";
import { useNavigate } from 'react-router-dom'
import api from "../../services/api";

export default function Main() {

  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: ''
  });

  function handleLogout() {
    clearLocalItems();
    navigate('/')
  }

  async function handleAddTask(e) {
    e.preventDefault();
    const token = getLocalItem('token')

    if (!form.title) return

    await api.post('/task', {
      title: form.title
    }, {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
    )
    setForm({ title: '' });
    setUpdate(true)
  }

  function changeValue(e) {
    setForm({ ...form, [e.name]: e.value })
  }

  return (
    <>
      <div className="app_wrapper">
        <div className='content_wrapper'>
          <div className='logout'>
            <p>{getLocalItem('user')}</p>
            <button className='logout' onClick={handleLogout}>Logout</button>
          </div>
          <div className='title_container'>
            <h1>Lista de tarefas</h1>
          </div>
          <div className='input_container'>

            <form id="addTask" onSubmit={handleAddTask}>
              <input type='text' placeholder='O que planeja fazer hoje?' value={form.title} name="title" onChange={(e) => changeValue(e.target)} />
              <button className='add'>Adicionar tarefa</button>
            </form>

          </div>
          <TaskList update={update} setUpdate={setUpdate} />
        </div>
        <p>@jancoweb</p>
      </div>
    </>
  )
}