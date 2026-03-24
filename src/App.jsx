import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Quran from './pages/Quran'
import RandomAyah from './pages/randomAyah'
import Tafsir from './pages/Tafsir'
import Remembrances from './pages/Remembrances'
import Questions from './pages/Questions'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/quran' element={<Quran />}/>
        <Route path='/randomAyah' element={<RandomAyah />}/>
        <Route path='/tafsir' element={<Tafsir />}/>
        <Route path='/remembrances/:id' element={<Remembrances />}/>
        <Route path='/question' element={<Questions />}/>
        
      </Routes>
    </div>
  )
}

export default App