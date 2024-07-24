import React from 'react'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Jobs from './pages/Jobs'
import SingleJobPage from './pages/SingleJobPage'

const App = () => {
  return (
    <>
     <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/jobs' element={<Jobs />} />
       <Route path='/job/:id' element={<SingleJobPage />} />
     </Routes>
    </>
  )
}

export default App