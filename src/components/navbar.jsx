// src/components/navbar.jsx
import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X, Instagram, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "mision", label: "MISIÓN" },
    { id: "porque", label: "¿POR QUÉ NOSOTROS?" },
    { id: "servicios", label: "SERVICIOS" },
    { id: "precios", label: "PRECIOS" },
    { id: "work", label: "WORK" },
    { id: "proceso", label: "PROCESO" },
    { id: "faq", label: "FAQ" },
    { id: "contacto", label: "CONTACTO" },
  ];

  const col1 = navItems.slice(0, 3);
  const col2 = navItems.slice(3, 6);
  const col3 = navItems.slice(6, 9);

  const LinkItem = ({ id, label }) => (
    <Link
      to={id}
      smooth
      duration={600}
      spy
      offset={-80}
      activeClass="is-active"
      className="
        group relative pl-5 cursor-pointer text-sm tracking-wide font-space uppercase
        text-[#0A0F0D] opacity-50 hover:opacity-100 transition
        before:content-['▸'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
        before:text-[#0A0F0D] before:text-xs before:opacity-0 before:-translate-x-1 before:transition
        [&.is-active]:opacity-100
        [&.is-active]:before:opacity-100 [&.is-active]:before:translate-x-0
      "
    >
      {label}
    </Link>
  );

  return (
    <nav className="fixed pt-5 pb-4 left-0 w-full backdrop-blur-xl border-1 border-gray-200 border-b-gray-400 text-[#0A0F0D] z-50 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0 text-2xl font-bold text-[#0A0F0D]">
          Code & Co.
        </div>

        {/* Menú desktop: 3 columnas */}
        <div className="md:flex flex-1 justify-center">
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

        {/* Redes sociales (desktop) */}
        <div className=" md:flex items-center space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A0F0D] opacity-50 hover:opacity-100 transition"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A0F0D] opacity-50 hover:opacity-100 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Botón hamburguesa (solo mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#0A0F0D]"
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6 shadow-md">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth
                duration={600}
                spy
                offset={-70}
                activeClass="is-active"
                onClick={() => setIsOpen(false)}
                className="
                  cursor-pointer text-[#0A0F0D] text-base tracking-wide font-space uppercase
                  opacity-50 hover:opacity-100 transition [&.is-active]:opacity-100
                "
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Redes sociales en mobile */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A0F0D] opacity-50 hover:opacity-100 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A0F0D] opacity-50 hover:opacity-100 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;