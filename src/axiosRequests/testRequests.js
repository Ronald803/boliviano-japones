import axios from 'axios'

const t = localStorage.getItem('t')
const r = localStorage.getItem('r')
const url = 'https://boliviano-japones-be.vercel.app';
//const url = 'http://localhost:4000';

export function getExamsBackend(){
    return axios.get(`${url}/api/tests/${r}`,{headers:{'x-token': t}})
}

export function getQuestionsToBackend(idTest,rol){
    return axios.get(`${url}/api/questions/${rol}?test=${idTest}`,{headers:{'x-token': t}})
}

export function postNewTestBackend(newTest){
    return axios.post(`${url}/api/tests`,newTest,{headers:{'x-token': t}})
}

export async function saveQuestionsBackend(newQuestions){
    console.log(newQuestions);
    let questionsAddedToBackend = await Promise.all(
        newQuestions.map(q=>{
            return axios.post(`${url}/api/questions`,q,{headers:{'x-token': t}})
        })
    )
    return questionsAddedToBackend
}

export function checkAnswersBackend(questions){
    let test = questions
    return axios.put(`${url}/api/questions`,{test},{headers:{'x-token': t}})
}

export function enableTestBackend(idTest,idClasses){
    return axios.put(`${url}/api/classes/tests`,{idClasses,idTest},{headers:{'x-token': t}})
}