//import { useState } from 'react'
import { Header } from './component/Header'
import { Hero } from './component/Hero'
import { Clients } from './component/Clients'
import { Comunity } from './component/Comunity'
import { Showcase1 } from './component/Showcase-1'
import { Showcase2 } from './component/Showcase-2'
import { Stats } from './component/Stats'
import { Testimonials } from './component/Testimonial'
import { Blog } from './component/Blog'
import { CTA } from './component/CTA'
import { Footer } from './component/Footer'
import { ScrollTopButton } from './component/ScrollToTopBtn'
import './index.css'

function App() {

  return (
    <>
      <div className="wrapper">
          <Header />
          <Hero />  
          <Clients />
          <Comunity />
          <Showcase1 />
          <Stats />
          <Showcase2 />
          <Testimonials />
          <Blog />
          <CTA />
          <Footer />
      </div>
      <ScrollTopButton />
    </>
  )
}

export default App
