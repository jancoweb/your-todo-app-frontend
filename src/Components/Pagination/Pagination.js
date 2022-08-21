import React from "react";
import './styles.css'

const Pagination = ({ taskPerPage, totalTasks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTasks / taskPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="page-list">
      {
        pageNumbers.map((number) => {
          return (
            <li className="page-list-item" key={number}>
              <button onClick={() => paginate(number)}>{number}</button>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Pagination