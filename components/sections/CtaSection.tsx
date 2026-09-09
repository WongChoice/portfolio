'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Mail, MessageSquare } from 'lucide-react';
import { PROFILE } from '@/lib/data';

interface CtaProps {
  onOpenContact: () => void;
}

export default function CtaSection({ onOpenContact }: CtaProps) {
  return (
    <section className="py-24 bg-[#080C14] relative border-t border-slate-800 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F05323]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F05323]/10 border border-[#F05323]/40 text-[#F05323] text-xs font-mono uppercase tracking-wider mb-6">
          <Zap size={14} /> Direct Upwork / Contract Engagement
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Have a Process That Shouldn&apos;t Require a <span className="text-gradient-orange">Human Every Time?</span>
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal">
          Let&apos;s discuss turning your manual operational bottleneck into a production-grade AI system.
        </p>

        {/* Main Conversion CTA Box */}
        <div className="mt-10 bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-9 py-4 rounded-xl bg-[#F05323] hover:bg-[#d94518] text-white font-semibold text-base transition-all transform active:scale-95 shadow-xl shadow-[#F05323]/30"
            >
              Start a Project <ArrowRight size={18} />
            </button>

            <a
              href={PROFILE.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium text-base transition-colors"
            >
              <MessageSquare size={18} className="text-emerald-400" /> View Upwork Profile
            </a>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck size={16} /> Top Rated (100% Job Success)
            </span>
            <span>● Rate: {PROFILE.rate}</span>
            <span>● {PROFILE.availability}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
