// src/components/navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { Menu, X, Instagram, Linkedin, Sun, Moon } from "lucide-react";

const DarkToggle = ({ darkMode, onToggle }) => (
  <button
    onClick={onToggle}
    aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
    className="relative group flex items-center justify-center w-9 h-9 rounded-full border border-[#0520F5]/40 shadow-[0_0_12px_rgba(5,32,245,0.35),0_0_24px_rgba(5,32,245,0.15)] hover:shadow-[0_0_18px_rgba(5,32,245,0.6),0_0_36px_rgba(5,32,245,0.25)] hover:border-[#0520F5]/70 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
    style={{ background: "rgba(255,255,255,0.15)" }}
  >
    <span className="absolute inset-0 rounded-full bg-[#0520F5]/10 group-hover:bg-[#0520F5]/20 transition-colors duration-300" />
    <span className="relative z-10 transition-all duration-500 group-hover:rotate-12">
      {darkMode ? (
        <Sun className="w-4 h-4" style={{ color: "#ffffff" }} strokeWidth={2} />
      ) : (
        <Moon className="w-4 h-4 text-[#0520F5]" strokeWidth={2} />
      )}
    </span>
  </button>
);

const Navbar = ({ darkMode, onToggleDark, onNavClick }) => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [logoDarkLoaded, setLogoDarkLoaded] = useState(false);

  const [homeActive, setHomeActive] = useState(true);

  const navItems = [
    { id: "hero", label: "HOME", noSpy: true, isHome: true },
    { id: "mision", label: "MISIÓN" },
    { id: "nosotros", label: "NOSOTROS" },
    { id: "servicios", label: "SERVICIOS" },
    { id: "precios", label: "PRECIOS" },
    { id: "procesos", label: "PROCESO" },
    { id: "work", label: "WORK" },
    { id: "faq", label: "FAQ" },
    { id: "contacto", label: "CONTACTO" },
  ];

  const col1 = navItems.slice(0, 3);
  const col2 = navItems.slice(3, 6);
  const col3 = navItems.slice(6, 9);

  useEffect(() => {
  const setNavHeightVar = () => {
    if (!navRef.current) return;
    requestAnimationFrame(() => {
      if (!navRef.current) return;
      const height = Math.ceil(navRef.current.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--nav-h", `${height}px`);
    });
  };

  setNavHeightVar();
  const t = setTimeout(setNavHeightVar, 100);

  const ro = new ResizeObserver(setNavHeightVar);
  if (navRef.current) ro.observe(navRef.current);

  return () => {
    clearTimeout(t);
    ro.disconnect();
  };
}, [isOpen]);

  useEffect(() => {
    const onScroll = () => {
      setHomeActive(window.scrollY <= 6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const darkNavBg = "rgba(10, 15, 30, 0.92)";
  const lightNavBg = "rgba(255, 255, 255, 0.70)";
  const darkText = "#e0e4ff";
  const lightText = "#0A0F0D";
  const darkBorder = "rgba(255,255,255,0.10)";
  const lightBorder = "#9ca3af";

  const textColor = darkMode ? darkText : lightText;
  const navBg = darkMode ? darkNavBg : lightNavBg;
  const borderColor = darkMode ? darkBorder : lightBorder;

  const LinkItem = ({ id, label, noSpy = false, isHome = false }) => {
    const isContacto = id === "contacto";
    const forcedActive = isHome && homeActive;

    return (
      <Link
        to={id}
        smooth
        duration={600}
        spy={!noSpy}
        offset={-80}
        activeClass="is-active"
        href={id === "hero" ? "#" : `#${id}`}
        onClick={() => onNavClick?.(id)}
        className={
          (isContacto
            ? `group relative cursor-pointer text-[11px] tracking-[0.18em] font-space uppercase text-white transition-all duration-300 px-5 py-[7px] rounded-full bg-[#0520F5] border border-[#0520F5]/60 shadow-[0_0_16px_rgba(5,32,245,0.45),0_0_32px_rgba(5,32,245,0.2)] hover:shadow-[0_0_22px_rgba(5,32,245,0.65),0_0_48px_rgba(5,32,245,0.3)] hover:-translate-y-[1px] hover:bg-[#0318d4] [&.is-active]:shadow-[0_0_24px_rgba(5,32,245,0.7),0_0_52px_rgba(5,32,245,0.35)]`
            : `group relative pl-5 cursor-pointer text-sm tracking-wide font-space uppercase opacity-50 hover:opacity-100 transition before:content-['▸'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-xs before:opacity-0 before:-translate-x-1 before:transition [&.is-active]:opacity-100 [&.is-active]:before:opacity-100 [&.is-active]:before:translate-x-0`) +
          (forcedActive ? " is-active" : "")
        }
        style={isContacto ? {} : { color: textColor }}
      >
        {label}
      </Link>
    );
  };

  // CAMBIO: logo mobile más chico — de scale(1.5) a scale(1.0) y height 32px
  const logoStyleDesktop = {
    height: "48px",
    width: "auto",
    transform: "scale(1.5)",
    transformOrigin: "center center",
    transition: "opacity 300ms",
  };
  const logoStyleMobile = {
    height: "42px",
    width: "auto",
    transform: "scale(1.0)",
    transformOrigin: "center center",
    transition: "opacity 300ms",
  };

  const handleLogoClick = () => {
    const el = document.getElementById("hero");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => window.scrollBy({ top: -80, left: 0, behavior: "instant" }), 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="fixed pt-5 pb-1 md:pb-5 left-0 w-full backdrop-blur-xl border-b text-[#0A0F0D] z-[100002]"
      style={{
        backgroundColor: navBg,
        borderColor: borderColor,
        transition: "background-color 300ms, border-color 300ms",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-12 flex items-center h-20">
        {/* Mobile: hamburger | toggle centrado | logo */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:!hidden"
          style={{ color: textColor }}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* CAMBIO: flex-1 + flex + justify-center para centrar el toggle en mobile */}
        <div className="md:!hidden flex-1 pl-10 flex justify-center">
          <DarkToggle darkMode={darkMode} onToggle={onToggleDark} />
        </div>

        {/* Logo — usa logoStyleMobile en mobile, logoStyleDesktop en desktop */}
        <div
          className="flex-shrink-0 md:!ml-0 md:!mr-auto md:!order-1 flex items-center"
          style={{ height: "48px" }}
          onClick={handleLogoClick}
          role="button"
          aria-label="Ir al inicio"
        >
          {!logoLoaded && !logoDarkLoaded && (
            <span className="text-2xl font-bold" style={{ color: textColor }}>
              Code &amp; Co.
            </span>
          )}
          {/* Light logo */}
          <img
            src="img/logocodeco.webp"
            alt="Code & Co."
            width={96}
            height={48}
            onLoad={() => setLogoLoaded(true)}
            className="md:!hidden"
            style={{
              ...logoStyleMobile,
              opacity: !darkMode ? 1 : 0,
              position: !darkMode ? "relative" : "absolute",
              pointerEvents: !darkMode ? "auto" : "none",
            }}
          />
          <img
            src="img/logocodeco.webp"
            alt="Code & Co."
            width={96}
            height={48}
            className="hidden md:!block"
            style={{
              ...logoStyleDesktop,
              opacity: !darkMode ? 1 : 0,
              position: !darkMode ? "relative" : "absolute",
              pointerEvents: !darkMode ? "auto" : "none",
            }}
          />
          {/* Dark logo */}
          <img
            src="img/logocodecolt.webp"
            alt="Code & Co."
            width={96}
            height={48}
            onLoad={() => setLogoDarkLoaded(true)}
            className="md:!hidden"
            style={{
              ...logoStyleMobile,
              opacity: darkMode ? 1 : 0,
              position: darkMode ? "relative" : "absolute",
              pointerEvents: darkMode ? "auto" : "none",
            }}
          />
          <img
            src="img/logocodecolt.webp"
            alt="Code & Co."
            width={96}
            height={48}
            className="hidden md:!block"
            style={{
              ...logoStyleDesktop,
              opacity: darkMode ? 1 : 0,
              position: darkMode ? "relative" : "absolute",
              pointerEvents: darkMode ? "auto" : "none",
            }}
          />
        </div>

        {/* Desktop nav grid */}
        <div className="hidden md:!flex flex-1 justify-center md:!order-2">
          <div className="grid grid-cols-3 gap-x-16 gap-y-3 text-left">
            <div className="flex flex-col gap-3">
              {col1.map((item) => (
                <LinkItem key={item.id} {...item} />
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {col2.map((item) => (
                <LinkItem key={item.id} {...item} />
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {col3.map((item) => (
                <LinkItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop derecha */}
        <div className="hidden md:!flex items-center space-x-4 md:!order-3">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100 transition"
            style={{ color: textColor }}
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100 transition"
            style={{ color: textColor }}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <span
            className="w-px h-5"
            style={{
              backgroundColor: darkMode ? "rgba(255,255,255,0.2)" : "#d1d5db",
            }}
          />
          <DarkToggle darkMode={darkMode} onToggle={onToggleDark} />
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          className="md:!hidden pb-2 shadow-md transition-all duration-300 ease-in-out animate-slideDown"
          style={{ backgroundColor: darkMode ? "#0a0f1e" : "#ffffff" }}
        >
          <div className="flex flex-col items-center text-center gap-0">
            {navItems.map((item, index) => {
              const isContacto = item.id === "contacto";
              const forcedActive = item.isHome && homeActive;

              return isContacto ? (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth
                  duration={600}
                  spy
                  offset={-70}
                  activeClass="is-active"
                  href={`#${item.id}`}
                  onClick={() => { onNavClick?.(item.id); setIsOpen(false); }}
                  className="cursor-pointer w-full py-4 px-6 mt-1 bg-[#0520F5] text-white text-base tracking-[0.18em] font-space uppercase text-center transition-all duration-200 hover:bg-[#0318d4] [&.is-active]:bg-[#0318d4]"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth
                  duration={600}
                  spy={!item.noSpy}
                  offset={-70}
                  activeClass="is-active"
                  href={item.id === "hero" ? "#" : `#${item.id}`}
                  onClick={() => { onNavClick?.(item.id); setIsOpen(false); }}
                  className={`cursor-pointer text-base tracking-wide font-space uppercase opacity-50 hover:opacity-100 transition [&.is-active]:opacity-100 ${
                    index === 0 ? "pt-4" : ""
                  } py-3 px-6 border-b w-full${forcedActive ? " is-active" : ""}`}
                  style={{
                    color: textColor,
                    borderColor: darkMode ? "rgba(255,255,255,0.1)" : "#f3f4f6",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex justify-center space-x-6 mt-4 mb-3">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition"
              style={{ color: textColor }}
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition"
              style={{ color: textColor }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;