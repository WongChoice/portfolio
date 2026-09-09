'use client';

import React, { useState } from 'react';
import { Cpu, Terminal } from 'lucide-react';
import { TECH_CATEGORIES } from '@/lib/data';

export default function TechStackSection() {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[#0D1527] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F05323]/10 border border-[#F05323]/30 text-[#F05323] text-xs font-mono uppercase tracking-wider mb-4">
            <Cpu size={14} /> Modular Tech Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interconnected <span className="text-gradient-orange">Technology Ecosystem</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Hover over any dynamic technology node to highlight its operational node connections across my architecture.
          </p>
        </div>

        {/* Tech Grid Clusters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECH_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#F05323] mb-4 pb-3 border-b border-slate-800">
                <Terminal size={14} /> {cat.name.toUpperCase()}
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((item, itemIdx) => {
                  const isHovered = activeTech === item;
                  return (
                    <button
                      key={itemIdx}
                      onMouseEnter={() => setActiveTech(item)}
                      onMouseLeave={() => setActiveTech(null)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all border ${
                        isHovered
                          ? 'bg-[#F05323] text-white border-[#F05323] shadow-md shadow-[#F05323]/30 scale-105'
                          : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-600'
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
