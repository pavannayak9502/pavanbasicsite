import Header from "./Examples/Header/Header";
import About from "./Examples/About/About";
import Projects from "./Examples/Projects/Projects";
import Skills from "./Examples/Skills/Skills";
import Contact from "./Examples/Contact/Contact";
import Footer from "./Examples/Footer/Footer";
import "./App.css";

let App=()=>{
  return(
    <div className="App">
      <Header />

      <main>
        
      <About />
      <Projects />
      <Skills />
      <Contact />

      </main>

      <Footer/>

    </div>
  );
};
export default App;