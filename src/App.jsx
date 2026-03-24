import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Quran from './pages/Quran'
import RandomAyah from './pages/RandomAyah'
import Tafsir from './pages/Tafsir'
import Remembrances from './pages/Remembrances'
import Questions from './pages/Questions'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex-1'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/quran' element={<Quran />}/>
          <Route path='/randomAyah' element={<RandomAyah />}/>
          <Route path='/tafsir' element={<Tafsir />}/>
          <Route path='/remembrances/:id' element={<Remembrances />}/>
          <Route path='/question' element={<Questions />}/>
          
        </Routes>

      </div>
      <div className=' bg-indigo-500 w-full text-center text-ayahs text-white pad'>
        <Footer />
      </div>
    </div>
  )
}

export default App