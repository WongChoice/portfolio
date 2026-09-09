'use client';

import React from 'react';
import { Bot, Zap, FileText, Database, Code, Cpu, ArrowUpRight } from 'lucide-react';
import { SERVICES, Service } from '@/lib/data';

interface ServicesProps {
  onOpenContact: () => void;
}

export default function ServicesSection({ onOpenContact }: ServicesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot size={24} className="text-[#F05323]" />;
      case 'Zap': return <Zap size={24} className="text-[#F05323]" />;
      case 'FileText': return <FileText size={24} className="text-[#F05323]" />;
      case 'Database': return <Database size={24} className="text-[#F05323]" />;
      case 'Code': return <Code size={24} className="text-[#F05323]" />;
      case 'Cpu': return <Cpu size={24} className="text-[#F05323]" />;
      default: return <Bot size={24} className="text-[#F05323]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0D1527] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F05323]/10 border border-[#F05323]/30 text-[#F05323] text-xs font-mono uppercase tracking-wider mb-4">
            Core Engineering Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Autonomous Systems Built for <span className="text-gradient-orange">Real Business Outcomes</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Every service is tailored around high reliability, zero data loss, and seamless operational handoffs.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv: Service) => (
            <div
              key={srv.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-[#F05323]/60 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[#F05323]/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-[#F05323]/40 transition-colors">
                    {getIcon(srv.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase">Enterprise</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F05323] transition-colors">
                  {srv.title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {srv.description}
                </p>

                {/* Measurable Outcomes */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Key Deliverables:</div>
                  {srv.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F05323]"></span>
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {srv.tools.map((t, idx) => (
                    <span key={idx} className="text-[11px] font-mono bg-slate-950 text-slate-300 px-2.5 py-1 rounded border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onOpenContact}
                  className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-[#F05323] text-white font-medium text-xs transition-colors flex items-center justify-center gap-2"
                >
                  Discuss {srv.title} <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
