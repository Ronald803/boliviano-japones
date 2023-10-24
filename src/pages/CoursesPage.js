import React, { useEffect, useState } from 'react'
import { getSpecificClassBackend } from '../axiosRequests/classesRequests';
import StudentsTable from '../components/StudentsTable';
import TestTable from '../components/TestTable';

function CoursesPage() {
  const [teacherClasses, setTeacherClasses] = useState()  
  const [students, setStudents] = useState([])  ;
  const [category, setCategory] = useState("students")
  const nameClasses = localStorage.getItem('nameClasses');
  const [maxScore, setMaxScore] = useState(1)
  useEffect(() => {
      getSpecificClassBackend()
        .then(answer=>{
          console.log(answer);
          setTeacherClasses(answer.data.infoClasses)
          setStudents(answer.data.students)
        })
        .catch(e=>console.log(e))
    }, [])
    console.log(teacherClasses);
  return (
    <div>
      <div className='bg-dark bg-opacity-75 text-white'>
        <div className='row text-center py-1' >
          <div className='col pt-3' ><button className='btn btn-danger' onClick={()=>setCategory("students")}>Estudiantes</button></div>
          <div className='col text-center pt-2'>
            <h4>{nameClasses}</h4>
          </div>
          <div className='col pt-3' ><button className='btn btn-danger' onClick={()=>setCategory("tests")}>Examenes</button></div>
        </div>
      </div>
      {
        category === "students" ?
        <div>
          <div className='row text-center'>
            <div className='col'><button className='btn btn-success' onClick={()=>setMaxScore(1)}>Sobre 100</button></div>
            <div className='col'><button className='btn btn-success' onClick={()=>setMaxScore(0.35)}>Sobre 35</button></div>
          </div>
          <StudentsTable students={students} infoClasses={teacherClasses} maxScoreTest={maxScore}/>
        </div>
        :
        <div>
          <TestTable infoClasses={teacherClasses}/>
        </div>
      }
    </div>
  )
}

export default CoursesPage