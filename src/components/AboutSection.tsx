/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SchoolLogo } from './SchoolLogo.tsx';
import { 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  FlaskConical, 
  Users, 
  BookOpen, 
  Compass, 
  ScrollText,
  Quote
} from 'lucide-react';
import { ABOUT_CONTENT, SCHOOL_INFO } from '../data/schoolData.ts';

export const AboutSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-800" />,
    Award: <Award className="w-5 h-5 text-blue-800" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-blue-800" />,
    FlaskConical: <FlaskConical className="w-5 h-5 text-blue-800" />,
    Users: <Users className="w-5 h-5 text-blue-800" />,
  };

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
            <span>Institutional Profile & Ethos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Cinzel'] font-bold text-slate-900 tracking-tight">
            About Islamia Students Academy
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Where classical Islamic scholarship, upright moral leadership, and premier contemporary scientific inquiry coalesce to educate tomorrow’s pioneers.
          </p>
        </div>

        {/* School History & Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800">Our Heritage Since 1994</span>
              <h3 className="text-2xl font-['Cinzel'] font-bold text-slate-900">
                Three Decades of Unwavering Scholastic Distinction
              </h3>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              {ABOUT_CONTENT.history.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-4">
              <SchoolLogo size={54} />
              <div className="text-xs space-y-0.5">
                <div className="font-bold text-slate-900 font-['Cinzel'] uppercase tracking-wider">
                  Official Affiliation & Registration
                </div>
                <div className="text-slate-600">{SCHOOL_INFO.affiliation}</div>
                <div className="text-blue-900 font-medium">Govt. Reg. No: {SCHOOL_INFO.registrationNo}</div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Mission Statement */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-50/70 to-slate-50 rounded-2xl border border-blue-100 shadow-sm space-y-3 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-900 text-white rounded-lg shadow-sm">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-['Cinzel'] text-slate-900">Our Mission Statement</h4>
                  <span className="text-xs font-semibold text-blue-900 font-['Amiri']">رسالتنا التعليمية والتربوية</span>
                </div>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed pt-1">
                "{ABOUT_CONTENT.mission}"
              </p>
            </div>

            {/* Vision Statement */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-50 to-amber-50/40 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-900 text-white rounded-lg shadow-sm">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-['Cinzel'] text-slate-900">Our Vision</h4>
                  <span className="text-xs font-semibold text-slate-600 font-['Amiri']">رؤيتنا المستقبلية</span>
                </div>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed pt-1">
                "{ABOUT_CONTENT.vision}"
              </p>
            </div>

          </div>

        </div>

        {/* Core Values Section */}
        <div className="space-y-8 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800">Our Guiding Pillars</span>
            <h3 className="text-2xl sm:text-3xl font-['Cinzel'] font-bold text-slate-900">
              Core Values of Islamia Students Academy
            </h3>
            <p className="text-sm text-slate-600">
              The ethical compass that informs every classroom lecture, laboratory experiment, and extracurricular pursuit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_CONTENT.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-blue-50 rounded-lg">
                    {iconMap[val.iconName] || <Award className="w-5 h-5 text-blue-800" />}
                  </div>
                  <span className="font-['Amiri'] text-lg font-bold text-blue-900" dir="rtl">
                    {val.arabic}
                  </span>
                </div>
                
                <h4 className="text-base font-bold text-slate-900 font-['Cinzel']">
                  {val.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}

            {/* Sixth honorary card: Tarbiyah & Hifz Integration */}
            <div className="p-6 rounded-xl border border-blue-200 bg-gradient-to-br from-blue-900 to-[#0A2552] text-white shadow-md space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-white/10 rounded-lg">
                    <ScrollText className="w-5 h-5 text-amber-300" />
                  </div>
                  <span className="font-['Amiri'] text-xl font-bold text-amber-200" dir="rtl">
                    العِلْمُ وَالعَمَل
                  </span>
                </div>
                <h4 className="text-base font-bold text-white font-['Cinzel']">
                  Knowledge & Action
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Knowledge without moral character is incomplete; virtue without knowledge is inert. At Islamia Students Academy, both walk together in every lesson.
                </p>
              </div>
              <div className="text-[11px] text-amber-200 font-semibold tracking-wide border-t border-white/10 pt-3">
                Motto: {SCHOOL_INFO.mottoArabic} ({SCHOOL_INFO.mottoEnglish})
              </div>
            </div>
          </div>
        </div>

        {/* Executive Director's Official Address Spotlight */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0A2552] via-[#0D47A1] to-[#082046] text-white shadow-xl border border-blue-900/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Director Photo & Credential Block */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative">
                <img
                  src="/assets/aistudio/IMG-20261105-WA0008_5d1c7f94.jpg"
                  alt="Director Syed Nouman Shah - Islamia Students Academy"
                  className="w-52 h-64 sm:w-60 sm:h-72 rounded-2xl object-cover object-top shadow-2xl border-4 border-white/90 bg-slate-800"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/assets/images/director_syed_nouman_shah.jpg';
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-3 right-2 bg-blue-950 text-white p-2 rounded-xl shadow border border-white/20">
                  <SchoolLogo size={28} />
                </div>
              </div>
              <div className="mt-4 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-300">
                  School Directorate & Governance
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-['Cinzel'] text-white">
                  Syed Nouman Shah
                </h3>
                <div className="text-xs font-semibold text-sky-200">
                  Director of the School
                </div>
                <div className="text-[11px] text-slate-300">
                  M.A. Sociology · Head of Institutional Council
                </div>
              </div>
            </div>

            {/* Director's Welcome & Strategic Address */}
            <div className="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l border-white/15 pt-6 lg:pt-0 lg:pl-8">
              <div className="flex items-center gap-2 text-sky-300">
                <Quote className="w-8 h-8 text-sky-400 opacity-70" />
                <span className="text-xs uppercase tracking-widest font-bold">Director's Welcome Address</span>
              </div>
              
              <h4 className="text-xl sm:text-2xl font-['Cinzel'] font-bold text-white leading-snug">
                "We do not merely teach textbooks; we shape souls, instill values, and inspire lifelong scholarly inquiry."
              </h4>

              <div className="space-y-3 text-sm text-slate-200 leading-relaxed">
                <p>
                  Dear prospective parents and students, when a child enters the gates of Islamia Students Academy, they embark upon an intellectual and spiritual journey grounded in our sacred motto: <em className="text-sky-300 font-bold font-['Amiri'] text-base">رَبِّ زِدْنِى عِلْمًا</em>.
                </p>
                <p>
                  In a rapidly evolving world marked by artificial intelligence, empirical sciences, and societal shifts, young minds require more than technical agility—they need an incorruptible moral compass. Under our institutional vision, our dedicated faculty ensures that our students achieve stellar marks in board examinations, gain entrance into elite universities, and simultaneously stand tall as upright, modest, and compassionate citizens.
                </p>
                <p className="font-medium text-white">
                  We invite you to partner with us in nurturing your child into an enlightened leader of tomorrow.
                </p>
              </div>

              <div className="pt-2 text-xs text-sky-200 font-medium">
                — <strong>Syed Nouman Shah</strong>, Director, Islamia Students Academy
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
