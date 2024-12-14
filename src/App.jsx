import Header from "./Components/Header"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Skill from "./Components/Skill"
import Work from "./Components/Work"
import Review from "./Components/Review"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import { ReactLenis } from 'lenis/react'
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import DockDemo from './Components/DockDemo'

gsap.registerPlugin(useGSAP,ScrollTrigger);

const App = () => { 
  useGSAP(()=> {
    const elements = gsap.utils.toArray('.reveal-up');
    elements.forEach((element)=> {
      gsap.to(element, {
        scrollTrigger : {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
          // markers: true
        },
        y:0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    })
  })
  return (
    <ReactLenis root> 
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skill/>
        <Work/>
        <Review/>
        <Contact/>
        <Footer/>
        <div style={{
          position: 'fixed',
          bottom: 20,
          left: 0,
          width: '100%',
          zIndex: 1000
        }}>
          <DockDemo />
        </div>
      </main>
    </ReactLenis>
  )
}

export default App