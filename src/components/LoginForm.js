import React, { useState } from 'react'
import { loginToBackend } from '../axiosRequests/userRequests';
import successAlert from './alerts/successAlert';
import errorAlert from './alerts/errorAlert';

function LoginForm(props) {
    const {rol} = props;
    const [user, setUser] = useState({
        name: "",
        password: ""
    });
    const handleSubmit = async(e)=>{
        e.preventDefault();
        for(const property in user){
            if(user[property]===""){
                return errorAlert("Todos los datos son necesarios para iniciar sesión"+rol)
            }
        }
        console.log(user);
        loginToBackend(user,rol)
            .then(answer=>{
                console.log(answer.data);
                if(answer.data.msg === "Incorrect information"){
                    errorAlert("Datos incorrectos")
                }else{
                    localStorage.setItem('t',answer.data.token);
                    localStorage.setItem('n',answer.data.name);
                    localStorage.setItem('r',rol);
                    localStorage.setItem('c',answer.data.classes);
                    successAlert(`Bienvenido ${answer.data.name}`);
                    setTimeout(() => {
                        window.location.reload()
                    }, 2500);
                }
            })
            .catch(e=>{
                console.log(e);
            })
    }
    const handleChange = (e)=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div className='bg-transparent  border-white card rounded'>
        <form onSubmit={handleSubmit} className='bg-danger bg-opacity-75  card-body rounded py-4'>
            <div className='py-2'>
                <div className='bg-transparent  mb-3'>
                    <label className='bg-transparent  form-label text-white' htmlFor='name'>Nombre</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        onChange={handleChange}
                    />
                </div>
                <div className='bg-transparent  mb-3'>
                    <label className='bg-transparent  form-label text-white' htmlFor='password'>Contraseña</label>
                    <input
                        className='form-control'
                        type='password'
                        id='password'
                        name='password'
                        onChange={handleChange}
                    />
                </div>
                <div className='text-center'>
                    <button className='btn btn-dark'>Login</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default LoginForm