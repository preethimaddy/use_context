import React from 'react'
import { Link } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
const Home = () => {

  const[ user, setUser ]= useContext(UserContext)
  return (
    <div className='flex flex-col items-center gap-4'>
      <div>
      <h1 className='text-xl mt-4 mb-2'>{user}'s Home</h1>
      <button className='text-sm border bg-blue-500 text-white
      py-1 px-2 rounded-lg'
      onClick={()=> setUser("Kajol")}
      type='button'>Edit Name</button>
      </div>

<Link to="/dashboard"
className='text-indigo-500 hover:opacity-80'>Your Dashboard </Link>

<Link to="/recommendations"
className='text-indigo-500 hover:opacity-80'>Your Recommendations </Link>
<Link to="/podcasts"
className='text-indigo-500 hover:opacity-80'>Your Podcasts </Link>
    </div>
  )
}

export default Home