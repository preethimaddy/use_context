import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
const Recommendations = () => {
  const user = useContext(UserContext)
  return (
  <div>
      <h3>Hello {user}</h3>
      <h5>Your Recommendations</h5>
  </div>
  )
}

export default Recommendations