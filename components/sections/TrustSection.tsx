'use client';

import React from 'react';
import { Award, CheckCircle2, DollarSign, Briefcase, Clock, ShieldCheck, Quote, Star } from 'lucide-react';
import { PROFILE, TESTIMONIALS } from '@/lib/data';

export default function TrustSection() {
  return (
    <section className="py-20 bg-[#0D1527] border-y border-slate-800 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#F05323]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upwork Telemetry Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <ShieldCheck size={14} /> Verified Upwork Credentials
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Engineering Authority Measured in Outcomes
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Real data from independent client contracts on Upwork.
          </p>
        </div>

        {/* System Telemetry Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-center">
            <div className="inline-flex p-2 rounded-lg bg-[#F05323]/10 text-[#F05323] mb-2">
              <Award size={20} />
            </div>
            <div className="text-lg font-bold text-white">{PROFILE.stats.badge}</div>
            <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">Upwork Status</div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-center">
            <div className="inline-flex p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mb-2">
              <CheckCircle2 size={20} />
            </div>
            <div className="text-lg font-bold text-white">{PROFILE.stats.jobSuccess}</div>
            <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">Job Success</div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-center">
            <div className="inline-flex p-2 rounded-lg bg-[#F05323]/10 text-[#F05323] mb-2">
              <DollarSign size={20} />
            </div>
            <div className="text-lg font-bold text-white">{PROFILE.stats.totalEarnings}</div>
            <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">Verified Earned</div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-center">
            <div className="inline-flex p-2 rounded-lg bg-sky-500/10 text-sky-400 mb-2">
              <Briefcase size={20} />
            </div>
            <div className="text-lg font-bold text-white">{PROFILE.stats.jobsDone} Jobs</div>
            <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">5-Star Completed</div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-center">
            <div className="inline-flex p-2 rounded-lg bg-amber-500/10 text-amber-400 mb-2">
              <Clock size={20} />
            </div>
            <div className="text-lg font-bold text-white">{PROFILE.stats.experienceYears}</div>
            <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">Software Arch</div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-center">
            <div className="inline-flex p-2 rounded-lg bg-purple-500/10 text-purple-400 mb-2">
              <ShieldCheck size={20} />
            </div>
            <div className="text-lg font-bold text-white">Amazon</div>
            <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">Engineering</div>
          </div>
        </div>

        {/* Real Upwork Client Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={28} className="text-slate-700" />
                </div>
                <p className="text-slate-200 text-base italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-white">{t.client}</div>
                  <div className="text-slate-400 font-mono">{t.role}</div>
                </div>
                <span className="px-2.5 py-1 bg-emerald-950 text-emerald-400 rounded border border-emerald-800/50 font-mono">
                  VERIFIED REVIEW
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
