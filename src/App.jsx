import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Title from './components/Title/Title'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Testimonials from './components/Testimonials/Testimonials'
// import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>

     <div className="container">
      <Title subtitle="our program" title="what we offer"/>
      <Services/>
      <About/>
      <Title subtitle="Gallery" title="our client review"/>
      <Gallery/>
      <Title subtitle="Testimonials" title="What people says"/>
      <Testimonials/>
      <Title subtitle="Contact us" title="get in touch"/>
      <Contact/>
      <Footer/>
      </div>
  
    </div>
  )
}

export default App