'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, Menu, X } from 'lucide-react';
import { PROFILE } from '@/lib/data';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080C14]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-[#F05323] group-hover:border-[#F05323] transition-colors">
            <Bot size={20} />
          </div>
          <div>
            <div className="font-bold text-white tracking-wider text-base flex items-center gap-1.5">
              ANKIT D.
              <span className="w-1.5 h-1.5 rounded-full bg-[#F05323]"></span>
            </div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              AI Systems Engineer
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#problem" className="hover:text-[#F05323] transition-colors">Why Custom AI</a>
          <a href="#architecture" className="hover:text-[#F05323] transition-colors">Architecture</a>
          <a href="#services" className="hover:text-[#F05323] transition-colors">Services</a>
          <a href="#projects" className="hover:text-[#F05323] transition-colors">Systems Built</a>
          <a href="#experience" className="hover:text-[#F05323] transition-colors">Background</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="text-right">
            <span className="block text-xs font-mono text-emerald-400">● {PROFILE.availability}</span>
            <span className="block text-[11px] font-mono text-slate-400">{PROFILE.rate}</span>
          </div>
          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F05323] hover:bg-[#d94518] text-white font-medium text-sm transition-all transform active:scale-95 shadow-md shadow-[#F05323]/20"
          >
            Hire Me <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1120] border-b border-slate-800 px-4 pt-4 pb-6 space-y-4">
          <a
            href="#problem"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white font-medium text-sm py-1"
          >
            Why Custom AI
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white font-medium text-sm py-1"
          >
            Architecture
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white font-medium text-sm py-1"
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white font-medium text-sm py-1"
          >
            Systems Built
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white font-medium text-sm py-1"
          >
            Background
          </a>
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-3">
            <span className="text-xs font-mono text-emerald-400">● {PROFILE.availability} ({PROFILE.rate})</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#F05323] text-white font-medium text-sm"
            >
              Hire Me <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
