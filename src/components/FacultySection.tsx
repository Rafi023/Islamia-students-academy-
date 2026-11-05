/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Clock, 
  Sparkles,
  Users,
  Languages,
  CheckCircle2,
  Quote,
  MessageCircle,
  Mail
} from 'lucide-react';
import { FACULTY_MEMBERS, FacultyMember, SCHOOL_INFO } from '../data/schoolData.ts';

export const FacultySection: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const departments = [
    'All',
    'Languages & Humanities',
    'Physical Sciences',
    'Life Sciences',
    'Islamic Studies & Tajweed',
    'Computer Science & AI',
    'Executive Leadership',
    'Admissions & Secretariat'
  ];

  const filteredFaculty = selectedDept === 'All'
    ? FACULTY_MEMBERS
    : FACULTY_MEMBERS.filter(f => f.department === selectedDept || (selectedDept === 'Languages & Humanities' && (f.department.includes('Languages') || f.department.includes('Humanities'))));

  return (
    <section id="faculty" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#0D47A1] bg-sky-100/70 px-3 py-1 rounded-md border border-sky-200">
              <Users className="w-3.5 h-3.5 text-[#0D47A1]" />
              <span>Dedicated Mentors & Faculty Scholars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-['Cinzel'] font-bold text-slate-900 tracking-tight">
              Distinguished Faculty Directory
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Our educators hold prestigious degrees from Pakistan's and the world's leading universities, combining scholarly rigor with personal student mentorship and Islamic Tarbiyah.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            {departments.slice(0, 5).map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedDept === dept
                    ? 'bg-[#0D47A1] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* DEDICATED ENGLISH LANGUAGE INSTRUCTOR SPOTLIGHT: MR. RAFIULLAH */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0A2552] via-[#0D47A1] to-[#08234D] text-white shadow-xl border border-blue-900/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Instructor Portrait & Credential Tag */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center text-center">
              <div className="relative group">
                <img
                  src="/assets/aistudio/IMG_20250119_180304_129b5514.jpg"
                  alt="Mr. Rafiullah - English Language Instructor"
                  className="w-52 h-64 sm:w-56 sm:h-72 rounded-2xl object-cover object-[center_15%] shadow-2xl border-4 border-white/90 bg-slate-800"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/src/assets/images/mr_rafiullah_instructor.jpg';
                  }}
                />
                <div className="absolute -bottom-3 right-3 bg-white text-[#0D47A1] px-3 py-1 rounded-full text-[11px] font-bold shadow-md border border-slate-200 flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5 text-sky-600" />
                  <span>NUML Islamabad</span>
                </div>
              </div>

              <div className="mt-5 space-y-1 text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-300">
                  English Language Department
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-['Cinzel'] text-white">
                  Mr. Rafiullah
                </h3>
                <div className="text-xs font-semibold text-sky-200">
                  English Language Instructor
                </div>
                <div className="text-[11px] text-slate-200 max-w-xs font-medium">
                  BS English from NUML University Islamabad
                </div>
              </div>
            </div>

            {/* Department Vision & Specialized Pedagogical Focus */}
            <div className="lg:col-span-8 space-y-5 border-t lg:border-t-0 lg:border-l border-white/15 pt-6 lg:pt-0 lg:pl-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-300 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  <BookOpen className="w-3.5 h-3.5 text-sky-300" />
                  <span>Faculty Spotlight · English Language & Communication</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-['Cinzel'] text-white leading-snug">
                  Fostering Articulate Thinkers, Eloquent Writers & Board Distinction
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Under the instruction of <strong className="text-white">Mr. Rafiullah</strong> (BS English from the prestigious <em>National University of Modern Languages - NUML Islamabad</em>), our English curriculum bridges foundational grammar with communicative eloquence and rigorous matriculation examination prep.
              </p>

              {/* Four Core Pedagogical Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs font-bold text-white block">9th & 10th Board English Mastery</strong>
                    <span className="text-[11px] text-slate-300">Full paper presentation drills, translation mechanics, and 100% board question syllabus.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs font-bold text-white block">Functional Grammar & Syntax</strong>
                    <span className="text-[11px] text-slate-300">In-depth instruction in tense structures, active/passive voice, direct/indirect, and idioms.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs font-bold text-white block">Spoken Fluency & Pronunciation</strong>
                    <span className="text-[11px] text-slate-300">Classroom discussions, phonetics coaching, and conversational confidence drills.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs font-bold text-white block">Analytical & Creative Writing</strong>
                    <span className="text-[11px] text-slate-300">Structured paragraph composition, formal correspondence, précis, and essay crafting.</span>
                  </div>
                </div>
              </div>

              {/* Direct Instructor Contact & Advisory */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:khrafiullah2@gmail.com?subject=English%20Language%20Inquiry%20-%20Islamia%20Students%20Academy`}
                  className="px-4 py-2.5 rounded-xl bg-white text-[#0D47A1] text-xs font-bold hover:bg-sky-50 transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5 text-[#0D47A1]" />
                  <span>Contact Mr. Rafiullah (English Instructor)</span>
                </a>
                <a
                  href="#contact"
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/20"
                >
                  Schedule Faculty Parent Meeting
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Faculty Grid with Photos & Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFaculty.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                    {member.department}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{member.experience}</span>
                  </span>
                </div>

                <div className="flex items-start gap-3.5">
                  {member.imagePath ? (
                    <div className="w-13 h-15 rounded-xl overflow-hidden border border-slate-200 shadow-2xs shrink-0 bg-slate-100">
                      <img
                        src={member.imagePath}
                        alt={member.name}
                        className="w-full h-full object-cover object-[center_15%]"
                        onError={(e) => {
                          if (member.id === 'fac-rafiullah') {
                            (e.currentTarget as HTMLImageElement).src = '/src/assets/images/mr_rafiullah_instructor.jpg';
                          } else if (member.id === 'fac-0') {
                            (e.currentTarget as HTMLImageElement).src = '/src/assets/images/director_syed_nouman_shah.jpg';
                          } else if (member.id === 'fac-salman') {
                            (e.currentTarget as HTMLImageElement).src = '/src/assets/images/sheikh_salman_khan_admissions.jpg';
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-13 h-15 rounded-xl bg-sky-50 border border-sky-200 text-[#0D47A1] font-bold font-['Cinzel'] text-sm flex items-center justify-center shrink-0 shadow-2xs">
                      {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                  )}

                  <div className="space-y-0.5">
                    <h3 className="text-base sm:text-lg font-bold font-['Cinzel'] text-slate-900 leading-snug">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#0D47A1]">
                      {member.title}
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <div className="flex items-start gap-1.5">
                    <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-800">Qualification:</strong> {member.qualification}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Award className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-800">Specialization:</strong> {member.specialization}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Academic Guidance & Tarbiyah</span>
                <span className="text-[#0D47A1] font-bold">Office Hours: Mon–Thu</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

