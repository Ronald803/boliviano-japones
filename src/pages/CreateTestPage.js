import React, { useState } from 'react'
import CreateTestForm from '../components/CreateTestForm'
import CreateQuestionsForm from '../components/CreateQuestionsForm'

function CreateTestPage() {
  console.log("create test page");
  const [creatingQuestions, setCreatingQuestions] = useState(false)  
  const [testInfoForm, setTestInforForm] = useState(false)
    return (
    <div>
        {
          creatingQuestions?
          <CreateQuestionsForm data={testInfoForm}/>
          :
          <CreateTestForm infoTest={setTestInforForm} createTest={setCreatingQuestions}/>
        }
    </div>
  )
}

export default CreateTestPage