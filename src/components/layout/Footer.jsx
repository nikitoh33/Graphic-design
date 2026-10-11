import { ArrowUpRight } from 'lucide-react';
import { designerInfo } from '../../data/mockData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-brand-title">
              {designerInfo.fullName} <span>// STUDIO</span>
            </h3>
            <p className="footer-brand-desc">
              Identidades visuales de alto impacto, dirección de arte contemporánea y sistemas gráficos diseñados para
              perdurar.
            </p>
          </div>

          <div className="footer-social-links">
            {designerInfo.social.map(item => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <span>{item.name}</span>
                <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>© {new Date().getFullYear()} {designerInfo.fullName}. Todos los derechos reservados.</span>
          </div>

          <div className="footer-status-pill">
            <span className="footer-status-dot" aria-hidden="true" />
            <span>Sistemas operativos en línea &middot; {designerInfo.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

