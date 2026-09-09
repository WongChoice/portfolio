'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PROFILE } from '@/lib/data';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectScope: '',
    budget: '$1k - $3k'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl p-6 sm:p-8 relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F05323] mb-2">
                <ShieldCheck size={14} /> DIRECT ENGAGEMENT REQUEST
              </div>
              <h3 className="text-2xl font-bold text-white">Let&apos;s Build Your AI System</h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill out your core project requirements below for a rapid response.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">YOUR NAME / COMPANY</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins (CTO)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#F05323]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">EMAIL ADDRESS</label>
                <input
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#F05323]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">PROJECT OVERVIEW / BOTTLENECK</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe the workflow or AI agent functionality you want automated..."
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#F05323]"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">ESTIMATED BUDGET RANGE</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#F05323]"
                >
                  <option value="< $1k">&lt; $1,000 (Small Automation)</option>
                  <option value="$1k - $3k">$1,000 - $3,000 (Workflow Pipeline)</option>
                  <option value="$3k - $10k">$3,000 - $10,000 (Multi-Agent System)</option>
                  <option value="Hourly">Hourly Contract ({PROFILE.rate})</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#F05323] hover:bg-[#d94518] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#F05323]/25"
              >
                Submit Consultation Request <Send size={16} />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white">Request Received</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Thank you, {formData.name}. Ankit will review your automation scope and get back to you shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-lg bg-slate-800 text-white text-xs font-mono"
            >
              CLOSE WINDOW
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
