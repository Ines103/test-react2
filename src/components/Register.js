import React, { useState } from 'react'
import axios from 'axios';
import { Formik, useFormik } from 'formik';

function Register() {

  

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  const validate = values => {
    //values.firstName values.lastName values.email values.password
    //errors.firstName errors.lastName errors.email errors.password
    //errors.firstName = 'This field is required'
    let errors = {}

    if (!values.firstName) { //name is empty
      errors.firstName = 'Required' //the attributes sould be similar to the initial values
    }
    if (!values.lastName) { //name is empty
      errors.lastName = 'Required'
    }
    if (!values.email) {
      errors.email = 'Required'  //a string value indicate the error msg
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) { //if the email has been entered, we test its format
      errors.email = 'Invalid email format'
    }

    if (!values.password) {
      errors.password = 'Required'
    }
    return errors //the fct must return an object
  }

  // const [user, setUser] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: ''
  // })

  // const handleChange= (e) => {
  //   const { id, value } = e.target
  //   setUser(() => {
  //     return { ...user, [id]: value }
  //   })

  // }

  // const handleClick = async() => {
  //   await axios.post('http://localhost:3000/users',user)

  // }


  return (
    <div className="Auth-form-container">
      <Formik
        initialValues={initialValues}
        validate={validate}

        onSubmit={(values, { setSubmitting }) => {
          axios.post('http://localhost:3000/users', values)
            .then(response => {
              // console.log(response);
              navigate('/login')
            }).catch(error => {
              console.log(error)
            });
        }}>

        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign Up</h3>
              <div className="mb-3">
                <label>First name</label>
                <input
                  id='firstName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  type="text"
                  className="form-control mt-1"
                  placeholder="First name"

                  {errors.firstName && touched.firstName ? (<div className='error'>{errors.firstName} </div>) : null}

                />
              </div>
              <div className="form-group mt-3 form-control">
                <label>Last name</label>
                <input onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName} id='lastName' type="text" className="form-control mt-1" placeholder="Last name" />
                {errors.lastName && touched.lastName ? (<div className='error'>{errors.lastName} </div>) : null}

              </div>


              <div className=" form-group mt-3 form-control ">
                <label>Email address</label>
                <input
                  id='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  {errors.email && touched.email ? (<div className='error'>{errors.email} </div>) : null}

                />
              </div>
              <div className="form-group mt-3 form-control">
                <label>Password</label>
                <input
                  id='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  {errors.email && touched.email ? (<div className='error'>{errors.email} </div>) : null}

                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button  disabled={isSubmitting}  type="button" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
       
    </div>
  )
}


export default Register
