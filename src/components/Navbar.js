import React, { useState,useEffect } from 'react'
import Translator from './Translator'

function Navbar() {
  const [translator, setTranslator] = useState(false);
  const [sessionStarted, setSessionStarted] = useState(false);
  let userName = localStorage.getItem('n')
  let rol = localStorage.getItem('r')
  let classes = localStorage.getItem('c')?.split(',');
  let reconstructedClasses = [];
  let auxArray = [];
  classes.map((clas,index)=>{
    if(index%2===0){
      auxArray.push(clas);
    } else {
      auxArray.push(clas);
      reconstructedClasses.push(auxArray);
      auxArray = [];
    }
  })
  useEffect(() => {
    if(userName){setSessionStarted(userName)}
  }, [])
  const cerrarSesion = () => {
    localStorage.setItem('n',"");
    localStorage.setItem('t',"");
    localStorage.setItem('r',"");
    localStorage.setItem('testID',"");
    window.location.reload()
  }
  const chooseClasses = (idClasses,name)=>{
    localStorage.setItem('idClasses',idClasses)
    localStorage.setItem('nameClasses',name)
  }
  return (
  <div style={{"position":"relative"}} className='bg-danger'>
    <div style={{"position":"absolute","left":"0px","top":"0px","width":"100%"}} className='text-center pt-1 my-0 '><a className="navbar-brand text-white m-0" href="/"><h3 className='my-0'>UE Boliviano Japonés B</h3></a></div>
    <nav  className="navbar navbar-expand-lg bg-transparent pt-4 pb-1">
      <div className="container-fluid">
        <div onClick={()=>setTranslator(!translator)}>
          <a className="nav-link text-white " href="#">Traductor</a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav text-end">
            {
              rol !== "teacher" &&
            <li className="nav-item">
              <a className="nav-link text-white " href="/test">Tareas</a>
            </li>
            }
            {
              rol === "teacher" &&
              <li className="nav-item">
                <a className="nav-link text-white " href="/users">Usuarios</a>
              </li>
            }
            {
              rol === "teacher" &&
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Mis cursos
                </a>
                <ul class="dropdown-menu">
                  {
                    reconstructedClasses.map( (classess,index)=>{
                      return (
                      <li><a class="dropdown-item" href="/courses" onClick={()=>chooseClasses(classess[0],classess[1])}>{classess[1]}</a></li>    
                      )
                    } )    
                  }
                </ul>
              </li>
            }
            {
              sessionStarted 
              && 
              <li className='nav-item'>
                <a className='nav-link text-white' href='#' onClick={()=>cerrarSesion()}>{userName}(Cerrar Sesión)</a>
              </li>
            }
            {
              rol !== "teacher" &&
              <li className="nav-item">
                <a className="nav-link text-white " href="/infoTeachers">Plantel Docente</a>
              </li>
            }
          </ul>
        </div>
      </div>
      {
        translator 
        &&
        <div className='' style={{"position":"relative"}}>
          <div className='bg-danger z-3 rounded' style={{"position":"absolute","right":"0px","top":"30px","minWidth":"300px"}}>
            <Translator/>
          </div>
        </div>
      }
    </nav>
  </div>
  )
}

export default Navbar