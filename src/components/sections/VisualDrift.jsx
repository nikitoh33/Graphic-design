import { Sparkles } from 'lucide-react';
import DriftWall from '../common/DriftWall';
import { driftWallItems } from '../../data/mockData';
import './VisualDrift.css';

const VisualDrift = () => {
  return (
    <section className="visual-drift-section" id="universo">
      <div className="container">
        <div className="visual-drift-header">
          <span className="section-tag">
            <Sparkles size={12} />
            Universo Cinético
          </span>
          <h2 className="section-title">Moodboard 3D & Exploraciones</h2>
          <p className="section-desc">
            Fragmentos visuales, texturas de empaque, afiches experimentales y piezas renderizadas en constante
            movimiento.
          </p>
        </div>

        <div className="drift-wall-wrapper">
          <DriftWall
            items={driftWallItems}
            columns={5}
            tileWidth={210}
            tileHeight={140}
            gap={16}
            tilt={14}
            turn={-12}
            perspective={1100}
            depth={110}
            speed={38}
            direction="up"
            variance={0.4}
            parallax={0.65}
            lift={60}
            dim={0.6}
            overlayColor="#08090d"
          />
        </div>
      </div>
    </section>
  );
};

export default VisualDrift;

