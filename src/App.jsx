import Header from './Components/Header/Header'
import Navbar from './Components/NavBar/Navbar'
import AboutMe from './Components/AboutMe/AboutMe'
import Skills from './Components/Skills/Skills'
import './App.css'
import Education from './Components/Education/Education'
import Proyects from './Components/Proyects/Proyects'
import Contact from './Components/Contact/Contact'

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



function navegar(id){
  let destino = 0;
  switch(id){
      case 1:
          destino = document.getElementById("aboutMe").offsetTop;    
      break;

      case 2:
          destino = document.getElementById("skills").offsetTop;
      break;

      case 3:
          destino = document.getElementById("education").offsetTop;
      break;

      case 4:
        destino = document.getElementById("projects").offsetTop;            
      break;

      case 5:      
          destino = document.getElementById("contact").offsetTop;         
      break

      default:
      break;

      
  }
  window.scrollTo({
      top: destino,
      behavior: 'smooth'
  });

}


  return (
    

    
    <div id="app-body">
      <div id="navbar-fixed">
      <ul>
            <a onClick={()=>{navegar(1)}}><li>Sobre mi</li></a>
            <a onClick={()=>{navegar(4)}}><li>Proyectos</li></a>
            <a onClick={()=>{navegar(3)}}><li>Educacion</li></a>
            <a id="botonSkills" onClick={()=>{navegar(2)}}><li>Habilidades</li></a>
            <a onClick={()=>{navegar(5)}}><li>Contacto</li></a>  
        </ul>
      </div> 
      <div id="header-app"> 
      <Header/>  
      <Navbar functionMenu={navegar} />   
      </div>
    
        <div className='separador'></div>
      
      <div id="aboutme-app">
        <div className="subtittle">
          <h3 id="aboutMe">Sobre mi</h3>
        </div>
          <AboutMe/>
      </div>
        
        <div className='separador'></div>

        <div id="proyects-app">
          <div className="subtittle">
            <h3 id="projects">Proyectos</h3>
          </div>
           <Proyects/>
        </div>

      <div className='separador'></div>

      <div id="education-app">
      <div className="subtittle">
          <h3 id="education">Educacion</h3>
        </div>
        <Education/>
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
      
    
      <div id="contact-app">
      <div className="subtittle">
          <h3 id="contact">Contacto</h3>
        </div>
         <Contact/>
      </div>

      <div className='separador'></div>
    
    <footer>

    <div>
    <h6>© Desarrollado por Osvaldo Matias Corneli Nassif | 2024 </h6>
    <h6>Ultima actualizacion Abril 2024</h6>
    </div>


    </footer>
    
    
    
    
    </div>
    
    


    

  )}

export default App
