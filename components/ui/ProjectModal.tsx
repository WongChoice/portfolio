'use client';

import React from 'react';
import { X, CheckCircle2, Terminal, Cpu } from 'lucide-react';
import { Project } from '@/lib/data';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="space-y-6">
          {/* Category Pill */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#F05323] bg-[#F05323]/10 px-3 py-1 rounded-full border border-[#F05323]/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              PRODUCTION ARCHITECTURE DEEP DIVE
            </span>
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Impact Banner */}
          <div className="bg-emerald-950/60 border border-emerald-800/40 rounded-xl p-4 flex items-start gap-3">
            <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-0.5">
                VERIFIED BUSINESS OUTCOME
              </div>
              <div className="text-sm font-semibold text-emerald-100">
                {project.impact}
              </div>
            </div>
          </div>

          {/* System Overview */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Cpu size={14} className="text-[#F05323]" /> SYSTEM OVERVIEW
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
              {project.description}
            </p>
          </div>

          {/* Architecture Details */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Terminal size={14} className="text-[#F05323]" /> ARCHITECTURAL BLUEPRINT
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
              {project.architectureOverview}
            </p>
          </div>

          {/* Workflow Sequence */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              EXECUTION SEQUENCE
            </h4>
            <div className="space-y-2">
              {project.workflow.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-950 p-3 rounded-lg border border-slate-800/60 text-xs font-mono text-slate-200">
                  <span className="w-6 h-6 rounded bg-[#F05323]/20 border border-[#F05323]/40 text-[#F05323] flex items-center justify-center shrink-0 font-bold">
                    0{idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack List */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              TECHNOLOGIES DEPLOYED
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span key={idx} className="text-xs font-mono bg-slate-950 text-slate-200 px-3 py-1.5 rounded-md border border-slate-800">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs transition-colors"
            >
              CLOSE INSPECTION
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
