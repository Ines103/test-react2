import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Register from './components/Register';
import TodoList from './components/TodoList';
import AddTodoList from './components/AddTodoList';
import UpdateTodoList from './components/UpdateTodoList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route  path='/' element={<Login/>}/>
          <Route  path='/login' element={<Login/>}/>
          <Route  path='/register' element={<Register/>}/>
          <Route  path='/todolist' element={<TodoList/>}/>
          <Route  path='/todolist/add' element={<AddTodoList/>}/>
          <Route  path='/todolist/update/:id' element={<UpdateTodoList/>}/>
          <Route  path='*' element={<ErrorPage/>}/>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
