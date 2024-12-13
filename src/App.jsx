import Header from "./Components/Header"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Skill from "./Components/Skill"
import Work from "./Components/Work"

const App = () => {
  return (
    <> 
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skill/>
        <Work/>
      </main>
    </>
  )
}

export default App