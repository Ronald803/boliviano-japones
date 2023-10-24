import React, { useState } from 'react'
import TestTable from '../components/TestTable'
import TakingTheTest from '../components/TakingTheTest'
function TestPage() {
  const [takeTest, setTakeTest] = useState(false);
  const [questions, setQuestions] = useState([])
  console.log("testPage línea 6");
  return (
    <div>
      {
        takeTest === false ?
        <div>
          <TestTable takeTheTest={setTakeTest} setTheQuestions={setQuestions}/>
        </div>
        :
        <div>
          <TakingTheTest takeTheTest={setTakeTest} data={questions}/>
        </div>
      }
    </div>
  )
}

export default TestPage