import React from 'react'
import Navbar from '../component/navbar'
import Register from '../component/register'
import Login from '../component/login'
const home = () => {
  return (
    <div>
      <Navbar/>
      <Register/>
      <Login/>
    </div>
  )
}

export default home
