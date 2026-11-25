"use client";
import { useEffect, useState } from "react";
import { profile } from "@/data/resume";

const links = [
  ["Why me", "#why"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo" aria-label="Home">
          <span className="logo-mark">PB</span>
          <span className="logo-text">Prayul<span className="grad">.dev</span></span>
        </a>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href={profile.cv} download className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>
            ⬇ Download CV
          </a>
        </nav>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
