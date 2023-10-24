import axios from 'axios'

const t = localStorage.getItem('t')
//const url = 'http://localhost:4000';
const url = 'https://boliviano-japones-be.vercel.app'

export function getClassesBackend(){
    return axios.get(`${url}/api/classes/all`,{headers:{'x-token': t}})
}

export function getSpecificClassBackend(){
    const idClasses = localStorage.getItem('idClasses')
    return axios.get(`${url}/api/classes/${idClasses}`,{headers:{'x-token': t}})
}