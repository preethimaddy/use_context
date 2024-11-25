import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
const Podcasts = () => {
  const user = useContext(UserContext)
  return (
    <div>
    <h3>Hello {user}</h3>
    <h5>Your Podcasts</h5>
</div>
  )
}

export default Podcasts