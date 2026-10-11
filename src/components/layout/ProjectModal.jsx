import { useEffect } from 'react';
import { X, Calendar, User, Tag } from 'lucide-react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const galleryImages = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="project-modal-card" onClick={e => e.stopPropagation()}>
        <button
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Cerrar detalle del proyecto"
        >
          <X size={20} />
        </button>

        <div className="project-modal-hero">
          <img src={project.image} alt={project.title} loading="eager" />
          <div className="project-modal-hero-gradient" />
        </div>

        <div className="project-modal-content">
          <div className="project-modal-header">
            <div className="project-modal-meta">
              <span className="meta-pill accent">
                <Tag size={12} style={{ display: 'inline', marginRight: 4 }} />
                {project.category.toUpperCase()}
              </span>
              <span className="meta-pill">
                <Calendar size={12} style={{ display: 'inline', marginRight: 4 }} />
                {project.year}
              </span>
              <span className="meta-pill">
                <User size={12} style={{ display: 'inline', marginRight: 4 }} />
                {project.client}
              </span>
            </div>
            <h2 id="modal-project-title" className="project-modal-title">
              {project.title}
            </h2>
            <p className="project-modal-subtitle">{project.subtitle}</p>
          </div>

          <p className="project-modal-desc">{project.description}</p>

          {project.deliverables && (
            <div className="project-modal-deliverables">
              <span className="deliverables-title">Entregables y Alcance de Diseño</span>
              <div className="deliverables-tags">
                {project.deliverables.map((item, index) => (
                  <span key={index} className="deliverable-badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="project-modal-gallery">
            <h3 className="gallery-title">Galería de Piezas y Aplicaciones</h3>
            <div className="gallery-grid">
              {galleryImages.map((imgSrc, idx) => (
                <div key={idx} className="gallery-item">
                  <img src={imgSrc} alt={`${project.title} pieza ${idx + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

