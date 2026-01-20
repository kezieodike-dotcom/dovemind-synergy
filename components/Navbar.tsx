
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/programs' },
    { name: 'Our Teams', path: '/team' },
    { name: 'Happy Clients', path: '/clients' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Book Online', path: '/book' },
    { name: 'Blog', path: '/blog' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      {/* Top Bar - Hidden on mobile, visible on desktop */}
      <div className="border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-end px-6 md:px-10 py-2 gap-8">
          <div className="flex items-center gap-2 text-[#555]">
            <span className="material-symbols-outlined text-xl">account_circle</span>
            <Link to="/login" className="text-xs font-semibold hover:text-primary transition-colors">Staff Log In</Link>
          </div>
          <div className="text-[#333] font-semibold text-xs flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">call</span>
            +234 806 344 5268
          </div>
          <Link to="/book" className="bg-brand-green text-white px-5 py-2 text-xs font-bold hover:brightness-110 transition-all rounded-sm">
            Book Appointment
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-2 md:py-3">
        {/* Logo */}
        <Link to="/" className="flex items-start gap-2 md:gap-3" onClick={closeMenu}>
          <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center -mt-2">
            <img src="/logo.png" alt="DovesMind Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col pt-1">
            <span className="text-primary text-3xl md:text-3xl font-black leading-none tracking-tighter uppercase font-playfair">DovesMind</span>
            <span className="text-[#107361] text-[10px] md:text-xs font-black tracking-[0.4em] uppercase font-inter">Synergy</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 font-inter ${isActive(link.path) ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button - Desktop/Tablet */}
        <div className="hidden md:flex lg:hidden">
          <Link to="/book" className="bg-brand-green text-white px-5 py-2 text-xs font-bold rounded-sm">
            Book Now
          </Link>
        </div>

        {/* Hamburger Menu Button - Mobile only */}
        <button
          className="lg:hidden p-2 text-slate-600 hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-2xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[60] bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <span className="text-primary font-black uppercase">Menu</span>
            <button className="p-2 text-slate-600" onClick={closeMenu}>
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
          <nav className="flex-1 px-6 py-8">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    className={`text-2xl font-black uppercase tracking-tight ${isActive(link.path) ? 'text-primary' : 'text-slate-900'}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-6 border-t border-gray-100 bg-slate-50">
            <Link
              to="/book"
              onClick={closeMenu}
              className="block w-full bg-brand-green text-white py-4 rounded-xl font-bold text-center uppercase tracking-widest shadow-xl shadow-teal-500/20"
            >
              Book Appointment
            </Link>
            <div className="mt-8 flex flex-col gap-4 text-slate-500 text-sm font-bold">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">call</span>
                +234 806 344 5268
              </div>
              <Link to="/login" onClick={closeMenu} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">account_circle</span>
                Staff Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
