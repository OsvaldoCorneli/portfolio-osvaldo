import Header from './Components/Header/Header'
import Navbar from './Components/NavBar/Navbar'
import AboutMe from './Components/AboutMe/AboutMe'
import Skills from './Components/Skills/Skills'
import './App.css'
import Education from './Components/Education/Education'
import Proyects from './Components/Proyects/Proyects'
import { faWindows } from '@fortawesome/free-brands-svg-icons'


function App() {
  
  window.addEventListener('scroll', function() {
    const targetHeader = document.getElementById('navbar-body');
    const navFixed = document.getElementById('navbar-fixed')
    const anchoVentana = window.innerWidth;
    const LargoVentana = window.innerHeight;
    const bounding = targetHeader.getBoundingClientRect();
    
    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
        navFixed.style.display = "none"
        navFixed.style.position = "none"

    } else {
      if(anchoVentana >= 760){
      navFixed.style.display = "block"
      navFixed.style.position = "Fixed"
      }
      window.addEventListener("orientationchange", function() {     

        if (window.orientation == 0) {

          if(LargoVentana < 760){
            navFixed.style.display = "none"
            navFixed.style.position = "none"
          }
        } 
      });
        
    }
});


 


  return (
    

    
    <div id="app-body">
      <div id="navbar-fixed">
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
