import { Layers } from 'lucide-react';
import { designerInfo, services } from '../../data/mockData';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="sobre-mi">
      <div className="container">
        <div className="about-grid-main">
          <div className="about-intro-col">
            <h2 className="about-heading">
              Diseño con intención, <span>precisión visual</span> y carácter perdurable.
            </h2>
            <p className="about-text-lead">{designerInfo.extendedBio}</p>
            <p className="about-text-secondary">
              Cada proyecto es una oportunidad para cuestionar lo convencional, elevar la narrativa de una marca y
              crear artefactos visuales que destacan en un mundo saturado de imágenes homogéneas.
            </p>
          </div>

          <div className="about-manifesto-card">
            <span className="manifesto-badge">Manifiesto Creativo</span>
            <blockquote className="manifesto-quote">
              &ldquo;No diseñamos para decorar: construimos sistemas visuales que transforman la percepción, provocan
              emoción y resisten el paso del tiempo.&rdquo;
            </blockquote>
            <div className="manifesto-author">
              <span className="author-line" aria-hidden="true" />
              <span>{designerInfo.fullName} &middot; Director de Arte</span>
            </div>
          </div>
        </div>

        {/* Especialidades en cuadrícula compacta (2 columnas obligatorias en móvil) */}
        <div className="services-container">
          <div className="services-header">
            <h3 className="services-title">Áreas de Especialización</h3>
          </div>

          <div className="services-grid" role="list">
            {services.map(svc => (
              <div key={svc.id} className="service-card" role="listitem">
                <div className="service-card-top">
                  <span className="service-num">{svc.number}</span>
                  <Layers size={16} color="var(--accent-lime, #ccff00)" />
                </div>
                <div>
                  <h4 className="service-card-title">{svc.title}</h4>
                  <span className="service-card-sub">{svc.subtitle}</span>
                </div>
                <p className="service-card-desc">{svc.description}</p>
                <div className="service-tags">
                  {svc.tags.map((tag, i) => (
                    <span key={i} className="service-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

