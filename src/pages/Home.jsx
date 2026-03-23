import React from 'react'
import Navbar from '../components/Navbar'
import Quran from './Quran'
import { Link } from 'react-router-dom'
import Hello from '../components/Hello'

const Home = () => {
  return (
    <div className='text-center p-5 sm:p-10 overflow-hidden'>
        <Hello />
        <div className='flex justify-center mt-10 space-x-3 text-white animate-links'>
          <div>
            <Link to="/quran" className='cursor-pointer mt-5  font-cairo text-2xl py-5 px-10 bg-slate-500 hover:bg-slate-400 transition-colors rounded-lg'>القرءان</Link>
          </div>
          <div>
            <Link to="/randomAyah" className='cursor-pointer mt-5  font-cairo text-2xl py-5 px-10 bg-slate-500 hover:bg-slate-400 transition-colors rounded-lg'>اختبر حفظك</Link>
          </div>

        </div>
    </div>
  )
}

export default Home