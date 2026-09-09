'use client';

import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function BeforeAfterSection() {
  const manualProcess = [
    "Manual copy-pasting between CRMs & spreadsheets",
    "Delayed follow-ups resulting in lost sales leads",
    "Human entry errors in PDF data extraction",
    "Fragile zap triggers breaking without error logs",
    "Human team bottlenecked by repetitive operational tasks"
  ];

  const automatedProcess = [
    "Autonomous AI agents operating silently 24/7",
    "Instant lead qualification & real-time response",
    "Deterministic OCR + LLM structured data parsing",
    "Self-healing workflows with automatic retries",
    "Engineering team focused exclusively on strategy & growth"
  ];

  return (
    <section className="py-24 bg-[#0D1527] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Transformation: <span className="text-gradient-orange">Manual vs. Autonomous</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            How custom production infrastructure changes your business operational velocity.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Before Card */}
          <div className="bg-slate-950/80 border border-red-950/60 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <span className="text-sm font-mono text-red-400 font-semibold uppercase">BEFORE MY INFRASTRUCTURE</span>
              <span className="px-2.5 py-1 bg-red-950 text-red-400 text-xs font-mono rounded">HIGH RISK / SLOW</span>
            </div>

            <ul className="space-y-4">
              {manualProcess.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-400">
                  <XCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After Card */}
          <div className="bg-slate-900 border border-emerald-900/60 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <span className="text-sm font-mono text-emerald-400 font-semibold uppercase">AFTER MY INFRASTRUCTURE</span>
              <span className="px-2.5 py-1 bg-emerald-950 text-emerald-400 text-xs font-mono rounded">24/7 AUTONOMOUS</span>
            </div>

            <ul className="space-y-4">
              {automatedProcess.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
