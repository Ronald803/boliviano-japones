import React from 'react'
import successAlert from './alerts/successAlert'
import { saveQuestionsBackend } from '../axiosRequests/testRequests';
import { useNavigate } from 'react-router-dom';

function CreateQuestionsForm(props) {
  const navigate = useNavigate()
  const { data } = props;
  let questions = [];
  let arrayPossibleAnswers = [];
  for(let i=0; i<data.numberOfAnswers ; i++){arrayPossibleAnswers.push("")}
  for (let i = 0; i < data.questions; i++) { questions.push(
    {
    question: "",
    possibleAnswers: [...arrayPossibleAnswers],
    test: data.testID,
    answer: ""
    }) };
  console.log(questions);
  const handleSubmit = async (e) => {
    console.log("se realizó un Submit");
    console.log(questions)
    await saveQuestionsBackend(questions)
        .then( answer => {
            answer.map( q=>{
                console.log(q.data);
            })
            successAlert("Pregunta(s) registrada(s) correctamente")
            setTimeout(()=>{
                navigate('/')
            },2000)
    
        })
        .catch( e => {console.log(e)})
}
const handleAllChanges = (value,i,j,k) => {
  k===undefined ?  questions[i][j] = value : questions[i][j][k] = value;
}  
  return (
      <div className='container mt-3'>
      <div className='row g-3'>
      {
          questions.map( (q,i) => (
              <div className='col-12 col-md-6 col-lg-4' key={i}>
                  <div className='card' >
                  <div className='card-body'>
                      <label className='form-label' htmlFor='question'>Question {i+1}:</label>
                      <textarea 
                          id='question'
                          name='question'
                          className='form-control'
                          onChange={(e)=>handleAllChanges(e.target.value,i,e.target.name)}
                      />
                      <label>Possible Answers: </label>
                      {q.possibleAnswers.map( (a,j) => (
                          <div key={i+j+10}>
                              <input
                                  name='possibleAnswers'
                                  type='text'
                                  className='form-control form-control-sm'
                                  onChange={(e)=>handleAllChanges(e.target.value,i,e.target.name,j)}
                              />
                          </div>
                      ))}
                      <label className='form-label' htmlFor='answer'>Correct Answer:</label>
                      <input 
                          id='answer' 
                          name='answer' 
                          type='text'
                          className='form-control' 
                          onChange={(e)=>handleAllChanges(e.target.value,i,e.target.name)}
                      />
                  </div>                            
              </div>
              </div>
          ))
      }
      <button className='btn btn-dark' onClick={handleSubmit}>Save Question</button>

      </div>
  </div>
  )
}

export default CreateQuestionsForm