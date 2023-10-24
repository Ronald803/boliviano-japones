import React from 'react'
import CreateUserForm from '../components/CreateUserForm'

function UserManagementPage() {
  return (
    <div className='my-2'>
        <div style={{"marginLeft":"auto","marginRight":"auto","maxWidth":"600px"}}  >
          <CreateUserForm/>
        </div>
    </div>
  )
}

export default UserManagementPage