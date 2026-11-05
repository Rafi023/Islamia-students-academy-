/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  FlaskConical, 
  BookOpen, 
  Building2, 
  Volleyball, 
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const [activeFacility, setActiveFacility] = useState<number>(0);

  const facilities = [
    {
      title: "Advanced STEM & Robotics Laboratories",
      category: "Empirical Sciences",
      image: "/src/assets/images/students_science_lab_1793845749002.jpg",
      description: "Fully equipped individual laboratories for Physics, Chemistry, Biology, and Computer Robotics. Students conduct hands-on experiments starting from middle school under senior science mentors.",
      features: [
        "Digital microcontrollers, Arduino and robotics kits",
        "Individual optical microscopes & titration stations",
        "Certified chemical safety fume hoods & showers",
        "Separate scheduled practical sessions for boys and girls"
      ]
    },
    {
      title: "Grand Academic Library & Digital Research Hall",
      category: "Scholarship & Inquiry",
      image: "/src/assets/images/campus_library_study_1793845748684.jpg",
      description: "A serene, cathedral-style sanctuary housing over 18,000 volumes across modern sciences, world literature, Islamic jurisprudence, encyclopedia collections, and high-speed research terminals.",
      features: [
        "18,000+ cataloged academic and reference titles",
        "Quiet individual carrels and collaborative seminar tables",
        "Digital archive subscriptions and journal access",
        "Rare manuscript and classical Arabic Lexicon corner"
      ]
    },
    {
      title: "Purpose-Built Islamic Architecture & Courtyards",
      category: "Campus Environment",
      image: "/src/assets/images/hero_islamia_campus_1793845747169.jpg",
      description: "A secure, green 3-acre gated campus designed with majestic Islamic geometric arches, spacious ventilated classrooms, natural sunlit courtyards, fountain gardens, and modern cafeteria facilities.",
      features: [
        "24/7 CCTV surveillance and biometric attendance gates",
        "Spacious central congregational prayer sanctuary",
        "Separate dedicated academic wings for boys and girls",
        "Air-conditioned fleet of transport with GPS tracking"
      ]
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#0D47A1] bg-sky-50 px-3 py-1 rounded-md border border-sky-200">
            <span>Campus Infrastructure & Laboratories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Cinzel'] font-bold text-slate-900 tracking-tight">
            World-Class Campus Facilities
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Designed to foster intellectual curiosity, physical vitality, and deep contemplative scholarship.
          </p>
        </div>

        {/* Feature Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {facilities.map((fac, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFacility(idx)}
              className={`p-5 rounded-2xl text-left transition-all border cursor-pointer ${
                activeFacility === idx
                  ? 'border-[#0D47A1] bg-sky-50/60 shadow-sm ring-1 ring-[#0D47A1]'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-sky-700">
                {fac.category}
              </div>
              <div className="text-base font-bold text-slate-900 font-['Cinzel'] mt-1 leading-snug">
                {fac.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Facility Spotlight Display */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm">
          
          {/* Facility Photo */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[360px]">
            <img
              src={facilities[activeFacility].image}
              alt={facilities[activeFacility].title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 text-white text-xs font-semibold bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
              Islamia Students Academy Campus Facility
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  {facilities[activeFacility].category}
                </span>
                <h3 className="text-2xl font-bold font-['Cinzel'] text-slate-900 leading-tight">
                  {facilities[activeFacility].title}
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {facilities[activeFacility].description}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Key Specifications:
                </div>
                {facilities[activeFacility].features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Conforms to National Laboratory Safety Standards</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
