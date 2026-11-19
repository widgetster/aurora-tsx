import './App.css'
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router';
import { Home } from './pages/home/Home';
import { About } from './About'
import { Services } from './Services'
import { Portfolio } from './Portfolio'
import { Blog } from './Blog'
import { Contact } from './Contact'


function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  )
}

export default App
