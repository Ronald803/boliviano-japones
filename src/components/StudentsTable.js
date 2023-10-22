import React from 'react'

function StudentsTable(props) {
    const {students,infoClasses,maxScoreTest} = props;
    console.log(students);
    console.log(infoClasses);
    return (
    <div className='pt-2 mx-auto' style={{"maxWidth":"550px"}}>
        <table className='table table-dark table-bordered'>
            <thead>
                <tr>
                    <th scope='col'><div className='text-center'>#</div></th>
                    <th scope='col'><div className='text-center'>Name</div></th>
                    {
                        infoClasses?.testsAvailable.map( (test,ind)=>{
                            return(
                                <th scope='col'><div className='text-center'>{ind+1}</div></th>
                            )
                        } )
                    }
                    <th scope='col'><div className='text-center'>Total/{maxScoreTest*100} </div></th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map( (student,index)=>{
                        let total = 0;
                        let numberOfTests = 0;
                        return(
                        <tr>
                            <th>
                                <div className='text-center'><span>{index}</span></div>
                            </th>
                            <th>
                                <div className='text-center'><span>{student.name}</span></div>
                            </th>
                            {
                                student?.points.map((point,inde)=>{
                                    total = point.points + total;
                                    numberOfTests++
                                    return(
                                        <th className='text-center'>
                                            <span>{point.points*maxScoreTest}</span>
                                            {point.points!==null&&<button className='btn btn-success ms-4'>R</button>}
                                        </th>                                        
                                    )
                                })
                            }
                            <th>
                                <div className='text-center'><span>{(total/numberOfTests)*maxScoreTest}</span></div>
                            </th>
                        </tr>
                        )
                    } )
                }
            </tbody>
        </table>
    </div>
  )
}

export default StudentsTable