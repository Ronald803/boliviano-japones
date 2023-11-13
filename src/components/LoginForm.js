import React, { useEffect, useState } from 'react'
import { getStudentsBackend, loginToBackend } from '../axiosRequests/userRequests';
import successAlert from './alerts/successAlert';
import errorAlert from './alerts/errorAlert';

function LoginForm(props) {
    const {rol} = props;
    const [user, setUser] = useState({
        name: "",
        password: ""
    });
    const [allUsers, setAllUsers] = useState([])
    const [filteredUsers, setfilteredUsers] = useState([])
    useEffect(()=>{
        if(rol==="student"){
            getStudentsBackend(rol)
            .then(ans=>{
                setAllUsers(ans.data)
            })
            .catch(e=>console.log(e))
        }
    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
        for(const property in user){
            if(user[property]===""){
                return errorAlert("Todos los datos son necesarios para iniciar sesión"+rol)
            }
        }
        loginToBackend(user,rol)
            .then(answer=>{
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
            .catch(e=>{ console.log(e) })
    }
    const handleChange = (e)=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleClassesIdChange = (e)=>{
        let aux = []
        allUsers.map(user=>{
            if(user.classes == e.target.value){
                aux.push(user.name)
            }
        })
        setfilteredUsers(aux)
    }
  return (
    <div className='bg-transparent  border-white card rounded'>
        <form onSubmit={handleSubmit} className='bg-danger bg-opacity-75  card-body rounded py-4'>
            <div className='py-2'>
                {
                    rol=="student"
                    &&
                    <div>
                        <div className='bg-transparent mb-3'>
                            <label className='bg-transparent  form-label text-white' htmlFor='name'>Curso</label>
                            <select
                                id='classesId'
                                name='classesId'
                                className='form-control'
                                onChange={handleClassesIdChange}
                            >
                                <option value="">Elige el curso al que perteneces</option>
                                <option value="64fa9ace60fb28b890e2b28f">1ro Sec. A</option>
                                <option value="64fa9ad560fb28b890e2b291">1ro Sec. B</option>
                            </select>
                        </div>
                        <div className='bg-transparent  mb-3'>
                            <label className='bg-transparent  form-label text-white' htmlFor='name'>Nombre</label>
                            <select
                                id='name'
                                name='name'
                                className='form-control'
                                onChange={handleChange}
                            >
                                <option value="">Elige tu nombre</option>
                                {
                                    filteredUsers.map((user,id)=>
                                            (<option key={id} value={user}>
                                                    {user}
                                             </option>))
                                }
                            </select>
                        </div>
                    </div>
                }
                {
                    rol==="teacher"
                    &&
                    <div className='bg-transparent  mb-3'>
                        <label className='bg-transparent  form-label text-white' htmlFor='name'>Nombre</label>
                        <select
                                id='name'
                                name='name'
                                className='form-control'
                                onChange={handleChange}
                            >
                                <option value="">Elige tu nombre</option>
                                <option value="Casilda Choque Tapia">Casilda Choque Tapia</option>
                                <option value="Lezly Ivonne Villca Canqui">Lezly Ivonne Villca Canqui</option>
                            </select>
                    </div>
                }
                <div className='bg-transparent  mb-3'>
                    <label className='bg-transparent  form-label text-white' htmlFor='password'>Número de carnet de identidad / Contraseña</label>
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