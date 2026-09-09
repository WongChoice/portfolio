'use client';

import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE } from '@/lib/data';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-[#080C14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F05323]/10 border border-[#F05323]/30 text-[#F05323] text-xs font-mono uppercase tracking-wider mb-4">
            <Briefcase size={14} /> Software Engineering Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            10+ Years of <span className="text-gradient-orange">Enterprise Engineering</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Before specializing in AI and workflow automation, I built distributed cloud backend systems at scale.
          </p>
        </div>

        {/* Infrastructure Deployment Pipeline Visual Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-8 sm:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-slate-800">
          {EXPERIENCE.map((exp, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col sm:flex-row items-start ${
                idx % 2 === 0 ? 'sm:flex-row-reverse text-left' : 'text-left'
              }`}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-[#F05323] flex items-center justify-center text-[#F05323] shadow-lg shadow-[#F05323]/20 z-10">
                <Briefcase size={18} />
              </div>

              {/* Content Card */}
              <div className="w-full sm:w-[calc(50%-2.5rem)] ml-16 sm:ml-0 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold text-white">{exp.company}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F05323] bg-[#F05323]/10 px-3 py-1 rounded-full border border-[#F05323]/30">
                    <Calendar size={12} /> {exp.period}
                  </span>
                </div>

                <div className="text-sm font-semibold text-slate-300 mb-4">{exp.role}</div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#F05323] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
