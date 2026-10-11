import { useState, useMemo } from 'react';
import { Sparkles, Eye } from 'lucide-react';
import ChromaGrid from '../common/ChromaGrid';
import { portfolioCategories, portfolioProjects } from '../../data/mockData';
import './Projects.css';

const Projects = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return portfolioProjects;
    return portfolioProjects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const chromaItems = useMemo(() => {
    return filteredProjects.map(proj => ({
      image: proj.image,
      title: proj.title,
      subtitle: proj.subtitle,
      accent: proj.accent,
      onClick: () => onSelectProject(proj)
    }));
  }, [filteredProjects, onSelectProject]);

  return (
    <section className="projects-section" id="proyectos">
      <div className="container">
        <div className="projects-header">
          <span className="section-tag">
            <Sparkles size={12} />
            Selección Curada
          </span>
          <h2 className="projects-title">Casos de Estudio & Proyectos</h2>
          <p className="projects-desc">
            Sistemas visuales concebidos desde la investigación estratégica hasta el detalle milimétrico de
            producción física y digital.
          </p>
        </div>

        {/* Filtros de categoría */}
        <div className="category-filter-bar" role="tablist" aria-label="Filtrar por categoría">
          {portfolioCategories.map(cat => (
            <button
              key={cat.id}
              type="button"
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              role="tab"
              aria-selected={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ChromaGrid de React Bits con Spotlight reactivo */}
        <div className="projects-chroma-wrap">
          <ChromaGrid
            items={chromaItems}
            columns={3}
            minCardWidth={280}
            gap={18}
            radius={280}
            softness={0.65}
            damping={0.45}
            grayscale={0.9}
            dim={0.15}
            glow={0.6}
            borderGlow={1}
            reveal="spotlight"
            aspectRatio="4 / 3"
            cardRadius={18}
            showInfo={true}
            frame={true}
            theme="dark"
          />
        </div>

        <div className="projects-hint">
          <Eye size={13} />
          <span>Haz clic en cualquier tarjeta para abrir la galería fotográfica completa</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;

