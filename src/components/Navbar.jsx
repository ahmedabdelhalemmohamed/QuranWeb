import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>

      <nav className='bg-indigo-500 p-3 text-white shadow-2xl sticky z-50'>
        {location.pathname === '/' ? 
        <div className='font-cairo text-4xl'>القرءان</div>
        : 
        <div className='flex justify-between items-center'>
          <div className='font-cairo text-4xl sm:mt-5'>القرءان</div>
          <div>
            <ul className='font-cairo text-2xl flex space-x-3 hidden sm:flex'>
              <li className='btn-nav'> <Link to="/">الصفحة الرئيسية</Link></li>
              <li className='btn-nav'> <Link to="/tafsir">تفسير</Link></li>  

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
            <ul className='font-cairo text-2xl flex flex-col space-y-3 bg-indigo-500 min-h-56 text-white sm:hidden text-center'>
              <li className='btn-nav' onClick={() => setOpenMenu(prev => !prev)}> <Link to="/">الصفحة الرئيسية</Link></li>
              <li className='btn-nav' onClick={() => setOpenMenu(prev => !prev)}>تفسير</li>  
            </ul>  
        </div> 
        :
        <div></div>
      }
    </div>
  )
}

export default Navbar