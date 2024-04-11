import Header from './Components/Header/Header'
import Navbar from './Components/NavBar/Navbar'
import AboutMe from './Components/AboutMe/AboutMe'
import './App.css'

function App() {
  


  return (
    
    <div id="app-body">
      <div id="header-app"> 
      <Header/>  
      <Navbar/>   
      </div>
      <div className='separador'></div>
      <div id="aboutme-app">
      <div className="subtittle">
        <h3>About Me</h3>
      </div>
          <AboutMe/>
      </div>
      <div className='separador'></div>
    </div>

    

      )
}

export default App
