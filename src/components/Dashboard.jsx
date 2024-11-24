import React from 'react'
import { UserContext } from '../context/UserContext'
import { useContext } from "react"

const Dashboard = () => {
    const user = useContext(UserContext);
  return (
    <>
    <h3>Hello {user}</h3>
        <h5>Your Dashboard</h5>
        
        
        </>
   
  )
}

export default Dashboard