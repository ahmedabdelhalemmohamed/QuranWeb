import React from 'react'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className='bg-indigo-500 p-4 text-white shadow-2xl sticky inset-0'>{location.pathname === '/' ? <div className='font-cairo text-4xl'>القرءان</div>: <div>other app</div>}</nav>
  )
}

export default Navbar