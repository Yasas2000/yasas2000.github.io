import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import {
  Research, Projects, Publications, Experience, Education,
  Service, Honors, Skills, Contact, Footer,
} from "./components/Sections.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Research />
        <Projects />
        <Publications />
        <Experience />
        <Education />
        <Service />
        <Honors />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
