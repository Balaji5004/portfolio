import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Home from "./Components/Home.js";
import NavBar from "./Components/NavBar.js";
import Portfolio from "./Components/Portfolio.js";
import Skills from "./Components/Skills.js";
import SocialLinks from "./Components/SocialLinks.js";


function App() {
  return (
    <div>
     <NavBar/>
     <Home />
     <About />  
    <Portfolio />
     <Skills/>
     <Contact />

     <SocialLinks /> 
    </div>
  );
}

export default App;
