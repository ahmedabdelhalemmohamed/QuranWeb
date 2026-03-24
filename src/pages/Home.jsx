import React from 'react'
import Navbar from '../components/Navbar'
import Quran from './Quran'
import { Link } from 'react-router-dom'
import Hello from '../components/Hello'

const Home = () => {
  return (
    <div className='text-center p-5 sm:p-10 overflow-hidden'>
        <Hello />
        <div className='flex flex-wrap space-y-15 justify-center mt-20 space-x-3 text-white animate-links animate-hover'>
          <div className='animate-hover'>
            <Link to="/quran" className='btn-home '>القرءان</Link>
          </div>
          <div className='animate-hover'>
            <Link to="/randomAyah" className='btn-home'>اختبر حفظك</Link>
          </div>

          <div className='animate-hover'>
            <Link to={`/remembrances/1`} className='btn-home'> أذكار الصباح</Link>
          </div>
          <div className='animate-hover'>
            <Link to={`/remembrances/2`} className='btn-home'>أذكار المساء</Link>
          </div>
          <div className='animate-hover'>
            <Link to="question" className='btn-home'>أسئلة</Link>
          </div>

        </div>
    </div>
  )
}

export default Home