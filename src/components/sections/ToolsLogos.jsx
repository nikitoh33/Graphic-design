import { useMemo } from 'react';
import { Wrench } from 'lucide-react';
import LogoLoop from '../common/LogoLoop';
import { creativeTools, clientLogos } from '../../data/mockData';
import './ToolsLogos.css';

// Componentes SVG limpios para los íconos de las apps de diseño gráfico
const AppIconGraphic = ({ tool }) => {
  switch (tool.short) {
    case 'Ps':
      return (
        <div className="app-icon-symbol" style={{ background: '#001e36', color: '#31a8ff', border: '1px solid #31a8ff' }}>
          Ps
        </div>
      );
    case 'Ai':
      return (
        <div className="app-icon-symbol" style={{ background: '#330000', color: '#ff9a00', border: '1px solid #ff9a00' }}>
          Ai
        </div>
      );
    case 'Id':
      return (
        <div className="app-icon-symbol" style={{ background: '#49021f', color: '#ff3366', border: '1px solid #ff3366' }}>
          Id
        </div>
      );
    case 'Ae':
      return (
        <div className="app-icon-symbol" style={{ background: '#00005b', color: '#9999ff', border: '1px solid #9999ff' }}>
          Ae
        </div>
      );
    case 'Fg':
      return (
        <div className="app-icon-symbol" style={{ background: '#1e1e1e', border: '1px solid #333' }}>
          <svg width="18" height="18" viewBox="0 0 38 57" fill="none">
            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
          </svg>
        </div>
      );
    case 'Bl':
      return (
        <div className="app-icon-symbol" style={{ background: '#1c2438', border: '1px solid #ea7600' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="13" r="4.5" fill="#265787"/>
            <circle cx="12" cy="13" r="2.2" fill="#ffffff"/>
            <path d="M12 4C9 4 7 6 7 8L10 11M12 4L15 9M12 4C14 4 17 6 17 9" stroke="#ea7600" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      );
    case 'C4D':
      return (
        <div className="app-icon-symbol" style={{ background: '#071836', color: '#60a5fa', border: '1px solid #3b82f6', fontSize: '11px' }}>
          C4D
        </div>
      );
    default:
      return (
        <div className="app-icon-symbol" style={{ background: '#181b2a', color: '#c4b5fd', border: '1px solid #c4b5fd' }}>
          ✦
        </div>
      );
  }
};

const ToolsLogos = () => {
  const toolItems = useMemo(() => {
    return creativeTools.map((tool, idx) => ({
      node: (
        <div className="app-card-pill" key={`tool-${idx}`}>
          <AppIconGraphic tool={tool} />
          <div>
            <div className="app-name">{tool.name}</div>
            <div className="app-cat">{tool.category}</div>
          </div>
        </div>
      ),
      title: tool.name
    }));
  }, []);

  const clientItems = useMemo(() => {
    return clientLogos.map((client, idx) => ({
      node: (
        <div className="client-badge-item" key={`client-${idx}`}>
          <span className="client-badge-star">✦</span>
          <span>{client.title}</span>
        </div>
      ),
      title: client.title
    }));
  }, []);

  return (
    <section className="tools-logos-section" id="herramientas">
      <div className="container">
        <div className="tools-logos-header">
          <span className="section-tag" style={{ color: 'var(--accent-primary, #c4b5fd)', borderColor: 'rgba(196, 181, 253, 0.3)', background: 'rgba(196, 181, 253, 0.08)' }}>
            <Wrench size={12} />
            Stack Creativo
          </span>
          <h2 className="tools-title">Herramientas & Entorno de Trabajo</h2>
          <p className="tools-subtitle">
            Dominio de software estándar de la industria para branding, modelado 3D, empaque y tipografía editorial.
          </p>
        </div>
      </div>

      {/* Carrusel infinito autónomo que se mueve solo continuamente */}
      <div className="tools-carousel-container">
        <LogoLoop
          logos={toolItems}
          speed={65}
          direction="left"
          logoHeight={52}
          gap={20}
          hoverSpeed={30}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#08090e"
          ariaLabel="Herramientas de diseño gráfico"
        />

        <LogoLoop
          logos={clientItems}
          speed={50}
          direction="right"
          logoHeight={38}
          gap={18}
          hoverSpeed={25}
          scaleOnHover={false}
          fadeOut={true}
          fadeOutColor="#08090e"
          ariaLabel="Clientes y marcas"
        />
      </div>
    </section>
  );
};

export default ToolsLogos;
