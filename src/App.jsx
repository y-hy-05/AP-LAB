import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/home'
import { Main } from './layout/mainLayout'
import { Services } from './pages/Services/services'
import { About } from './pages/About/about'
import { Blogs } from './pages/Blogs/blogs'
import { Contact } from './pages/Contact/contact'
import { Bellabes } from './pages/Services/pages/Bellabes'
import { Coaching } from './pages/Services/pages/Coaching'
import { Support } from './pages/Services/pages/Support'
import ScrollToTop from './lib/hooks/Scroll'

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/bellabes' element={<Bellabes />} />
          <Route path='/services/coaching' element={<Coaching />} />
          <Route path='/services/support' element={<Support />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
        </Route> */}
      </Routes>
    </>
  )
}

export default App
