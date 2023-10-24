import axios from 'axios'

const t = localStorage.getItem('t')
const url = 'https://boliviano-japones-be.vercel.app';
//const url = 'http://localhost:4000';
//const url = 'https://learn-english-backend-1ymtsw2jj-ronald803.vercel.app/'

export function postStudentBackend(student){
    return axios.post(`${url}/api/students`,student)
}

export function loginToBackend(infoUser,rol){
    return axios.post(`${url}/api/auth?rol=${rol}`,infoUser)
}