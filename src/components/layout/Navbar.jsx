import { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { designerInfo } from '../../data/mockData';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Universo Visual', href: '#universo' },
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Herramientas', href: '#herramientas' },
    { label: 'Contacto', href: '#contacto' }
  ];

  const whatsappUrl = `https://wa.me/${designerInfo.contact.whatsappPhone.replace(/\+/g, '')}?text=${encodeURIComponent(
    designerInfo.contact.whatsappMessage
  )}`;

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-brand" aria-label="Daniel Portfolio">
          <div className="brand-symbol">D</div>
          <div className="brand-text">
            <span className="brand-name">{designerInfo.fullName}</span>
            <span className="brand-tag">Mendoza &middot; Visual Studio</span>
          </div>
        </a>

        <nav aria-label="Navegación principal">
          <ul className="navbar-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-actions">
          <div className="status-indicator" title="Disponibilidad actual">
            <span className="status-dot" aria-hidden="true" />
            <span>DISPONIBLE</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contact"
            aria-label="Contactar por WhatsApp"
          >
            <span>Hablemos</span>
            <ArrowUpRight size={15} />
          </a>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <ul className="mobile-nav-list">
            {navLinks.map(link => (
              <li key={link.href} className="mobile-nav-item">
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-status">
            <Sparkles size={14} />
            <span>{designerInfo.status}</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

