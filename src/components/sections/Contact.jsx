import { MessageCircle, Mail, Sparkles, ArrowUpRight } from 'lucide-react';
import { designerInfo } from '../../data/mockData';
import './Contact.css';

const Contact = () => {
  const whatsappUrl = `https://wa.me/${designerInfo.contact.whatsappPhone.replace(/\+/g, '')}?text=${encodeURIComponent(
    designerInfo.contact.whatsappMessage
  )}`;

  return (
    <section className="contact-section" id="contacto">
      <div className="container">
        <div className="contact-card-wrap">
          <div className="contact-glow-accent" aria-hidden="true" />

          <div className="contact-header">
            <span className="section-tag">
              <Sparkles size={12} />
              ¿Nuevo Proyecto?
            </span>
            <h2 className="contact-title">
              Hagamos algo <span>extraordinario</span> juntos.
            </h2>
            <p className="contact-desc">
              Ya sea que busques relanzar la identidad de tu marca, crear un empaque memorable o comisionar una pieza
              visual única, hablemos sobre tus objetivos.
            </p>
          </div>

          <div className="contact-channels">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-large"
              aria-label="Escribir por WhatsApp a Daniel"
            >
              <MessageCircle size={20} />
              <span>Chatear por WhatsApp</span>
            </a>

            <a
              href={`mailto:${designerInfo.contact.email}?subject=${encodeURIComponent(
                'Consulta de proyecto de diseño'
              )}`}
              className="btn-email-large"
              aria-label="Enviar correo electrónico a Daniel"
            >
              <Mail size={18} />
              <span>{designerInfo.contact.email}</span>
            </a>
          </div>

          <div className="contact-social-grid">
            {designerInfo.social.map(s => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-box"
                aria-label={`Perfil de Daniel en ${s.name}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span className="social-box-name">{s.name}</span>
                  <ArrowUpRight size={13} />
                </div>
                <span className="social-box-handle">{s.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

