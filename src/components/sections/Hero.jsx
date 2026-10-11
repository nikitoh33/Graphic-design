import { ArrowDown, MessageCircle, MapPin } from 'lucide-react';
import TechText from '../common/TechText';
import { designerInfo } from '../../data/mockData';
import './Hero.css';

const Hero = () => {
  const whatsappUrl = `https://wa.me/${designerInfo.contact.whatsappPhone.replace(/\+/g, '')}?text=${encodeURIComponent(
    designerInfo.contact.whatsappMessage
  )}`;

  return (
    <section className="hero-section" id="inicio">
      <div className="hero-ambient-glow" aria-hidden="true" />
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="container hero-content">
        <div className="hero-badge-wrap">
          <div className="hero-pill">
            <span className="hero-pill-dot" aria-hidden="true" />
            <span>{designerInfo.status}</span>
          </div>
          <div className="hero-pill-location">
            <MapPin size={12} />
            <span>{designerInfo.location}</span>
          </div>

          {/* Sello rotativo de estudio de diseño */}
          <div className="hero-stamp-badge" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="stamp-svg">
              <path
                id="stamp-circle"
                d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                fill="none"
              />
              <text>
                <textPath href="#stamp-circle" startOffset="0%">
                  ✦ DANIEL ✦ MENDOZA ✦ ART DIRECTION
                </textPath>
              </text>
            </svg>
            <span className="stamp-center-star">✦</span>
          </div>
        </div>

        {/* TechText interactivo de React Bits con acento pastel lavanda */}
        <div className="hero-techtext-container" title="Interactúa arrastrando las letras">
          <TechText
            text="DANIEL"
            fontFamily="'Syne', sans-serif"
            fontWeight={800}
            fontSize={155}
            color="#f8fafc"
            accentColor="#c4b5fd"
            reveal="letter"
            dashLength={4}
            dashGap={2}
            strokeWidth={1.6}
            specks={16}
            draggable={true}
            sweep={true}
            speed={0.9}
          />
        </div>

        <h1 className="hero-subtitle">
          Dirección de Arte & <span>Diseño Gráfico</span>
        </h1>

        <p className="hero-bio">{designerInfo.shortBio}</p>

        <div className="hero-actions">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            aria-label="Iniciar conversación de WhatsApp"
          >
            <MessageCircle size={18} />
            <span>Iniciar Proyecto</span>
          </a>

          <a href="#proyectos" className="btn-secondary" aria-label="Explorar proyectos seleccionados">
            <span>Ver Trabajos</span>
            <ArrowDown size={16} />
          </a>
        </div>

        {/* Barra de métricas horizontal prolija */}
        <div className="hero-metrics-bar" role="region" aria-label="Métricas de experiencia">
          <div className="metric-item">
            <span className="metric-number">{designerInfo.experienceYears}</span>
            <span className="metric-label">
              Años de <br className="mobile-break" />Trayectoria
            </span>
          </div>

          <div className="metric-item">
            <span className="metric-number">{designerInfo.completedProjects}</span>
            <span className="metric-label">
              Proyectos <br className="mobile-break" />Lanzados
            </span>
          </div>

          <div className="metric-item">
            <span className="metric-number">{designerInfo.designAwards}</span>
            <span className="metric-label">
              Premios de <br className="mobile-break" />Diseño
            </span>
          </div>

          <div className="metric-item">
            <span className="metric-number">{designerInfo.clientSatisfaction}</span>
            <span className="metric-label">
              Satisfacción <br className="mobile-break" />de Clientes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
