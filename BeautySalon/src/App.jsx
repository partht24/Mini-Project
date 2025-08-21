import React, { useEffect } from 'react'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import About from './Component/About'
import Services from './Component/Services'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

const App = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <Navbar/>
      <Banner/>
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App