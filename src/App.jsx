import Header from "./Components/Header"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Skill from "./Components/Skill"
import Work from "./Components/Work"
import Review from "./Components/Review"
import Contact from "./Components/Contact"

const App = () => {
  return (
    <> 
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skill/>
        <Work/>
        <Review/>
        <Contact/>
      </main>
    </>
  )
}

export default App