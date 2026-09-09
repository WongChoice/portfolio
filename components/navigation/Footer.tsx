'use client';

import React from 'react';
import Link from 'next/link';
import { Bot, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '@/lib/data';

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer className="bg-[#0A1120] border-t border-slate-800 text-slate-400 text-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-[#F05323]">
                <Bot size={18} />
              </div>
              <span className="font-bold text-white tracking-wider text-base">
                ANKIT D.
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Ex-Amazon Software Engineer building production-grade AI agents, autonomous workflows, and scalable AI infrastructure designed to operate 24/7.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <ShieldCheck size={14} /> Top Rated on Upwork (100% Job Success)
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-slate-200 uppercase tracking-wider">Navigation</div>
            <ul className="space-y-2 text-xs">
              <li><a href="#problem" className="hover:text-[#F05323] transition-colors">Why Custom AI</a></li>
              <li><a href="#architecture" className="hover:text-[#F05323] transition-colors">Architecture</a></li>
              <li><a href="#services" className="hover:text-[#F05323] transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-[#F05323] transition-colors">Systems Built</a></li>
              <li><a href="#experience" className="hover:text-[#F05323] transition-colors">Background</a></li>
            </ul>
          </div>

          {/* Direct Contact / Rate */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono text-slate-200 uppercase tracking-wider">Hire Directly</div>
            <p className="text-xs text-slate-400">
              Available for contract roles and fixed-scope AI automation builds.
            </p>
            <div className="text-xs font-mono text-slate-300">
              Rate: <span className="text-white font-semibold">{PROFILE.rate}</span>
            </div>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F05323] text-white text-xs font-medium hover:bg-[#d94518] transition-colors"
            >
              Contact Ankit <ArrowUpRight size={14} />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} Ankit D. — All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>LangGraph</span>
            <span>•</span>
            <span>n8n</span>
            <span>•</span>
            <span>FastAPI</span>
            <span>•</span>
            <span>Python</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
