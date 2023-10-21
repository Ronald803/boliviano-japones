import React, { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm'
//import CoursesPage from './CoursesPage'
//import TestPage from './TestPage'

function HomePage() {
  const [logged, setLogged] = useState("")
  useEffect(()=>{
    let sessionRol = localStorage.getItem('r')
    console.log(sessionRol);
      if(sessionRol=="" || sessionRol===null){
        setLogged("")
      }else if(sessionRol=="teacher"){
        setLogged("teacher")
      }else if(sessionRol=="student"){
        setLogged("student")
      }
  },[])
  return (
  <div className=''>
    <div className='mx-auto my-2'>
      {
        logged === ""
        &&
        <div className='mx-auto my-2' style={{"maxWidth":"400px"}}>
          <LoginForm rol={"student"}/>
        </div>
      }
      {/* {
        logged === "teacher"
        &&
        <CoursesPage/>
      }
      {
        logged === "student"
        &&
        <TestPage/>        
      } */}
    </div>
  </div>  
  )
}

export default HomePage