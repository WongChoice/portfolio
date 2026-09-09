'use client';

import React from 'react';
import { Zap, Check, ArrowRight } from 'lucide-react';

interface AutomationProps {
  onOpenContact: () => void;
}

export default function AutomationSection({ onOpenContact }: AutomationProps) {
  const automationCapabilities = [
    { name: "Inbound Lead Qualification & Enrichment", speed: "Instant" },
    { name: "CRM Contact & Pipeline Synchronization", speed: "Real-time" },
    { name: "PDF Invoice & Document Data Extraction", speed: "Automated" },
    { name: "Autonomous Customer Email Response Drafting", speed: "24/7 Exec" },
    { name: "Multi-Source Competitor Price Scraping", speed: "Scheduled" },
    { name: "Calendar Scheduling & Conflict Resolution", speed: "Bi-directional" },
    { name: "Database ETL & Schema Cleaning", speed: "High-Throughput" },
    { name: "Multi-Agent Research & Summary Generation", speed: "Sub-Minute" }
  ];

  return (
    <section className="py-24 bg-[#080C14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F05323]/10 border border-[#F05323]/30 text-[#F05323] text-xs font-mono uppercase tracking-wider mb-4">
            <Zap size={14} /> Operational Blueprint
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            If Your Team Does It Repeatedly, <br />
            <span className="text-gradient-orange">It Can Probably Be Automated.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Reclaim dozens of operational hours every week with production pipelines designed for uninterrupted reliability.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {automationCapabilities.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 hover:border-[#F05323]/50 rounded-xl p-5 transition-all hover:bg-slate-900 group flex flex-col justify-between"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-6 h-6 rounded-md bg-[#F05323]/20 text-[#F05323] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} />
                </div>
                <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                  {item.name}
                </span>
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>EXECUTION:</span>
                <span className="text-[#F05323]">{item.speed}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="text-center">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#F05323] hover:bg-[#d94518] text-white font-semibold text-base transition-all transform active:scale-95 shadow-xl shadow-[#F05323]/20"
          >
            Automate My Custom Business Workflow <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
