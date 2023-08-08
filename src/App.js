
import './App.css';
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Studies from './components/studies/Studies'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <Projects/>
      <Skills/>
      <Studies/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
