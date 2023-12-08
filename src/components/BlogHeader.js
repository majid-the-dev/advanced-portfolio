// Header.js
"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import Close from "./icons/Close";
import Download from "./icons/Download";
import Menu from "./icons/Menu";
import Envelope from "./icons/Envelope";

const BlogHeader = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Discover" },
    { id: "about", label: "Categories" },
    { id: "projects", label: "Search" },
    // { id: "blog", label: "Blog" },
    // { id: "contact", label: "Contact" },
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const targetElement = document.getElementById(section.id);

      if (targetElement) {
        const sectionTop = targetElement.offsetTop - 50;
        const sectionBottom = sectionTop + targetElement.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      }
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  const logo = 'BLOG';

  return (
    <header className="bg-primary shadow-md relative">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-6">
        <Link href={'/'} className="text-lg font-extrabold">
          {logo}
        </Link>

        <button
          type="button"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          className="md:hidden bg-black text-primary ring-4 ring-red-400/25 p-1 rounded-md cursor-pointer"
        >
          {menuIsOpen ? <Close /> : <Menu />}
        </button>

        <div className="hidden md:flex items-center gap-9 text-sm">
          {sections.map((section) => (
            <NavLink key={section.id} href={`#${section.id}`} active={activeSection === section.id}>
              {section.label}
            </NavLink>
          ))}
          <Link href={'/'} className="button-primary flex items-center gap-2 px-4 py-3 rounded-md">
            <span>Subscribe</span>
            <Envelope className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {menuIsOpen && (
        <div className="md:hidden">
          <div className="absolute flex flex-col items-center py-8 px-8 mt-2 space-y-6 bg-primary sm:w-auto sm:self-center right-6 left-6 drop-shadow-md">
            {sections.map((section) => (
              <NavLink key={section.id} href={`#${section.id}`} active={activeSection === section.id}>
                {section.label}
              </NavLink>
            ))}
            <Link href={'/'} className="button-primary flex items-center gap-2 px-4 py-3 rounded-md">
              <span>Download Resume</span>
              <Download className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, active, children }) => {
  return (
    <Link href={href} className={`nav-link ${active ? 'active' : ''}`}>
     {children}
    </Link>
  );
};

export default BlogHeader;
