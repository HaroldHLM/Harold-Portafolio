"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { num: "01.", label: "home", href: "/" },
  { num: "02.", label: "about", href: "#about" },
  { num: "03.", label: "work", href: "#work" },
  { num: "04.", label: "skills", href: "#skills" },
  { num: "05.", label: "blog", href: "#blog" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      return saved ? saved === "dark" : true;
    }
    return true;
  });

  useEffect(() => {
    if (dark === null) return;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const toggleTheme = () => {
    setDark((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`
          fixed left-0 right-0 top-4 z-50
          flex justify-center px-4 transition-all duration-300
        `}
      >
        <div
          className={`
            flex w-full max-w-6xl items-center justify-between
            border border-(--border) bg-(--bg)/70
            px-5 backdrop-blur-md transition-all duration-300 md:px-8
            ${scrolled ? "h-14" : "h-16"}
          `}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-nowrap font-cormorant text-[20px] font-semibold tracking-wide text-(--text) no-underline select-none sm:text-[22px]"
          >
            <span className="text-[20px] text-(--dorado)">[</span>
            <span className="font-semibold tracking-widest text-(--text)">
              Harold Layme
            </span>
            <span className="text-[20px] text-(--dorado)">]</span>
          </Link>

          <ul className="m-0 hidden list-none items-center gap-2 p-0 lg:flex xl:gap-5">
            {navLinks.map(({ num, label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setActive(label)}
                  className={`
                    nav-link-underline relative flex items-center gap-1.5
                    px-3 py-2 font-dm-mono text-[11px] font-light uppercase tracking-widest
                    no-underline transition-colors duration-200 xl:px-4.5
                    ${active === label ? "text-(--text) active" : "text-(--muted) opacity-60 hover:text-(--text)"}
                  `}
                >
                  <span
                    className={`text-[9px] tracking-wider ${active === label ? "text-(--dorado)" : "text-(--muted) opacity-70"}`}
                  >
                    {num}
                  </span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Tema */}
          <div className="hidden items-center gap-4 lg:flex">
            <ThemeToggle dark={dark} toggleTheme={toggleTheme} />
            <Link
              href="#contact"
              className="
                border border-(--dorado)/60 px-5 py-2
                font-dm-mono text-[10px] uppercase tracking-widest
                text-(--dorado) no-underline transition-all duration-200
                hover:border-[var--dorado)] hover:bg-(--dorado) hover:text-(--bg)
              "
            >
              contact
            </Link>
          </div>

          <button
            className="
              relative flex size-10 items-center justify-center
              border border-(--border) bg-transparent text-(--text)
              transition-colors duration-200 hover:border-(--dorado) lg:hidden
            "
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            type="button"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-px w-5 bg-current transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-2 block h-px w-5 bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 top-4 block h-px w-5 bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>
      <div
        className={`
          fixed top-20 right-4 z-40 bg-(--bg)/90 backdrop-blur-md
          flex flex-col justify-center items-center gap-2 px-8 py-14
          transition-all duration-500 uppercase 
          w-[70%] max-w-xs border border-(--border)
          shadow-2xl  pointer-events-auto lg:hidden
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {navLinks.map(({ num, label, href }, i) => (
          <Link
            key={label}
            href={href}
            onClick={() => {
              setActive(label);
              setMenuOpen(false);
            }}
            className={`
              font-cormorant text-(--text)  hover:text-(--dorado) nav-link-underline relative flex items-center gap-1.5 px-3 py-2 font-dm-mono text-[11px] font-light uppercase tracking-widest
              no-underline transition-colors duration-200 xl:px-4.5
              ${active === label ? "text-(--text) active" : "text-(--muted) opacity-60 hover:text-(--text)"}
            `}
            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
          >
            <span className="font-dm-mono text-[11px] text-(--dorado) ">
              {num}
            </span>
            {label}
          </Link>
        ))}
        <Link
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 font-dm-mono text-[11px] tracking-widest uppercase text-(--dorado) border border-(--dorado)/60 px-8 py-3 no-underline hover:bg-(--dorado) hover:text-(--text) transition-all duration-200"
        >
          contact
        </Link>
        <div className="mt-2">
          <ThemeToggle dark={dark} toggleTheme={toggleTheme} />
        </div>
      </div>
    </>
  );
}
