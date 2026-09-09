'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Zap } from 'lucide-react';
import { PROFILE } from '@/lib/data';
import HeroCanvas from '../3d/HeroCanvas';

interface HeroProps {
  onOpenContact: () => void;
}

export default function HeroSection({ onOpenContact }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F05323]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Conversion Copy & Authority Signals */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-[#F05323]/40 text-xs font-mono text-slate-200">
              <Zap size={14} className="text-[#F05323]" />
              <span>AI SYSTEMS • AUTOMATION • INFRASTRUCTURE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              I Build AI Systems That <span className="text-gradient-orange">Actually Run</span> in Production.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              Production-grade AI agents, autonomous workflows, and infrastructure built by an <strong className="text-white font-semibold">Ex-Amazon Software Engineer</strong> to operate 24/7 without breaking.
            </p>

            {/* CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenContact}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#F05323] hover:bg-[#d94518] text-white font-semibold text-base transition-all transform active:scale-95 shadow-xl shadow-[#F05323]/25 group"
              >
                <span>Build My AI System</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 font-medium text-base transition-colors"
              >
                Explore Systems Built
              </a>
            </div>

            {/* Micro Trust Telemetry Metrics */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#F05323] shrink-0" />
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Upwork Status</div>
                  <div className="text-sm font-semibold text-white">Top Rated (100%)</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Award size={18} className="text-[#F05323] shrink-0" />
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Background</div>
                  <div className="text-sm font-semibold text-white">Ex-Amazon Engineer</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Experience</div>
                  <div className="text-sm font-semibold text-white">10+ Years Arch</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Zap size={18} className="text-[#F05323] shrink-0" />
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Hourly Rate</div>
                  <div className="text-sm font-semibold text-white">{PROFILE.rate}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive System Visualization */}
          <div className="lg:col-span-5 w-full">
            <HeroCanvas />
          </div>

        </div>
      </div>
    </section>
  );
}
