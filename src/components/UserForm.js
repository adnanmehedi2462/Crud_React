import React, { useState } from 'react'

export const UserForm = (props) => {
    const [adduser,setAddUser]=useState({
        username:'',
        email:'',
    })

    const {username,email}=adduser;




    const handelChange=(e)=>{
        setAddUser({
            ...adduser,
            [e.target.name]: e.target.value
        });

    }


    const hendelSubmit=(e)=>{
       e.preventDefault();
       console.log(adduser)
       props.jacchi(adduser)
       setAddUser({
           username:'',
           email:'',
       })

    }
  return (
      <>
    <form onSubmit={hendelSubmit}>
      <h1>Add User</h1>

        <label>Name: </label>
        <input type='text' value={username} name="username" onChange={handelChange} required ></input><br></br>
        <label>Email: </label>
        <input type='text' value={email} name="email" onChange={handelChange} required ></input><br></br>
        <button className='submit' type='submit'>{props.buttonText}</button>
       
    </form>
  
    </>
  )
}
