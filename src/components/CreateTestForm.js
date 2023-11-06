import React, { useEffect, useState } from 'react'
//import { getClassesBackend } from '../axiosRequests/classesRequests'
import errorAlert from './alerts/errorAlert'
import { postNewTestBackend } from '../axiosRequests/testRequests'

function CreateTestForm(props) {
  const {infoTest,createTest} = props
  const [newTest, setNewTest] = useState({
    name:"",
    description:"",
    level: "",
    questions:0,
    chapter:"",
    lifeBook:0,
    numberOfAnswers:0,
    testID: "1"
  })
  const handleChange = (e) => {
    setNewTest({
      ...newTest,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    for(const property in newTest){
      if(!newTest[property]){
        return errorAlert("Todos los datos son necesarios para crear un nuevo examen")
      }
    }
    console.log(newTest);
    postNewTestBackend(newTest)
      .then(answer=>{
        console.log(answer);
        console.log(answer.data._id);
        setNewTest({...newTest,testID:answer.data._id})
        console.log(newTest);
        infoTest(newTest);
        createTest(true);
      })
      .catch(e=>{console.log(e)})
  }
  const allLevels = ["1ero Sec.","2do Sec.","3ero Sec.","4to Sec.","5to Sec.","6to Sec."]
  return (
    <div className='card mt-2' style={{"maxWidth":"600px","marginLeft":"auto","marginRight":"auto"}}>
        <div className='card-body'>
            <form onSubmit={handleSubmit}>
                <div className=''>
                    <label className='form-label' htmlFor='name'>Name of the Test:</label>
                    <input className='form-control' type='text' id='name' name='name' onChange={handleChange}/>
                </div>
                <div className=''>
                    <label className='form-label' htmlFor='description'>Description or instrucitons</label>
                    <input className='form-control' type='text' id='description' name='description' onChange={handleChange}/>
                </div>
                <div className='mt-2'>
                    <label htmlFor='level' className='form-label'>Level</label>
                    <select 
                        name='level'
                        id='level'
                        onChange={handleChange}
                        className=' form-control'
                    >
                      <option value="">Elige una opción</option>
                      {
                        allLevels.map((level,index)=>{
                          return ( <option value={level} key={index}>{level}</option> )
                        })
                      }
                    </select>
                </div>
                <div className=''>
                    <label className='form-label' htmlFor='questions'>Number of Questions</label>
                    <input className='form-control' type='number' id='questions' name='questions' onChange={handleChange}/>
                </div>
                <div className=''>
                    <label className='form-label' htmlFor='chapter'>Chapter:</label>
                    <input className='form-control' type='text' id='chapter' name='chapter' onChange={handleChange}/>
                </div>
                <div className=''>
                    <label className='form-label' htmlFor='lifeBook'>Life Book</label>
                    <input className='form-control' type='number' id='lifeBook' name='lifeBook' onChange={handleChange}/>
                </div>
                <div className=''>
                    <label className='form-label' htmlFor='numberOfAnswers'>Number of answers</label>
                    <input className='form-control' type='text' id='numberOfAnswers' name='numberOfAnswers' onChange={handleChange}/>
                </div>
                <div className='text-center'><button className='btn btn-dark'>Crear Nuevo Test</button></div>
            </form>
        </div>
    </div>
  )
}

export default CreateTestForm