import React from "react";

const Task = ({ tasks }) => {
  return <ul>
    {
      tasks.map((task) => {
        return (
          <li key={task.id} className='task'>
            <div className='task_content'>
              <h2>{task.content}</h2>
              <div className='btn_container'>
                <button className='edit'>Editar</button>
                <button className='delete'>Excluir</button>
              </div>
            </div>
          </li>
        )
      })
    }
  </ul>
}

export default Task