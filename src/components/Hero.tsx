/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SchoolLogo } from './SchoolLogo.tsx';
import { 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Calendar,
  Building2,
  Sparkles
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData.ts';

interface HeroProps {
  onOpenAdmissions: () => void;
  onOpenPortal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdmissions, onOpenPortal }) => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50/60 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
      {/* Decorative Subtle Background Arch Geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#0D47A1_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 pb-16 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Scholastic Identity & Call to Action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Academic Session Notice */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 text-blue-950 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-700" />
              <span>Admissions Open for Session 2026–2027</span>
              <span className="text-blue-400 font-normal">·</span>
              <span className="text-blue-800">Pre-School to Higher Secondary</span>
            </div>

            {/* Main Institutional Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-['Cinzel'] font-bold text-slate-900 leading-[1.18] tracking-tight text-balance">
                Nurturing Curious Minds, Cultivating Noble Character.
              </h1>
              <p className="text-sm font-['Amiri'] text-blue-900 text-lg sm:text-xl font-bold" dir="rtl">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ · رَبِّ زِدْنِى عِلْمًا
              </p>
            </div>

            {/* Mission Statement Excerpt */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Welcome to <strong className="text-slate-900 font-semibold">Islamia Students Academy</strong>. 
              Founded in 1994, our institution harmoniously unites rigorous STEM education, Cambridge and Board-accredited curricula, and transformative Islamic Tarbiyah to prepare empathetic leaders for the modern world.
            </p>

            {/* Interactive Action Hub */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenAdmissions}
                className="px-6 py-3.5 text-sm font-bold text-white bg-[#0D47A1] hover:bg-[#0A387E] rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#admissions"
                className="px-5 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-xl transition-colors flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-slate-500" />
                <span>Admission Criteria & Dates</span>
              </a>

              <button
                onClick={onOpenPortal}
                className="px-4 py-3.5 text-sm font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4 text-blue-700" />
                <span>Student Result Portal</span>
              </button>
            </div>

            {/* Quick Accreditation Badges */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>BISE & Cambridge Affiliated</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Integrated Hifz-ul-Quran Department</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Modern Science & Robotics Labs</span>
              </div>
            </div>

          </div>

          {/* Right Column: Campus Showcase with Official Emblem Seal */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              {/* Campus Image */}
              <img
                src="/assets/images/hero_islamia_campus_1793845747169.jpg"
                alt="Islamia Students Academy Central Campus and Courtyard"
                className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating Verified Emblem Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2.5">
                <SchoolLogo size={42} />
                <div className="text-left pr-1">
                  <div className="text-[11px] font-bold text-blue-950 uppercase tracking-wider font-['Cinzel']">
                    Official Crest
                  </div>
                  <div className="text-[10px] text-slate-600 font-medium">
                    Est. 1994 · Reg. Academic Council
                  </div>
                </div>
              </div>

              {/* Campus Caption Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-100 shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-wider font-bold text-blue-900 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-blue-700" />
                      <span>Main Educational Complex</span>
                    </div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5">
                      Academic Blocks, Science Wings & Hifz Sanctuary
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      3-Acre Purpose-Built Campus · Dedicated Girls & Boys Wings
                    </div>
                  </div>
                  <button
                    onClick={onOpenAdmissions}
                    className="shrink-0 px-3 py-1.5 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-sm"
                  >
                    Take Tour
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Claim-to-Proof Adjacency Row: 4 key institutional metrics */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {SCHOOL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-['Cinzel'] font-bold text-[#0D47A1] tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500">
                {stat.context}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
