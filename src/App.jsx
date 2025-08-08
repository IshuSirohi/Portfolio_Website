import { useEffect } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navbar from "./components/NavBar";
import VoiceButton from "./components/VoiceButton";
import './index.css';

function App() {
  const handleCommand = (command) => {
    const cmd = command.toLowerCase();

    if (cmd.includes("home")) scrollToSection("home");
    else if (cmd.includes("about")) scrollToSection("about");
    else if (cmd.includes("project")) scrollToSection("projects");
    else if (cmd.includes("contact")) scrollToSection("contact");
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans scroll-smooth">
      <Navbar />
      <VoiceButton onCommand={handleCommand} />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

export default App;
