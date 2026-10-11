import { useState } from 'react';
import CursorGlow from './components/common/CursorGlow';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ProjectModal from './components/layout/ProjectModal';
import Hero from './components/sections/Hero';
import VisualDrift from './components/sections/VisualDrift';
import About from './components/sections/About';
import TickerBand from './components/sections/TickerBand';
import Projects from './components/sections/Projects';
import ToolsLogos from './components/sections/ToolsLogos';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="app-root">
      <CursorGlow />
      <Navbar />

      <main className="main-content">
        <Hero />
        <VisualDrift />
        <About />
        <TickerBand />
        <Projects onSelectProject={setSelectedProject} />
        <ToolsLogos />
        <Contact />
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

export default App;
