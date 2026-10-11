import CurvedLoop from '../common/CurvedLoop';
import './TickerBand.css';

const TickerBand = () => {
  return (
    <section className="ticker-band-section" aria-label="Cinta de especialidades visuales">
      <div className="ticker-band-wrapper">
        <CurvedLoop
          marqueeText="✦ BRANDING SYSTEMS ✦ PACKAGING DESIGN ✦ 3D ART ✦ EDITORIAL & TYPE ✦ CREATIVE DIRECTION ✦"
          speed={2.2}
          curveAmount={50}
          direction="left"
          interactive={true}
          className="curved-ticker-text"
        />
      </div>
    </section>
  );
};

export default TickerBand;

