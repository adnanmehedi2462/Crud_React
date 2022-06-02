import React, { useEffect, useState } from 'react'
import propTypes from "prop-types";
export const UserForm = ({buttonText,jacchi,selectUser}) => {
    const [adduser,setAddUser]=useState({
        username:'',
        email:'',
    })

    const {username,email}=adduser;


   useEffect(()=>{
    setAddUser({
      username: selectUser.username,
      email:selectUser.email,
    })
      
   },[selectUser])




    const handelChange=(e)=>{
        setAddUser({
            ...adduser,
            [e.target.name]: e.target.value
        });

    }


    const hendelSubmit=(e)=>{
       e.preventDefault();
       console.log(adduser)
       jacchi(adduser)
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
        <button className='submit' type='submit'>{buttonText}</button>
       
    </form>
  
    </>
  )
}

// very very inportemt///////////////////////////////////////


UserForm.defaultProps={
  selectUser : {
    username : '',
    email: '',
  }
}



// vip/////////////////////////////