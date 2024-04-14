import React from 'react'
import './user.css'
function User() {
  return (
    <div className='user d-flex align-items-center justify-content-center'>
      <div className="admin d-block m-1">
        <h5>Rahul Kumar Gupta</h5>
        <h5 className='admin2'>Admin</h5>
      </div>
      <div className="user-img d-flex align-items-center">
      <img src="./user.svg" alt="" />
      </div>
    </div>
  )
}

export default User
