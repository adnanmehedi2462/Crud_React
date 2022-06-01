import React ,{useEffect, useState}from 'react';
import './App.css';
import { UserForm } from './components/UserForm';
const Url="https://rest-api-without-db.herokuapp.com/users/";
const Messageall=({message})=>{
  return <h1>{message}</h1>
  
}

function App() {
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);
  const [user,setUser]=useState('');
  const [modelisopen,setModelisopen]=useState(false)
  const [message,setMessage]=useState('')
  const AllUsers=()=>{
    fetch(Url)
    .then((res)=>{
      if (!res.ok){
        throw Error("Could not Fatch data...!!!") ;
      }
      return res.json();
      
  
    })
    .then ((data)=>{
      setUser(data.users)
    
      setLoading(false)
      console.log(data.users)
  
    })
  
    .catch((err)=>{
      setError(err.message)
  
    })
    .finally(()=>{
      setLoading(false)
    })
  }


useEffect(()=>{
  
  AllUsers();

},[])


const HandelDelete=(id)=>{
 

alert ("Are You sure!!!")

  fetch(Url + `/${id}`,{
    method:"DELETE"
  })
  .then((res)=>{
    if (!res.ok){
      throw Error("Could not Delete Data!!!") ;
    }
    AllUsers();
    setModelisopen(true)
    setMessage("User Deleted Successfully....!!!")
    

  })


  .catch((err)=>{
    setError(err.message)

  })



}
const niyeAso=(asi)=>{
  fetch(Url,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"

    },
    body:JSON.stringify(asi)

    
  })
  .then((res)=>{
    if (res.status===201){
      AllUsers();
      setModelisopen(true)
      setMessage("User Created Successfully....!!!")
    }
    else{
      throw new Error("could not Created !!!!")
    }
    
    

  })


  .catch((err)=>{
    setError(err.message)

  })
}


  return (
  <>
  <UserForm buttonText={"Add user"} jacchi={niyeAso} />
  <p style={{'textAlign':'center','color':'green'}}><Messageall message={message} /></p>
  <h1>{loading && <b>Loading.....</b> }</h1>
  <h1>{error}</h1>
 
 {user && user.map((all)=>{
    const {id,username,email}=all;
    return (
      <section key={id}>
        <h1>{username}</h1>
        <h3>{email}</h3>
        <div className='allbtn'>
        <button className='btn'><i class="fa fa-edit"></i></button>
        <button className='btn2' onClick={()=>{HandelDelete(id)}}><i class="fa fa-trash"></i></button>
        </div>
       
      </section>
    )

  })}
 
 
  </>
  );
}

export default App;
