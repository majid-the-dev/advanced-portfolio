// Header.js
"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import Close from "./icons/Close";
import Menu from "./icons/Menu";
import Envelope from "./icons/Envelope";
import { usePathname } from "next/navigation";

const BlogHeader = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  // const [activeSection, setActiveSection] = useState("home");

  const path = usePathname();

  const sections = [
    { label: "Discover", link: '/blog' },
    { label: "Categories", link: '/blog/categories' },
    { label: "Search" },
  ];

  const logo = 'BLOG';

  return (
    <header className="bg-primary shadow-md relative">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-6 px-6">
        <div className="relative inline-flex">
          <Link href={'/blog'} className="text-lg font-extrabold">{logo}</Link>
          <div className="absolute top-0 -right-2 h-6 w-8 bg-red-400/25"></div>
        </div>

        <button
          type="button"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          className="md:hidden bg-black text-primary ring-4 ring-red-400/25 p-1 rounded-md cursor-pointer"
        >
          {menuIsOpen ? <Close /> : <Menu />}
        </button>

        <div className="hidden md:flex items-center gap-9 text-sm">
          <Link href={'/blog'} className={path === '/blog' ? 'active' : ''}>Discover</Link>
          <Link href={'/blog/categories'} className={path === '/blog/categories' ? 'active' : ''}>Categories</Link>
          <button type="button">Search</button>
          <Link href={'/'} className="button-primary flex items-center gap-2 px-4 py-3 rounded-md">
            <span>Subscribe</span>
            <Envelope className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {menuIsOpen && (
        <div className="md:hidden">
          <div className="absolute flex flex-col items-center py-8 px-8 mt-2 space-y-6 bg-primary sm:w-auto sm:self-center right-6 left-6 drop-shadow-md">
            <Link href={'/blog'} className={path === '/blog' ? 'active' : ''}>Discover</Link>
            <Link href={'/blog/categories'} className={path === '/blog/categories' ? 'active' : ''}>Categories</Link>
            <button type="button">Search</button>
            <Link href={'/'} className="button-primary flex items-center gap-2 px-4 py-3 rounded-md">
              <span>Subscribe</span>
              <Envelope className="w-4 h-4" />
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
