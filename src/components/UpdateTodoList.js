import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function UpdateTodoList() {

  const navigate = useNavigate();
  const {id} = useParams();

  const [lists, setList] = useState({
    name: '',
    description: ''
  })

  useEffect(() => {
    axios.get(`http://localhost:3000/todoList/${id}`)
      .then(response => {
        setList(response.data)
      }).catch(error => {
        console.log(error)
      });
  }, [id])

  const handleChange = (e) => {
    const { id, value } = e.target;
    setList(() => {
      return { ...lists, [id]: value }
    })
  }

  const handleClick = () => {
    axios.put(`http://localhost:3000/todoList/${id}`, lists)
    .then(response => {
        navigate('/todoList')
    }).catch(error => {
      console.log(error)
    });

  }


  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Update Product</h3>

          <div className="form-group mt-3">
            <label>Name</label>
            <input onChange={handleChange} value={lists.name} id='name' type="text" className="form-control mt-1" placeholder="Enter Name" />
          </div>

          <div className="form-group mt-3">
            <label>Quantity</label>
            <input onChange={handleChange} value={lists.quantity} id='quantity' type="text" className="form-control mt-1" placeholder="Enter Quantity" />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button onClick={handleClick} type="button" className="btn btn-primary">Update </button>
          </div>
          <div className="d-grid gap-2 mt-3">
            <Link to="/products" className='btn btn-link'>Cancel</Link>
          </div>
        </div>

      </form>
    </div>
  )
}

export default UpdateTodoList
