import React from 'react'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  return (
    <nav>{location.pathname === '/' ? <div>Home</div>: <div>other app</div>}</nav>
  )
}

export default Navbar