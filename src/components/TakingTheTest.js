import React, { useEffect, useState } from 'react'
import { checkAnswersBackend, getQuestionsToBackend } from '../axiosRequests/testRequests';

function TakingTheTest(props) {
  const [finishedTest, setFinishedTest] = useState(false)
  const [testChecked, setTestChecked] = useState([])
  const {takeTheTest,data} = props;
  let questions = [];
  data.map(question=>{questions.push({...question,studentAnswer:""})})
  console.log(questions);
  const handleChange = (value,questionID,index)=>{
    questions[index].studentAnswer = value;
    console.log(questions);
  }
  const checkTheAnswers = () => {
    console.log(questions);
    checkAnswersBackend(questions)
      .then(answer=>{
        console.log(answer);
        setTestChecked(answer.data.califications)
      })
      .catch(e=>{console.log(e)})
    setFinishedTest(true);
    //takeTheTest(false)
    // TODO: request the answers from backend, compare and update "questions"
  }
    return (
  <div className='pt-2 '>
    <div className=' question-list mx-auto' style={{"maxWidth":"700px"}}>
      {
        finishedTest===false
        ?
        <div>
            {questions.map( (question,index) => (
              <div key={question._id} className='card mb-2 bg-danger'>
                <div className='card-header'>
                  <h5 className='card-body text-white'>{index+1}. {question.question}</h5>
                </div>
                {question.possibleAnswers.map(answer => (
                  <div key={question._id+answer} id='answer' className='form-check card-header'>
                    <input 
                        name={question._id} 
                        type='radio' 
                        id={answer+question._id} 
                        value={answer}
                        onClick={()=>handleChange(answer,question._id,index)}
                        className='form-check-input ms-4'
                    />                                
                    <label for={answer+question.id} className='form-check-label ps-4 text-white'><h5>{answer}</h5></label>
                  </div>
                ))}          
              </div>
            ))}
            <div className='text-center mb-2'>
              <button className='btn btn-warning border border-black' onClick={()=>{checkTheAnswers()}}>Revisar Examen</button>            
            </div>
        </div>
        :
        <div>
            <div className='text-center'>
              <button className='btn btn-warning' onClick={()=>takeTheTest(false)}>Volver</button>
            </div>
            {testChecked.map( question => (
                <div className='card my-2' key={question._id}>
                  <div className={question.result==="Correct"?'bg-success':'bg-danger'}> 
                    <h4 className='card-body text-center'>{question.result}</h4>
                  </div>  
                  <div className='card-header'>
                    <h5>{question.question}</h5>
                  </div>    
                  <div className=' card-header'>
                      {question.possibleAnswers.map(answer => (
                          <h5 
                              className='card-header ps-4'
                              key={question._id+answer}
                              style={
                                  {
                                      backgroundColor: answer===question.answer 
                                      ? 
                                      'lightGreen' 
                                      : 
                                      answer===question.studentAnswer ? 'pink' : 'none'
                                  }
                                  }
                          >
                              {answer}
                          </h5>
                      ))}
                  </div>
                      
                  </div>
                    
                
            ))}  
        </div>
      }
      
    </div>
  </div>
  )
}

export default TakingTheTest