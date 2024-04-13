import Header from './Components/Header/Header'
import Navbar from './Components/NavBar/Navbar'
import AboutMe from './Components/AboutMe/AboutMe'
import Skills from './Components/Skills/Skills'
import './App.css'
import Education from './Components/Education/Education'
import Proyects from './Components/Proyects/Proyects'


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
          <h3 id="aboutMe">About Me</h3>
        </div>
          <AboutMe/>
      </div>
        
        <div className='separador'></div>

      <div id="skills-app">
        <div className="subtittle">
          <h3 id="skills">Habilididades</h3>
        </div>
        <div>
            <Skills/>
        </div>
      </div>

      <div className='separador'></div>

      <div id="education-app">
      <div className="subtittle">
          <h3 id="education">Educacion</h3>
        </div>
        <Education/>
      </div>
    
      <div className='separador'></div>

      <div id="proyects-app">
      <div className="subtittle">
          <h3 id="projects">Proyectos</h3>
        </div>
         <Proyects/>
      </div>
      
    </div>
    


    

  )}

export default App
