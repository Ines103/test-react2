import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function TodoList() {

    const [lists, setList] = useState({
        name: '',
        description: ''
    })

    const TodoList = async () => {
        const listsFound = await axios.get("http://localhost:3000/todoList")
        setList(listsFound.data)
    }

    useEffect(() => {
        TodoList()
    }, [])

    const deleteList = async (id) => {
        await axios.delete(`http://localhost:3000/todoList/${id}`)
        TodoList();
    }


    return (
        <div>
            <table>

                <thead>
                    <tr> Name</tr>
                    <tr> Description</tr>
                </thead>

                <tbody>
                    {lists && lists.map(list =>
                        <tr key={list.id}>
                            <td>{list.id} </td>
                            <td>{list.name} </td>
                            <td>{list.description}</td>

                            <td>
                                <Link className='btn btn-info' to={`/todolist/add/${list}.id}`}>Update</Link>
                                <button onClick={() => deleteList(list.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    )}

                </tbody>


            </table>


        </div>
    )
}

export default TodoList

