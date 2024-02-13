import Nav from './components/nav'
import './App.css'
import Hero from './components/hero'
import Main from './components/main'
import Contact from './components/contact'
import Scroll from './components/scroll'

function App() {


  return (
    <>
     <div className='back'>
      <Nav/>
      <Hero/>
      <Main/>
      <Contact/>
      <Scroll/>
      </div>
    </>
  )
}

export default App
