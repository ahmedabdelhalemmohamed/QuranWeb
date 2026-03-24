import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>

      <nav className='bg-indigo-500 p-4 text-white shadow-2xl sticky z-50'>
        {location.pathname === '/' ? 
        <div className='font-cairo text-4xl'>القرءان</div>
        : 
        <div className='flex justify-between items-center'>
          <div className='font-cairo text-4xl'>القرءان</div>
          <div>
            <ul className='font-cairo text-2xl flex space-x-3 hidden sm:flex'>
              <li className='btn'> <Link to="/">الصفحة الرئيسية</Link></li>
              <li className='btn'> <Link to="/tafsir">تفسير</Link></li>  
              <li className='btn'>من نحن</li>

            </ul>  
          </div> 
          <div className='sm:hidden'>

            {
              openMenu ?
              <X onClick={() => setOpenMenu(prev => !prev)}/>
              :
              <Menu className='sm:hidden' onClick={() => setOpenMenu(prev => !prev)}/>
            }
          </div>
        </div>
        }
      </nav>

      {
        openMenu ? 
        <div className='animate-menu fixed z-50 w-100'>
            <ul className='font-cairo text-2xl flex flex-col space-y-3 bg-indigo-500 min-h-75 text-white sm:hidden text-center'>
              <li className='btn' onClick={() => setOpenMenu(prev => !prev)}> <Link to="/">الصفحة الرئيسية</Link></li>
              <li className='btn' onClick={() => setOpenMenu(prev => !prev)}>تفسير</li>  
              <li className='btn' onClick={() => setOpenMenu(prev => !prev)}>من نحن</li>
            </ul>  
        </div> 
        :
        <div></div>
      }
    </div>
  )
}

export default Navbar