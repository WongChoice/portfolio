'use client';

import React, { useState } from 'react';
import { Layers, ArrowRight, CheckCircle2, Server, Terminal } from 'lucide-react';
import { PROJECTS, Project } from '@/lib/data';
import ProjectModal from '../ui/ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#080C14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F05323]/10 border border-[#F05323]/30 text-[#F05323] text-xs font-mono uppercase tracking-wider mb-4">
            <Layers size={14} /> Verified Engineering Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Systems Built & <span className="text-gradient-orange">Deployed</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Detailed technical breakdowns of real AI infrastructure, browser automation agents, and multi-app workflows.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-10">
          {PROJECTS.map((project: Project, index: number) => (
            <div
              key={project.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-8 transition-all hover:shadow-xl group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Side Info */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono text-[#F05323] bg-[#F05323]/10 px-3 py-1 rounded-full border border-[#F05323]/30">
                      CASE STUDY 0{index + 1}
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-[#F05323] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Highlight */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-emerald-900/30 flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-emerald-200 font-medium">
                      <strong className="text-white block font-semibold mb-0.5">Measurable Outcome:</strong>
                      {project.impact}
                    </div>
                  </div>

                  {/* Tech Pill List */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-xs font-mono bg-slate-950 text-slate-300 px-3 py-1 rounded-md border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side Workflow Step Visualization */}
                <div className="lg:col-span-5 bg-slate-950 p-6 rounded-xl border border-slate-800/80 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-800">
                    <span className="flex items-center gap-1.5 text-[#F05323]">
                      <Terminal size={14} /> ARCHITECTURE PIPELINE
                    </span>
                    <span>100% ACTIVE</span>
                  </div>

                  {project.workflow.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-300">
                      <span className="w-5 h-5 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-[10px] text-slate-400">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full mt-4 py-2.5 rounded-lg bg-[#F05323]/10 hover:bg-[#F05323] text-[#F05323] hover:text-white font-sans text-xs font-medium border border-[#F05323]/30 transition-all flex items-center justify-center gap-2"
                  >
                    Inspect Full System Architecture <ArrowRight size={14} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal for Deep Technical Specs */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
