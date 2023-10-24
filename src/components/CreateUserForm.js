import React, { useEffect, useState } from 'react'
import errorAlert from './alerts/errorAlert';
import { getClassesBackend } from '../axiosRequests/classesRequests';
import { postStudentBackend } from '../axiosRequests/userRequests';

function CreateUserForm() {
    const [newUser, setNewUser] = useState({
        name:"",
        password:"",
        classes: "",
    });
    const [classesArray, setClassesArray] = useState([])
    useEffect(() => {
        getClasses()
    }, []);
    const getClasses = async(e) => {
        getClassesBackend()
            .then(classes=>{
                console.log(classes.data);
                setClassesArray(classes.data)
            })
            .catch(e=>{ console.log(e) })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(newUser);
        for(const property in newUser){
            if(newUser[property]===""){
                return errorAlert("Todos los datos son necesarios para crear un nuevo usuario")
            }
        }
        postStudentBackend(newUser)
        .then(answer=>{
            console.log(answer.data);
        })
        .catch(e=>{ console.log(e) })
    }
    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }
  return (
    <div className='bg-transparent text-white card border-white rounded'>
        <form
            onSubmit={handleSubmit}
            className='bg-danger bg-opacity-75 text-white card-body rounded'
        >
            <div className='input-group'>
                <span htmlFor='name' className='bg-transparent text-white input-group-text' style={{"minWidth":"110px"}}>Nombre</span>
                <input
                    type='text'
                    id='name'
                    name='name'
                    onChange={handleChange}
                    className='form-control'
                />
            </div>
            <div className='bg-transparent text-white input-group'>
                <span htmlFor='password' className='bg-transparent text-white input-group-text' style={{"minWidth":"110px"}}>Contraseña</span>
                <input
                    type='password'
                    id='password'
                    name='password'
                    onChange={handleChange}
                    className='form-control'
                />
            </div>
            <div className='bg-transparent text-white input-group'>
                <span htmlFor='level' className='bg-transparent text-white input-group-text' style={{"minWidth":"110px"}}>Curso</span>
                <select 
                    name='classes'
                    id='classes'
                    onChange={handleChange}
                    className=' form-select'
                >
                    <option value="">Elige una opción</option>
                    {
                        classesArray?.map((classes)=>{
                            return( <option value={classes._id} key={classes._id}>{classes.level+" "+classes.parallel}</option> )
                        })
                    }
                </select>
            </div>
            <div className='text-center'>
                <button className='mt-2 btn btn-dark'>Guardar Nuevo Estudiante</button>
            </div>
        </form>
    </div>
  )
}

export default CreateUserForm