import Header from './Components/Header/Header'
import Navbar from './Components/NavBar/Navbar'
import AboutMe from './Components/AboutMe/AboutMe'
import Skills from './Components/Skills/Skills'
import './App.css'
import Education from './Components/Education/Education'
import Proyects from './Components/Proyects/Proyects'


function App() {
  
  window.addEventListener('scroll', function() {
    const targetHeader = document.getElementById('navbar-body');
    const navFixed = document.getElementById('navbar-fixed')

    const bounding = targetHeader.getBoundingClientRect();

    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
        console.log("en la pantalla")
        navFixed.style.display = "none"
    } else {
      console.log("fuera de pantalla")
      navFixed.style.display = "block"
        
        
    }
});



  return (
    

    
    <div id="app-body">
      <div id="navbar-fixed" style={{ position: 'fixed' }}>
      <ul>
            <a href="#aboutMe"><li>Sobre mi</li></a>
            <a id="botonSkills" href="#skills"><li>Habilidades</li></a>
            <a href="#education"><li>Educacion</li></a>
            <a href="#projects"><li>Proyectos</li></a>
            <a href="#"><li>Contacto</li></a>  
        </ul>
      </div> 
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
          <h3 id="skills">Habilidades</h3>
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
