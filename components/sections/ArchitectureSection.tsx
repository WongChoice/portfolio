'use client';

import React, { useState } from 'react';
import { Cpu, Server, Database, Globe, RefreshCcw, CheckCircle2 } from 'lucide-react';

interface ArchNode {
  id: string;
  name: string;
  category: string;
  description: string;
  tech: string;
  purpose: string;
}

export default function ArchitectureSection() {
  const [selectedNode, setSelectedNode] = useState<ArchNode>({
    id: "agent",
    name: "LangGraph Orchestrator",
    category: "AI Reasoning Layer",
    description: "Stateful agent cluster executing non-deterministic decision paths with explicit human-in-the-loop fallback nodes.",
    tech: "LangGraph, Python, Claude 3.5 Sonnet",
    purpose: "Maintains conversational and state memory across multi-step execution chains."
  });

  const nodes: ArchNode[] = [
    {
      id: "event",
      name: "Business Event / Webhook",
      category: "Ingestion Layer",
      description: "Captures inbound triggers from HubSpot, Stripe, email, or schedule triggers.",
      tech: "FastAPI Webhooks, AWS API Gateway",
      purpose: "Validates incoming payload signatures and normalizes JSON formats."
    },
    {
      id: "agent",
      name: "LangGraph Orchestrator",
      category: "AI Reasoning Layer",
      description: "Stateful agent cluster executing non-deterministic decision paths with explicit fallback logic.",
      tech: "LangGraph, Python, Claude API",
      purpose: "Routes tasks, interprets prompt goals, and invokes exact tool contracts."
    },
    {
      id: "n8n",
      name: "n8n / Enterprise Workflow",
      category: "Execution Layer",
      description: "Handles deterministic data routing, API call retries, and high-volume integrations.",
      tech: "n8n Self-Hosted, Docker, Redis",
      purpose: "Orchestrates API tools without exhausting LLM context windows."
    },
    {
      id: "tools",
      name: "Browser & Document Tools",
      category: "Tool Layer",
      description: "Executes web scraping, OCR extraction, and headless browser sessions.",
      tech: "Playwright, Tesseract OCR, Pydantic",
      purpose: "Extracts unstructured dynamic site content into clean database records."
    },
    {
      id: "db",
      name: "Vector & Relational Storage",
      category: "Persistence Layer",
      description: "Stores embeddings, transactional data, execution logs, and check-pointed agent state.",
      tech: "PostgreSQL, Pinecone / Qdrant, Redis",
      purpose: "Provides semantic retreival (RAG) and instant historical playback."
    }
  ];

  return (
    <section id="architecture" className="py-24 bg-[#080C14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F05323]/10 border border-[#F05323]/30 text-[#F05323] text-xs font-mono uppercase tracking-wider mb-4">
            <Cpu size={14} /> Interactive System Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            From Prompt to <span className="text-gradient-orange">Production Infrastructure</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Hover or click any node in the pipeline below to inspect the real-world tech stack and execution purpose.
          </p>
        </div>

        {/* Architecture Pipeline Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Node Selector Diagram */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
              PIPELINE EXECUTION FLOW (INBOUND → OUTCOME)
            </div>

            {nodes.map((node, idx) => {
              const isSelected = selectedNode.id === node.id;
              return (
                <div key={node.id} className="relative">
                  {idx > 0 && (
                    <div className="w-0.5 h-4 bg-gradient-to-b from-[#F05323] to-slate-700 ml-8 my-1"></div>
                  )}
                  <button
                    onClick={() => setSelectedNode(node)}
                    onMouseEnter={() => setSelectedNode(node)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-slate-900 border-[#F05323] shadow-lg shadow-[#F05323]/15 translate-x-1'
                        : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                        isSelected ? 'bg-[#F05323] text-white' : 'bg-slate-800 text-slate-400'
                      }`}>
                        0{idx + 1}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{node.name}</div>
                        <div className="text-xs font-mono text-slate-400">{node.category}</div>
                      </div>
                    </div>

                    <span className={`text-xs font-mono px-2.5 py-1 rounded ${
                      isSelected ? 'bg-[#F05323]/20 text-[#F05323] border border-[#F05323]/40' : 'bg-slate-900 text-slate-500'
                    }`}>
                      {isSelected ? 'INSPECTING' : 'CLICK TO VIEW'}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Node Inspector Panel */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 sticky top-28 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                ACTIVE NODE INSPECTOR
              </div>
              <span className="text-xs font-mono text-slate-500">{selectedNode.category}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{selectedNode.name}</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">{selectedNode.description}</p>

            <div className="space-y-4 font-mono text-xs">
              <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
                <span className="text-slate-500 block mb-1">TECH STACK:</span>
                <span className="text-[#F05323] font-semibold">{selectedNode.tech}</span>
              </div>

              <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
                <span className="text-slate-500 block mb-1">ENGINEERING PURPOSE:</span>
                <span className="text-slate-200">{selectedNode.purpose}</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 size={14} /> Production Certified
              </span>
              <span>100% Deterministic Output</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
