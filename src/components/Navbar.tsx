/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SchoolLogo } from './SchoolLogo.tsx';
import { 
  Phone, 
  Clock, 
  Menu, 
  X, 
  GraduationCap, 
  Search,
  ExternalLink
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData.ts';

interface NavbarProps {
  onOpenAdmissions: () => void;
  onOpenPortal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmissions, onOpenPortal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Utility Ribbon for Institutional Contact & Notice */}
      <div className="bg-[#0A2552] text-white text-xs py-1.5 px-4 sm:px-8 border-b border-blue-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <a
              href={`tel:${SCHOOL_INFO.contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 font-medium hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{SCHOOL_INFO.contact.phone}</span>
            </a>
            <span className="hidden md:inline text-slate-500">|</span>
            <a
              href={`mailto:${SCHOOL_INFO.contact.email}`}
              className="hidden sm:flex items-center gap-1.5 font-medium hover:text-white transition-colors text-sky-300"
            >
              <span className="text-slate-400">Email:</span>
              <span className="underline underline-offset-2">{SCHOOL_INFO.contact.email}</span>
            </a>
            <span className="hidden lg:inline text-slate-500">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-300" />
              <span>{SCHOOL_INFO.contact.officeHours}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-amber-300 font-semibold uppercase tracking-wider text-[10px]">Notice:</span>
              <span className="text-slate-200 font-medium">Admissions Open 2026–2027</span>
            </div>
            <button
              onClick={onOpenPortal}
              className="text-white hover:text-amber-300 font-semibold underline underline-offset-2 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Student Portal</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar adhering strictly to Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark element */}
        <a 
          href="#" 
          className="flex items-center gap-3 group whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-700 rounded-md"
        >
          <SchoolLogo size={52} />
          <div className="flex flex-col">
            <span className="font-['Cinzel'] font-bold text-lg sm:text-xl tracking-tight text-[#0A2552] group-hover:text-blue-700 transition-colors">
              Islamia Students Academy
            </span>
            <span className="text-[11px] font-medium text-slate-500 font-['Amiri'] -mt-0.5 tracking-wide">
              رَبِّ زِدْنِى عِلْمًا · علم اور اخلاق کا مرکز
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <a
            href="#about"
            className="hover:text-[#0A2552] hover:underline underline-offset-8 decoration-2 decoration-blue-600 transition-colors whitespace-nowrap shrink-0"
          >
            About Us
          </a>
          <a
            href="#admissions"
            className="hover:text-[#0A2552] hover:underline underline-offset-8 decoration-2 decoration-blue-600 transition-colors whitespace-nowrap shrink-0"
          >
            Admissions
          </a>
          <a
            href="#academics"
            className="hover:text-[#0A2552] hover:underline underline-offset-8 decoration-2 decoration-blue-600 transition-colors whitespace-nowrap shrink-0"
          >
            Academics
          </a>
          <a
            href="#facilities"
            className="hover:text-[#0A2552] hover:underline underline-offset-8 decoration-2 decoration-blue-600 transition-colors whitespace-nowrap shrink-0"
          >
            Campus & Labs
          </a>
          <a
            href="#faculty"
            className="hover:text-[#0A2552] hover:underline underline-offset-8 decoration-2 decoration-blue-600 transition-colors whitespace-nowrap shrink-0"
          >
            Faculty
          </a>
          <a
            href="#contact"
            className="hover:text-[#0A2552] hover:underline underline-offset-8 decoration-2 decoration-blue-600 transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPortal}
            className="px-3.5 py-2 text-xs font-semibold text-[#0A2552] bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Search className="w-3.5 h-3.5 text-blue-700" />
            <span>Check Result</span>
          </button>

          <button
            onClick={onOpenAdmissions}
            className="px-4 py-2 text-xs font-bold text-white bg-[#0D47A1] hover:bg-[#0A387E] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Apply for Admission</span>
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-lg space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-semibold text-slate-800">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-700"
            >
              About Us
            </a>
            <a
              href="#admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-700"
            >
              Admissions Information
            </a>
            <a
              href="#academics"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-700"
            >
              Academics & Curricula
            </a>
            <a
              href="#facilities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-700"
            >
              Campus & Laboratories
            </a>
            <a
              href="#faculty"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-700"
            >
              Faculty Directory
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-700"
            >
              Contact & Visit
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-[#0A2552] bg-blue-50 border border-blue-200 rounded-lg"
            >
              Student Portal / Result Checker
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmissions();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-bold text-white bg-[#0D47A1] rounded-lg shadow-sm"
            >
              Apply for Admission 2026–2027
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
