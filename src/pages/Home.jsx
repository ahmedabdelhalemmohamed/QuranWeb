import React from 'react'
import Navbar from '../components/Navbar'
import Quran from '../components/Quran'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to="/quran" className='cursor-pointer'>Quran</Link>
    </div>
  )
}

export default Home