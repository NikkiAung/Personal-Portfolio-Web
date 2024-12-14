import Header from "./Components/Header"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Skill from "./Components/Skill"
import Work from "./Components/Work"
import Review from "./Components/Review"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import { ReactLenis } from 'lenis/react'

const App = () => {
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
      </main>
    </ReactLenis>
  )
}

export default App