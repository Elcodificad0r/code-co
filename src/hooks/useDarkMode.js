// src/hooks/useDarkMode.js
import { useState, useEffect } from "react";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    // Solo leer localStorage, nunca el sistema — default siempre light
    try {
      const saved = localStorage.getItem("darkMode");
      return saved === "true"; // si es null → false (light)
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem("darkMode", String(darkMode));
    } catch {}
  }, [darkMode]);

  const toggle = () => setDarkMode((prev) => !prev);

  return { darkMode, toggle };
}