import React from 'react'

function CoursesTable(props) {
    const {data} = props;
    console.log(data);
  return (
<div className='pt-2 mx-auto' style={{"maxWidth":"550px"}}>
        <table className='table table-dark table-bordered'>
            <thead>
                <tr>
                    <th scope='col'><div className='text-center'>#</div></th>
                    <th scope='col'><div className='text-center'>Nivel</div></th>                    
                    <th scope='col'><div className='text-center'>Paralelo</div></th>                                       
                    <th scope='col'><div className='text-center'></div></th>                   
                </tr>
            </thead>
            <tbody>
                {
                    data.map( (classes,index)=>{
                        return(
                        <tr>
                            <th>
                                <div className='text-center'><span>{index}</span></div>
                            </th>
                            <th>
                                <div className='text-center'><span>{classes.level}</span></div>
                            </th>                            
                            <th>
                                <div className='text-center'><span>{classes.parallel}</span></div>
                            </th>                
                            <th>
                                <div className='text-center'><button className='btn btn-secondary'>Ver Examen</button></div>
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

export default CoursesTable