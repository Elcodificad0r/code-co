import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function useHtmlDark() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  useEffect(() => {
    const obs = new MutationObserver(() =>
      setDark(document.documentElement.classList.contains("dark"))
    );
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);
  return dark;
}

// ============================================================
// TÉRMINOS Y CONDICIONES MODAL
// ============================================================
const TerminosModal = ({ onClose, dark }) => {
  const bg = dark ? "#2a2a2a" : "#ECECEC";
  const textPrimary = dark ? "#F2F0E4" : "#111827";
  const textMuted = dark ? "#a0a8b8" : "#6B7280";
  const textBody = dark ? "#c8cfd8" : "#4B5563";
  const borderColor = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const headerBorder = dark
    ? "rgba(255,255,255,0.10)"
    : "rgba(0,0,0,0.10)";
  const accentBlue = dark ? "#7c9ef5" : "#1e40af";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-start justify-center overflow-y-auto"
      style={{
        background: "rgba(0,0,0,0.72)",
        backdropFilter: "blur(6px)",
        zIndex: 100002,
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl mx-4 my-6 rounded-2xl shadow-2xl flex flex-col"
        style={{
          maxHeight: "92vh",
          zIndex: 100003,
          overflow: "hidden",
          backgroundColor: bg,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="sticky top-0 px-8 py-5 flex items-center justify-between"
          style={{
            zIndex: 100004,
            backgroundColor: bg,
            borderBottom: `1px solid ${headerBorder}`,
          }}
        >
          <button
            onClick={onClose}
            className="flex items-center gap-2 font-space text-sm transition-colors group"
            style={{ background: "none", border: "none", color: textMuted }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-1 transition-transform duration-200"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Regresar
          </button>
          <span
            className="font-space text-xs tracking-[0.25em] uppercase"
            style={{ color: textMuted }}
          >
            Code&Co. · 2026
          </span>
        </div>

        <div
          className="font-space"
          style={{
            overflowY: "auto",
            flex: 1,
            padding: "2rem",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <h1
            className="font-rubik80s text-4xl md:text-5xl leading-none mb-2"
            style={{ color: textPrimary }}
          >
            Términos y<br />
            Condiciones*
          </h1>
          <p className="text-sm mb-10" style={{ color: textMuted }}>
            Última actualización: Febrero 2026 · Aplica para todos los servicios
            de Code&Co.
          </p>

          {[
            {
              num: "01",
              title: "Naturaleza del servicio y alcance",
              content: `Code&Co. es un estudio de desarrollo web y diseño digital con sede en Monterrey, Nuevo León, México. Nuestros servicios comprenden el diseño, desarrollo, implementación y entrega de sitios web, landing pages, tiendas en línea y plataformas digitales a medida. No somos una agencia de marketing, publicidad, medios pagados ni consultoría de ventas. El resultado de nuestro trabajo es un producto digital funcional y entregado: un sitio web. La efectividad comercial de dicho sitio depende enteramente de la estrategia, mercado y ejecución del cliente.`,
            },
            {
              num: "02",
              title:
                "La llamada de asesoría no es un contrato ni una promesa de entrega",
              content: `La sesión de 30 minutos agendada a través de Calendly es una asesoría gratuita, exploratoria y sin ningún tipo de compromiso. Esta sesión no constituye un contrato de prestación de servicios, no garantiza el inicio de un proyecto, no implica reserva de agenda de desarrollo y no obliga a ninguna de las partes a continuar la relación comercial. El proyecto formal inicia exclusivamente al firmar un contrato por escrito y al realizarse el pago del anticipo acordado.`,
            },
            {
              num: "03",
              title: "No garantizamos ventas, prospectos ni resultados comerciales",
              content: `Code&Co. no garantiza, promete ni sugiere que la contratación de nuestros servicios derivará en un incremento de ventas, generación de leads calificados, aumento de tráfico orgánico o cualquier otro resultado comercial medible. Un sitio web es una herramienta de comunicación y presencia digital. Su efectividad como instrumento de negocio depende de factores completamente ajenos a Code&Co.`,
            },
            {
              num: "04",
              title: "Precios, cotizaciones y presupuestos",
              content: `Los precios publicados en el sitio web de Code&Co. son precios base orientativos. El precio final se determina mediante una cotización formal personalizada. Todos los precios están expresados en pesos mexicanos (MXN). El IVA (16%) se agrega únicamente cuando la facturación lo requiera. Code&Co. se reserva el derecho de actualizar sus precios de lista en cualquier momento.`,
            },
            {
              num: "05",
              title:
                "Anticipo, esquema de pagos y suspensión por incumplimiento",
              content: `Todo proyecto requiere un anticipo mínimo del 50% del valor total cotizado para iniciar el desarrollo. El 50% restante debe liquidarse previo a la publicación o entrega final del sitio. El incumplimiento en los pagos puede resultar en la suspensión temporal del proyecto. Si el proyecto es cancelado después de iniciado, el anticipo no es reembolsable en ninguna circunstancia.`,
            },
            {
              num: "06",
              title: "Tiempos de entrega y condicionantes",
              content: `Los tiempos de entrega estimados aplican bajo el supuesto de que el cliente entrega todos los materiales necesarios dentro de los primeros 3 días hábiles. Tiempos estimados: Landing page básica 5–10 días hábiles; Sitio web profesional 2–4 semanas; E-commerce estándar 4–8 semanas; Plataforma personalizada según alcance definido en contrato.`,
            },
            {
              num: "07",
              title: "Ronda de cambios menores y alcance de revisiones",
              content: `Cada proyecto incluye una ronda de revisión y cambios menores posterior a la entrega del primer borrador. Se consideran cambios menores los ajustes de color, texto, tipografía, espaciado y reemplazo de imágenes. No se consideran cambios menores: modificar la arquitectura del sitio, agregar nuevas secciones, cambiar el concepto creativo o incorporar nuevas funcionalidades.`,
            },
            {
              num: "08",
              title: "Servicio de mantenimiento mensual",
              content: `El mantenimiento mensual es un servicio complementario y opcional. El precio base inicia desde $500 MXN mensuales. El mantenimiento estándar incluye actualizaciones menores de contenido, verificación periódica del sitio, respaldo mensual y atención a incidencias técnicas con tiempo de respuesta de 48–72 horas hábiles.`,
            },
            {
              num: "09",
              title: "Propiedad intelectual y derechos de uso",
              content: `Al liquidar el 100% del valor del proyecto, el cliente adquiere los derechos de uso del sitio web entregado y de los activos creativos desarrollados exclusivamente para su proyecto. Code&Co. se reserva el derecho de incluir el proyecto en su portafolio público salvo acuerdo de confidencialidad específico.`,
            },
            {
              num: "10",
              title: "Privacidad, confidencialidad y protección de datos",
              content: `Code&Co. se compromete a tratar como información confidencial todos los datos sensibles del cliente. Esta información no será compartida, vendida ni divulgada a terceros sin consentimiento expreso. Una vez concluida la relación comercial, Code&Co. eliminará toda información sensible del cliente en un plazo no mayor a 30 días.`,
            },
            {
              num: "11",
              title: "Limitación de responsabilidad y casos de fuerza mayor",
              content: `Code&Co. no asume responsabilidad por pérdida de datos fuera del entorno controlado, interrupciones de servicios de terceros, vulnerabilidades derivadas del mal uso del sitio por el cliente, ni daños indirectos o consecuentes. La responsabilidad total no excederá el monto total efectivamente pagado por el cliente en el proyecto específico.`,
            },
            {
              num: "12",
              title: "Modificaciones a estos términos y legislación aplicable",
              content: `Code&Co. se reserva el derecho de modificar estos términos en cualquier momento. Estos términos se rigen por las leyes vigentes en los Estados Unidos Mexicanos. Cualquier controversia se intentará resolver de forma amistosa; de no lograrse un acuerdo, las partes se someterán a los tribunales competentes de Monterrey, Nuevo León, México.`,
            },
          ].map((section) => (
            <div
              key={section.num}
              className="mb-8 pb-8 last:mb-0"
              style={{ borderBottom: `1px solid ${borderColor}` }}
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span
                  className="font-rubik80s text-lg leading-none"
                  style={{ color: accentBlue }}
                >
                  {section.num}
                </span>
                <h2
                  className="font-space font-bold text-base tracking-wide"
                  style={{ color: textPrimary }}
                >
                  {section.title}
                </h2>
              </div>
              <p
                className="text-sm leading-relaxed pl-10"
                style={{ color: textBody }}
              >
                {section.content}
              </p>
            </div>
          ))}

          <div
            className="mt-10 pt-6 text-center"
            style={{ borderTop: `1px solid ${headerBorder}` }}
          >
            <p
              className="font-space text-xs tracking-wider"
              style={{ color: textMuted }}
            >
              Code&Co. · Monterrey, N.L. · hola@codenco.mx · 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// SIMPLE EMAIL FORM (EmailJS + SweetAlert2)
// ============================================================
const EmailForm = ({ onBack, dark, externalSubmitRef }) => {
  const textPrimary = dark ? "#F2F0E4" : "#111827";
  const textMuted = dark ? "#a0a8b8" : "#6B7280";
  const cardBg = dark ? "rgba(42,42,42,0.95)" : "rgba(255,255,255,0.80)";
  const cardBorder = dark ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.60)";
  const inputBg = dark ? "#2a2a2a" : "#F9FAFB";
  const inputBorder = dark ? "#444444" : "#E5E7EB";
  const labelColor = dark ? "#8899aa" : "#6B7280";

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    plan: "",
    descripcion: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const isEmailValid = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());

  const swalMissing = {
    background: "#0520F5",
    color: "#FFFFFF",
    confirmButtonColor: "#000000",
  };

  const swalFail = {
    background: "#C8FF55",
    color: "#000000",
    confirmButtonColor: "#000000",
  };

  const swalSuccess = {
    background: dark ? "#1E1E1E" : "#FFFFFF",
    color: dark ? "#F2F0E4" : "#111827",
    confirmButtonColor: "#0520F5",
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    const nombre = (form.nombre || "").trim();
    const email = (form.email || "").trim();
    const descripcion = (form.descripcion || "").trim();
    const plan = (form.plan || "").trim() || "No especificado";

    if (!nombre || !email || !descripcion) {
      await Swal.fire({
        ...swalMissing,
        icon: "warning",
        title: "Falta información",
        text: "Completa Nombre, Email y la descripción del proyecto para poder enviarlo.",
      });
      return;
    }

    if (!isEmailValid(email)) {
      await Swal.fire({
        ...swalMissing,
        icon: "warning",
        title: "Email inválido",
        text: "Revisa tu correo. Parece incompleto o con formato incorrecto.",
      });
      return;
    }

    setSending(true);

    try {
      await emailjs.send(
  "service_s473zvh",
  "template_sn5a04s",
  {
    email: "hola@codenco.mx",
    name: "Code&Co.",
    from_name: nombre,
    from_email: email,
    reply_to: email,
    plan,
    message: descripcion,
  },
  "JTkgeHf5iUW7v_C28"
);

await emailjs.send(
  "service_s473zvh",
  "template_sn5a04s",
  {
    email: email,
    name: nombre,
    from_name: "Code&Co. | WEB SOLUTIONS",
    from_email: "hola@codenco.mx",
    reply_to: "hola@codenco.mx",
    plan,
    message: descripcion,
  },
  "JTkgeHf5iUW7v_C28"
);

      setSent(true);

      await Swal.fire({
        ...swalSuccess,
        icon: "success",
        title: "Mensaje enviado",
        text: "Recibimos tu solicitud. Te respondemos en breve.",
      });
    } catch (err) {
      console.error("EmailJS error:", err);

      const reason =
        err && (err.text || err.message) ? String(err.text || err.message) : "";

      await Swal.fire({
        ...swalFail,
        icon: "error",
        title: "No se pudo enviar",
        html:
          `Intenta de nuevo en unos minutos.<br/>` +
          `Si sigue fallando, escríbenos a <b>hola@codenco.mx</b>.` +
          (reason
            ? `<br/><br/><span style="opacity:0.9"><b>Debug:</b> ${reason}</span>`
            : ""),
      });
    } finally {
      setSending(false);
    }
  };

  // ✅ expone submit hacia afuera (CTA mobile)
  useEffect(() => {
    if (!externalSubmitRef) return;
    externalSubmitRef.current = handleSubmit;
    return () => {
      externalSubmitRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalSubmitRef, form, sending]);

  return (
    <div
      className="relative overflow-hidden rounded-3xl p-8 shadow-xl"
      style={{
        background: cardBg,
        backdropFilter: "blur(8px)",
        border: `1px solid ${cardBorder}`,
      }}
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 font-space text-sm transition-colors mb-6 group"
        style={{ background: "none", border: "none", color: textMuted }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:-translate-x-1 transition-transform duration-200"
        >
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        Volver al calendario
      </button>

      {sent ? (
        <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: "rgba(5,32,245,0.1)" }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0520F5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="font-rubik80s text-2xl" style={{ color: textPrimary }}>
            ¡Listo!
          </h3>
          <p className="font-space text-sm max-w-xs" style={{ color: textMuted }}>
            Tu mensaje fue enviado. Si quieres agregar algo, escríbenos a
            hola@codenco.mx
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              className="font-space text-xs font-bold uppercase tracking-widest block mb-2"
              style={{ color: labelColor }}
            >
              Nombre o giro de empresa *
            </label>
            <input
              type="text"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              placeholder="Ej. Panadería El Sol, Juan Pérez..."
              className="w-full font-space text-sm rounded-xl px-4 py-3 outline-none transition-colors"
              style={{
                background: inputBg,
                border: `1px solid ${inputBorder}`,
                color: textPrimary,
              }}
            />
          </div>

          <div>
            <label
              className="font-space text-xs font-bold uppercase tracking-widest block mb-2"
              style={{ color: labelColor }}
            >
              Email *
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="tu@correo.com"
              className="w-full font-space text-sm rounded-xl px-4 py-3 outline-none transition-colors"
              style={{
                background: inputBg,
                border: `1px solid ${inputBorder}`,
                color: textPrimary,
              }}
            />
          </div>

          <div>
            <label
              className="font-space text-xs font-bold uppercase tracking-widest block mb-2"
              style={{ color: labelColor }}
            >
              Plan de interés
            </label>
            <select
              value={form.plan}
              onChange={(e) => setForm({ ...form, plan: e.target.value })}
              className="w-full font-space text-sm rounded-xl px-4 py-3 outline-none transition-colors"
              style={{
                background: inputBg,
                border: `1px solid ${inputBorder}`,
                color: textPrimary,
              }}
            >
              <option value="">Selecciona un plan...</option>
              <option value="Landing page básica">Landing page básica</option>
              <option value="Sitio web profesional">Sitio web profesional</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Plataforma personalizada">
                Plataforma personalizada
              </option>
              <option value="No lo sé aún">No lo sé aún</option>
            </select>
          </div>

          <div>
            <label
              className="font-space text-xs font-bold uppercase tracking-widest block mb-2"
              style={{ color: labelColor }}
            >
              Describe tu proyecto *
            </label>
            <textarea
              rows={3}
              value={form.descripcion}
              onChange={(e) =>
                setForm({ ...form, descripcion: e.target.value })
              }
              placeholder="Cuéntanos brevemente qué necesitas..."
              className="w-full font-space text-sm rounded-xl px-4 py-3 outline-none transition-colors resize-none"
              style={{
                background: inputBg,
                border: `1px solid ${inputBorder}`,
                color: textPrimary,
              }}
            />
          </div>

          {/* ✅ Desktop igual: botón dentro del form.
              ✅ Mobile: lo ocultamos, porque lo pondremos afuera junto a "VER CALENDARIO". */}
          <button
            type="submit"
            disabled={sending}
            className="w-full font-space font-bold text-white py-4 rounded-xl text-base tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mobile-form-submit"
            style={{
              background: "#0520F5",
              boxShadow:
                "0 0 24px 6px rgba(5,32,245,0.45), 0 4px 20px rgba(5,32,245,0.3)",
              opacity: sending ? 0.85 : 1,
              cursor: sending ? "not-allowed" : "pointer",
            }}
            onMouseEnter={(e) => {
              if (sending) return;
              e.currentTarget.style.boxShadow =
                "0 0 40px 12px rgba(5,32,245,0.65), 0 4px 32px rgba(5,32,245,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 24px 6px rgba(5,32,245,0.45), 0 4px 20px rgba(5,32,245,0.3)";
            }}
          >
            {sending ? "ENVIANDO..." : "ENVIAR MENSAJE →"}
          </button>
        </form>
      )}
    </div>
  );
};

// ============================================================
// CONTACT SECTION
// ============================================================
const ContactSection = () => {
  const dark = useHtmlDark();

  const bg = dark ? "#1E1E1E" : "#ECECEC";
  const textPrimary = dark ? "#F2F0E4" : "#111827";
  const textMuted = dark ? "#a0a8b8" : "#4B5563";
  const accentBlue = dark ? "#7c9ef5" : "#2563EB";
  const quoteBg = dark ? "rgba(42,42,42,0.60)" : "rgba(255,255,255,0.60)";
  const quoteBorder = dark
    ? "rgba(255,255,255,0.12)"
    : "rgba(255,255,255,0.40)";
  const footerBg = dark ? "rgba(255,255,255,0.05)" : "rgba(31,41,55,0.05)";
  const footerText = dark ? "#a0a8b8" : "#000000";

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const widgetRef = useRef(null);
  const asteriskRef = useRef(null);
  const [gsapLoaded, setGsapLoaded] = useState(false);
  const [showTerminos, setShowTerminos] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showFormHint, setShowFormHint] = useState(false);

  // ✅ submit del form desde afuera (CTA mobile)
  const externalSubmitRef = useRef(null);

  useEffect(() => {
    try {
      emailjs.init("JTkgeHf5iUW7v_C28");
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.gsap) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
        script.onload = () => setGsapLoaded(true);
        document.head.appendChild(script);
      } else setGsapLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (gsapLoaded && window.gsap) {
      const gsap = window.gsap;
      if (titleRef.current)
        gsap.fromTo(
          titleRef.current,
          { y: 80, opacity: 0, skewY: 2 },
          {
            y: 0,
            opacity: 1,
            skewY: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      if (widgetRef.current)
        gsap.fromTo(
          widgetRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
        );
      if (asteriskRef.current)
        gsap.fromTo(
          asteriskRef.current,
          { scale: 0.4, opacity: 0, rotation: -45 },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1.4,
            ease: "back.out(1.4)",
            delay: 0.8,
          }
        );
    }
  }, [gsapLoaded]);

  useEffect(() => {
    if (typeof window !== "undefined" && widgetRef.current && !showEmailForm) {
      const existingScript = document.querySelector('script[src*="calendly"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => {
          if (window.Calendly && widgetRef.current) {
            window.Calendly.initInlineWidget({
              url: "https://calendly.com/holacodenco/30min",
              parentElement: widgetRef.current,
            });
          }
        };
        document.body.appendChild(script);
      } else if (window.Calendly && widgetRef.current) {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/holacodenco/30min",
          parentElement: widgetRef.current,
        });
      }
    }
  }, [showEmailForm]);

  return (
    <>
      {showTerminos && (
        <TerminosModal onClose={() => setShowTerminos(false)} dark={dark} />
      )}

      <style>{`
        /* ── ASTERISCO: esquina superior derecha del widget-card, editorial ── */
        .asterisk-wrap {
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(40%, -35%);
          pointer-events: none;
          z-index: 100001;
          width: clamp(14rem, 36vw, 28rem);
        }
        .asterisk-wrap img {
          width: 100% !important;
          height: auto !important;
          display: block !important;
          object-fit: contain !important;
        }
        .widget-card { overflow: visible !important; }

        @media (max-width: 767px) {
          .asterisk-wrap {
            width: clamp(15rem, 75vw, 22rem) !important;
            transform: translate(40%, -35%) !important;
          }
          .calendly-mobile-wrap {
            height: 400px !important;
            max-height: 400px !important;
          }
        }

        @media (max-width: 767px) {
          .contact-outer { overflow-x: hidden !important; margin-bottom: 0 !important; padding-bottom: 0 !important; display: block !important; }
          .contact-section { padding-bottom: 0 !important; margin-bottom: 0 !important; }
          .contact-section::after,
          .contact-section::before,
          .contact-outer::after,
          .contact-outer::before { display: none !important; content: none !important; height: 0 !important; }
          .contact-inner { padding-bottom: 0 !important; margin-bottom: 0 !important; }
          .contact-footer { margin-bottom: 0 !important; padding-bottom: 1.25rem !important; }
        }

        .email-cta-btn {
          background: #0520F5;
          box-shadow: 0 0 28px 8px rgba(5,32,245,0.5), 0 6px 24px rgba(5,32,245,0.35);
          transition: box-shadow 0.3s ease, transform 0.2s ease;
        }
        .email-cta-btn:hover {
          box-shadow: 0 0 48px 16px rgba(5,32,245,0.7), 0 8px 40px rgba(5,32,245,0.5);
          transform: scale(1.05);
        }
        .email-cta-btn:active { transform: scale(0.98); }

        /* CTA WRAP desktop: no empuja el botón */
        .cta-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          max-width: 100%;
        }

        /* ✅ Desktop: hint a la derecha, más ancho (sin mover botón) */
        .cta-hint {
          position: absolute;
          left: calc(100% + 14px);
          top: 50%;
          transform: translateY(-50%);
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          width: 420px;
          max-width: 420px;
          pointer-events: auto;
        }
        .cta-hint-row {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          max-width: 100%;
          white-space: normal;
          overflow-wrap: anywhere;
        }
        .cta-arrow-up {
          display: inline-flex; align-items: center; justify-content: center;
          width: 22px; height: 22px; font-weight: 800; line-height: 1; transform: translateY(-2px);
          flex: 0 0 auto;
        }

        /* ✅ Mobile: hint abajo con más margin-top (y que no se salga) */
        @media (max-width: 767px) {
          .cta-wrap { display: inline-flex; flex-direction: column; align-items: center; }
          .cta-hint {
            position: static;
            transform: none;
            left: auto; top: auto;
            margin-top: 18px;
            align-items: center;
            text-align: center;
            width: 100%;
            max-width: 92vw;
            padding: 0 8px;
            box-sizing: border-box;
          }
          .cta-hint-row { justify-content: center; }
        }

        /* ✅ Mobile UX: esconder submit dentro del form (solo en mobile) */
        @media (max-width: 767px) {
          .mobile-form-submit { display: none !important; }
        }

        /* ✅ Mobile: dos botones en row cuando el form está activo */
        .cta-row {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          max-width: 100%;
        }

        /* ✅ Ocultar el botón externo ENVIAR (solo mobile) en desktop */
        .mobile-only-cta {
          display: none !important;
        }
        @media (max-width: 767px) {
          .mobile-only-cta {
            display: inline-flex !important;
          }
        }

        /* ✅ MOBILE: que ambos botones quepan sin salirse */
        @media (max-width: 767px) {
          .cta-row {
            width: 100%;
            max-width: 520px;
            gap: 10px;
            padding: 0 6px;
            box-sizing: border-box;
          }
          .cta-row .email-cta-btn {
            flex: 1 1 0;
            min-width: 0;
            padding: 14px 10px !important;
            font-size: 13px !important;
            border-radius: 9999px;
            white-space: nowrap;
            letter-spacing: 0.5px;
          }
        }

        /* ─────────────────────────────────────────────
           MOBILE: evitar que el glow se “superponga”
           (sin mover el asterisk)
           ───────────────────────────────────────────── */
        @media (max-width: 767px) {
          .widget-card {
            isolation: isolate;
          }
          .widget-card .absolute.-inset-4.blur-xl {
            inset: -10px !important;
            filter: blur(14px) !important;
            opacity: 0.55 !important;
            z-index: 0 !important;
          }
          .calendly-mobile-wrap {
            position: relative;
            z-index: 1;
          }
          /* IMPORTANTE: NO cambiamos position del asterisk (sigue absolute) */
          .asterisk-wrap {
            z-index: 2;
          }
        }
      `}</style>

      <div
        className="contact-outer"
        style={{ overflowX: "hidden", marginBottom: 0, paddingBottom: 0 }}
      >
        <section
          ref={sectionRef}
          className="contact-section px-4 md:px-6 relative md:pt-16 lg:pt-40"
          style={{ backgroundColor: bg, marginBottom: 0 }}
        >
          <div className="contact-inner max-w-7xl mx-auto" style={{ marginBottom: 0 }}>
            <div className="grid grid-cols-1 lg:!grid-cols-2 gap-12 lg:!gap-16 items-center lg:!items-start justify-items-center lg:!justify-items-start text-center lg:!text-left">
              {/* LEFT */}
              <div className="space-y-8 w-full max-w-lg lg:!max-w-none">
                <div ref={titleRef} className="space-y-4">
                  <h1
                    className="font-rubik80s text-5xl md:text-7xl lg:!text-8xl leading-none"
                    style={{ color: textPrimary }}
                  >
                    Hablemos
                    <span className="mt-2" style={{ color: accentBlue }}>
                      {" "}
                      de tu
                    </span>
                    <span className="mt-2" style={{ color: textPrimary }}>
                      {" "}
                      proyecto*
                    </span>
                  </h1>
                  <p
                    className="font-space text-lg md:text-xl max-w-lg mx-auto lg:!mx-0 lg:!max-w-lg"
                    style={{ color: textMuted }}
                  >
                    *Sin compromisos, solo una conversación honesta sobre lo que
                    necesitas
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="font-space" style={{ color: textMuted }}>
                    <h3
                      className="font-bold text-lg mb-3"
                      style={{ color: textPrimary }}
                    >
                      ¿Qué incluye la llamada?
                    </h3>
                    <ul className="space-y-2 text-base text-left max-w-md mx-auto lg:!mx-0 lg:!max-w-none">
                      <li className="flex items-start space-x-3">
                        <span className="font-bold" style={{ color: accentBlue }}>
                          01
                        </span>
                        <span>Análisis de tu proyecto actual</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="font-bold" style={{ color: accentBlue }}>
                          02
                        </span>
                        <span>Propuesta de solución técnica</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="font-bold" style={{ color: accentBlue }}>
                          03
                        </span>
                        <span>Timeline y presupuesto aproximado</span>
                      </li>
                    </ul>
                  </div>

                  <div
                    className="rounded-2xl p-6 max-w-md mx-auto lg:!mx-0 lg:!max-w-none"
                    style={{
                      background: quoteBg,
                      backdropFilter: "blur(8px)",
                      border: `1px solid ${quoteBorder}`,
                    }}
                  >
                    <p
                      className="font-space text-sm italic text-left"
                      style={{ color: textMuted }}
                    >
                      "En 30 minutos puedes saber exactamente qué necesitas para
                      llevar tu idea al siguiente nivel"
                    </p>
                    <p
                      className="font-space text-xs mt-2 text-left"
                      style={{ color: textMuted }}
                    >
                      — Code&Co. Team
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="lg:!pl-8 w-full max-w-md mx-auto lg:!mx-0 lg:!max-w-none">
                <div className="widget-card relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl" />

                  <div
                    className="calendly-mobile-wrap relative rounded-3xl"
                    style={{
                      height: "600px",
                      maxHeight: "600px",
                      overflow: showEmailForm ? "auto" : "hidden",
                    }}
                  >
                    {showEmailForm ? (
                      <EmailForm
                        onBack={() => {
                          setShowEmailForm(false);
                          setShowFormHint(false);
                        }}
                        dark={dark}
                        externalSubmitRef={externalSubmitRef}
                      />
                    ) : (
                      <div
                        ref={widgetRef}
                        className="relative w-full h-full"
                        style={{ minHeight: "400px", overscrollBehavior: "auto" }}
                      />
                    )}
                  </div>

                  <div className="asterisk-wrap" ref={asteriskRef}>
                    <img src="img/contact-asterisk.webp" alt="" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center space-y-4">
              <p className="font-space text-lg" style={{ color: textMuted }}>
                ¿Prefieres escribirnos directamente?
              </p>

              <div className="cta-wrap">
                <div className="cta-row">
                  <button
                    className="email-cta-btn font-space text-white px-12 py-5 rounded-full text-lg font-bold tracking-wider"
                    onClick={() => {
                      setShowEmailForm((v) => {
                        const next = !v;
                        setShowFormHint(next);
                        return next;
                      });
                    }}
                  >
                    {showEmailForm ? "← CALENDARIO" : "ENVIAR EMAIL →"}
                  </button>

                  {/* ✅ Solo mobile: botón externo para enviar (texto corto) */}
                  {showEmailForm ? (
                    <button
                      className="email-cta-btn justify-center font-space text-white px-12 py-5 rounded-full text-lg font-bold tracking-wider mobile-only-cta"
                      onClick={() => {
                        if (externalSubmitRef.current) externalSubmitRef.current();
                      }}
                    >
                      ENVIAR
                    </button>
                  ) : null}
                </div>

                {/* Hint (desktop a la derecha, mobile abajo) */}
                {showFormHint && showEmailForm ? (
                  <div className="cta-hint">
                    <div
                      className="cta-hint-row font-space text-sm"
                      style={{ color: textMuted }}
                    >
                      <span className="cta-arrow-up" style={{ color: "#0520F5" }}>
                        ↑
                      </span>
                      <span>
                        Formulario activo. Déjanos tus datos y lo enviamos directo a Code&Co.
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowFormHint(false)}
                      className="font-space text-xs underline underline-offset-2 hover:opacity-60 transition-opacity cursor-pointer bg-transparent border-0 p-0"
                      style={{ color: textMuted, marginTop: "10px" }}
                    >
                      Entendido
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            {/* FOOTER */}
            <footer
              className="contact-footer mt-12 w-full backdrop-blur-sm rounded-xl py-6 px-4 md:px-8 font-space"
              style={{ backgroundColor: footerBg, marginBottom: 0, color: footerText }}
            >
              <div className="flex flex-col items-center text-center md:!flex-row md:!justify-between md:!items-center space-y-2 md:!space-y-0 w-full">
                <span className="w-auto text-xs">Code&Co. Monterrey N.L.</span>
                <span className="w-auto text-xs">権利が留保されています / 2026年以降</span>
                <button
                  onClick={() => setShowTerminos(true)}
                  className="w-auto text-xs underline underline-offset-2 hover:opacity-60 transition-opacity cursor-pointer bg-transparent border-0 p-0 font-space"
                  style={{ color: footerText }}
                >
                  Términos y condiciones
                </button>
              </div>
            </footer>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactSection;