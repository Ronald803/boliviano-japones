import React from 'react'

function TestDemoTeacher(props) {
    const {test,testName} = props
  return (
    <div className='mb-2'>
        <div className='row mx-2'>
        {test.map( question => (
            <div className='card col-lg-3 col-md-4 col-sm-5 mx-1' key={question._id}>
              <div className='card-header'>
                <h7>{question.question}</h7>
              </div>    
              <div className=''>
                  {question.possibleAnswers.map(answer => (
                      <h6 
                          className='ps-4'
                          key={question._id+answer}
                          style={{
                                  backgroundColor: answer===question.answer 
                                  && 
                                  'lightGreen' 
                                }}
                      >
                          {answer}
                      </h6>
                  ))}
              </div>                  
            </div>
        ))}  
        </div>
    </div>
  )
}

export default TestDemoTeacher