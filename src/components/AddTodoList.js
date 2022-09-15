import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddTodoList() {

  const navigate = useNavigate();


  const [lists, setList] = useState({
    name: '',
    description: ''
})

  const handleChange = (e) => {
    const { id, value } = e.target;
    setList(() => {
      return { ...lists, [id]: value }
    })
  }

  const handleClick = () => {
    axios.post('http://localhost:3000/todoList', lists)
      .then(response => {
          navigate('/todolist')
      }).catch(error => {
        console.log(error)
      });
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form"  >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Add TodoList</h3>

          <div className="form-group mt-3">
            <label>Name</label>
            <input onChange={handleChange}   id='name' type="text" className="form-control mt-1" placeholder="Enter Name" />
          </div>

          <div className="form-group mt-3">
            <label>Description</label>
            <input  onChange={handleChange} id='description' type="text" className="form-control mt-1" placeholder="Enter Description" />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button  onClick={handleClick}type="button" className="btn btn-primary">Add </button>
          </div>
          
          <div className="d-grid gap-2 mt-3">
            <Link to="/todolist" className='btn btn-link'>Cancel</Link>
          </div>
        </div>

      </form>
    </div>
  )
}

export default AddTodoList
