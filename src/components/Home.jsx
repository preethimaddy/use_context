import React from 'react'
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div className='flex flex-col'>
<h1>Home</h1>
<Link to="/dashboard">Your Dashboard * </Link>

<Link to="/recommendations">Your Recommendations * </Link>
<Link to="/podcasts">Your Podcasts * </Link>
    </div>
  )
}

export default Home