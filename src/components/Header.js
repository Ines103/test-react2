import React from 'react'
import {Link} from 'react-router-dom' ;

function Header() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                       
                        <Link className="nav-link " to="/login">Login</Link>
                        <Link className="nav-link" to="/register">Register</Link>
                        <Link className="nav-link" to="/todolist">TodoList</Link>
                        <Link className="nav-link " to="/todolist/add" >addTodoList</Link>
                        <Link className="nav-link " to="/todolist/update/:id" >updateTodoList</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
