import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Quran from './pages/Quran'
import RandomAyah from './pages/randomAyah'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/quran' element={<Quran />}/>
        <Route path='/randomAyah' element={<RandomAyah />}/>
      </Routes>
    </div>
  )
}

export default App