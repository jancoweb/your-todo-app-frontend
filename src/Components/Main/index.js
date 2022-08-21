import React from "react";

import TaskList from "../Tasks/TaskList";

export default function Main() {
  return (
    <>
      <div className='content_wrapper'>
        <div className='logout'>
          <p>Username</p>
          <button className='logout'>Logout</button>
        </div>
        <div className='title_container'>
          <h1>Lista de tarefas</h1>
          <p className='task_counter'>Você completou de tarefas</p>
        </div>
        <div className='input_container'>
          <input type='text' placeholder='O que planeja fazer hoje?' />
          <button className='add'>Adicionar tarefa</button>
        </div>
        <TaskList />
      </div>
    </>
  )
}