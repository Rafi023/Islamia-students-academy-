/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SchoolLogo } from './SchoolLogo.tsx';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  GraduationCap, 
  ArrowUp
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData.ts';

interface FooterProps {
  onOpenAdmissions: () => void;
  onOpenPortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmissions, onOpenPortal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071E42] text-white border-t border-blue-950">
      
      {/* Top Banner Ribbon */}
      <div className="bg-[#051630] py-4 px-4 sm:px-8 border-b border-blue-900/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <SchoolLogo size={36} />
            <div className="text-slate-300">
              <strong className="text-white font-['Cinzel'] tracking-wide">Islamia Students Academy</strong>
              <span className="mx-2 text-slate-500">·</span>
              <span className="font-['Amiri'] text-sky-300 text-sm">رَبِّ زِدْنِى عِلْمًا</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <button
              onClick={onOpenPortal}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Online Result Verification
            </button>
            <span className="text-slate-600">·</span>
            <button
              onClick={onOpenAdmissions}
              className="text-sky-300 hover:text-white font-bold transition-colors cursor-pointer"
            >
              Admissions 2026–2027
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Institutional Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <SchoolLogo size={48} />
              <div>
                <h4 className="font-['Cinzel'] font-bold text-lg text-white">
                  Islamia Students Academy
                </h4>
                <p className="text-xs text-sky-300 font-['Amiri'] font-semibold" dir="rtl">
                  اسلامیہ سٹوڈنٹس اکیڈمی · علم اور اخلاق کا مرکز
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              Established in 1994, Islamia Students Academy is a premier institution dedicated to academic distinction in Board & Cambridge examinations, cutting-edge STEM literacy, and timeless Islamic Tarbiyah.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{SCHOOL_INFO.affiliation}</span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs uppercase font-bold tracking-widest text-sky-400">
              Quick Navigation
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us & Core Values
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-white transition-colors">
                  Admissions Information & Procedure
                </a>
              </li>
              <li>
                <a href="#position-holders" className="hover:text-white transition-colors">
                  9th & 10th Class Position Holders
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-white transition-colors">
                  Academic Curricula & Wings
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Science Labs & Research Library
                </a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-white transition-colors">
                  Distinguished Faculty Directory
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Campus Address & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Secretariat & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h5 className="text-xs uppercase font-bold tracking-widest text-sky-400">
              Admissions Secretariat & Director
            </h5>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
                <img
                  src="/assets/aistudio/IMG-20261105-WA0008_5d1c7f94.jpg"
                  alt={SCHOOL_INFO.director}
                  className="w-10 h-10 rounded-lg object-cover object-top border border-white/20 shrink-0 bg-slate-800"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/assets/images/director_syed_nouman_shah.jpg';
                  }}
                />
                <div>
                  <div className="text-[10px] text-sky-300 font-semibold uppercase tracking-wider">
                    School Director
                  </div>
                  <div className="text-sm font-bold text-white font-['Cinzel'] leading-tight">
                    {SCHOOL_INFO.director}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {SCHOOL_INFO.directorTitle}
                  </div>
                </div>
              </div>

              <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
                <img
                  src="/assets/aistudio/IMG-20261105-WA0009_a22a1e9c.jpg"
                  alt={SCHOOL_INFO.contact.inChargeName}
                  className="w-10 h-10 rounded-lg object-cover object-top border border-white/20 shrink-0 bg-slate-800"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/assets/images/sheikh_salman_khan_admissions.jpg';
                  }}
                />
                <div>
                  <div className="text-[10px] text-sky-300 font-semibold uppercase tracking-wider">
                    Admissions In-charge
                  </div>
                  <div className="text-sm font-bold text-white font-['Cinzel'] leading-tight">
                    {SCHOOL_INFO.contact.inChargeName}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {SCHOOL_INFO.contact.inChargeTitle}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.contact.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <a
                  href={`tel:${SCHOOL_INFO.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {SCHOOL_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${SCHOOL_INFO.contact.email}`}
                  className="hover:text-white transition-colors text-sky-300 underline underline-offset-2"
                >
                  {SCHOOL_INFO.contact.email}
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenAdmissions}
                  className="w-full py-2.5 px-4 text-xs font-bold text-[#071E42] bg-white hover:bg-sky-50 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <GraduationCap className="w-4 h-4 text-[#0D47A1]" />
                  <span>Start Admission Application</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Hairline & Legal Bar */}
        <div className="mt-12 pt-8 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Islamia Students Academy. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Reg. No: {SCHOOL_INFO.registrationNo}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
