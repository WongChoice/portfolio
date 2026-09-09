'use client';

import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, ShieldAlert, ArrowRight, RefreshCw, Zap } from 'lucide-react';

export default function ProblemSection() {
  const [activeTab, setActiveTab] = useState<'demo' | 'production'>('production');

  const failureScenarios = [
    { title: "API Timeout / Rate Limit", detail: "Uncaught HTTP 429 causes entire agent pipeline to crash mid-step." },
    { title: "Lost Context & State Loss", detail: "Multi-step workflows forget historical output after dynamic memory overflow." },
    { title: "Hallucinated Output Format", detail: "LLM returns markdown instead of strict JSON, breaking downstream API payloads." },
    { title: "Duplicate Executions", detail: "Retries fire repeatedly without idempotency, double-booking CRM records." },
    { title: "Authentication Breakages", detail: "Expired OAuth tokens or unhandled cookie state stall web scraping jobs." },
    { title: "Silent Webhook Failures", detail: "No alerting infrastructure when third-party software updates endpoint schemas." }
  ];

  const engineeringSolutions = [
    { title: "Stateful LangGraph Orchestration", detail: "Persistent memory check-pointing prevents state loss on step interruptions." },
    { title: "Pydantic Schema Validation", detail: "Strict output verification enforces 100% deterministic JSON objects." },
    { title: "Idempotency & Lock Locks", detail: "Distributed lock keys in Redis guarantee tasks execute exactly once." },
    { title: "Adaptive Fallback Routing", detail: "Instant automatic failover from Claude 3.5 to GPT-4o if dynamic rate limits hit." },
    { title: "Self-Healing Scraping Sessions", detail: "Playwright auto-recalculates DOM selectors and updates cookies live." },
    { title: "Real-time Telemetry & Alerts", detail: "Automated Slack and webhook logging instantly flags unexpected edge cases." }
  ];

  return (
    <section id="problem" className="py-24 bg-[#0A1120] relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-800/40 text-red-400 text-xs font-mono uppercase tracking-wider mb-4">
            <AlertTriangle size={14} /> The Production Gap
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Most AI Automations Work in a Demo. <br />
            <span className="text-[#F05323]">Production is Where They Break.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Demo scripts ignore race conditions, rate limits, dynamic schema changes, and missing fallback logic. I build production systems engineered specifically around those failures.
          </p>
        </div>

        {/* Toggle Selector */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-900 p-1.5 rounded-xl border border-slate-800 flex items-center gap-2">
            <button
              onClick={() => setActiveTab('demo')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'demo'
                  ? 'bg-red-500/20 text-red-400 border border-red-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ShieldAlert size={16} /> Vulnerable Script (Demo)
            </button>
            <button
              onClick={() => setActiveTab('production')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'production'
                  ? 'bg-[#F05323] text-white shadow-lg shadow-[#F05323]/25'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Zap size={16} /> Production Architecture (My Standard)
            </button>
          </div>
        </div>

        {/* Dynamic Card Display */}
        {activeTab === 'demo' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {failureScenarios.map((item, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-red-900/30 rounded-xl p-6 relative hover:border-red-500/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-red-950/80 border border-red-800/50 flex items-center justify-center text-red-400 mb-4">
                  <AlertTriangle size={18} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.detail}</p>
                <span className="mt-4 block text-[11px] font-mono text-red-400/80">STATUS: VULNERABLE</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringSolutions.map((item, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-emerald-900/40 rounded-xl p-6 relative hover:border-[#F05323]/60 transition-all shadow-md">
                <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400 mb-4">
                  <CheckCircle size={18} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.detail}</p>
                <span className="mt-4 block text-[11px] font-mono text-emerald-400">STATUS: RESILIENT (24/7)</span>
              </div>
            ))}
          </div>
        )}

        {/* Transition Tagline */}
        <div className="mt-12 text-center bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-lg font-semibold text-white">Need an automation that survives real-world traffic?</h4>
            <p className="text-sm text-slate-400">My Amazon backend engineering experience ensures robust exception handling from day one.</p>
          </div>
          <a
            href="#architecture"
            className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors"
          >
            See System Blueprint <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
