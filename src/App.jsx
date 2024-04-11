import Header from './Components/Header/Header'
import Navbar from './Components/NavBar/Navbar'
import AboutMe from './Components/AboutMe/AboutMe'
import Skills from './Components/Skills/Skills'
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
          <h3 id="sobre-mi">About Me</h3>
        </div>
          <AboutMe/>
      </div>
        
        <div className='separador'></div>

      <div id="skills-app">
        <div className="subtittle">
          <h3 id="habilidades">Habilididades</h3>
        </div>
        <div>
            <Skills/>
        </div>
      </div>

      <div className='separador'></div>

      
    </div>
    


    

  )}

export default App
