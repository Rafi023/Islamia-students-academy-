/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BookOpen, 
  FlaskConical, 
  Cpu, 
  ScrollText, 
  Sparkles, 
  CheckCircle,
  GraduationCap,
  Layers
} from 'lucide-react';

export const AcademicsSection: React.FC = () => {
  const [selectedWing, setSelectedWing] = useState<'primary' | 'middle' | 'matric' | 'fsc' | 'hifz'>('matric');

  const wings = [
    {
      id: 'primary',
      title: 'Primary Wing',
      grades: 'Grades 1 – 5',
      icon: <Layers className="w-5 h-5" />,
      tagline: 'Foundations of literacy, numeracy & moral character',
      description: 'An experiential, child-centric learning environment emphasizing linguistic phonics, mental arithmetic, natural sciences, and basic Islamic manners (Adab).',
      curriculum: [
        'Integrated English Phonics & Reading Cadence',
        'Conceptual Mathematics & Real-World Problem Solving',
        'General Science & Nature Discovery',
        'Urdu Composition & Calligraphy Practice',
        'Nazira Quran with Phonetic Tajweed Rules',
        'Islamic Tarbiyah & Daily Sunnah Duas'
      ],
      highlights: 'Activity-based learning, zero homework burden for early grades, dedicated play areas.'
    },
    {
      id: 'middle',
      title: 'Middle Wing',
      grades: 'Grades 6 – 8',
      icon: <BookOpen className="w-5 h-5" />,
      tagline: 'Bridging foundational curiosity into rigorous analytical thought',
      description: 'Structured academic curriculum introducing laboratory sciences, computer coding fundamentals, geography, and critical reasoning.',
      curriculum: [
        'Experimental Physics, Chemistry & Biology Basics',
        'Pre-Algebra, Geometry & Set Theory',
        'Computing, Scratch Coding & Digital Literacy',
        'English Literature & Argumentative Writing',
        'Arabic Language Fundamentals & Quranic Vocabulary',
        'Pakistan Studies & Regional Geography'
      ],
      highlights: 'Inter-house science Olympiads, robotics sandbox, bilingual debating society.'
    },
    {
      id: 'matric',
      title: 'Secondary Matriculation',
      grades: 'Grades 9 – 10 (BISE)',
      icon: <FlaskConical className="w-5 h-5" />,
      tagline: 'Divisional board distinction training with deep empirical labs',
      description: 'Rigorous preparation for Board Examinations in Science (Biology) and Computer Science groups, yielding unmatched 100% pass and A+ rates.',
      curriculum: [
        'Physics: Mechanics, Waves, Electromagnetism & Labs',
        'Chemistry: Atomic Theory, Organic Reactions & Titration',
        'Biology: Cytology, Genetics & Human Systems',
        'Computer Science: C/C++ Programming & Database Theory',
        'Higher Mathematics: Quadratic Equations & Trigonometry',
        'Compulsory English, Urdu, Islamiyat & Pak Studies'
      ],
      highlights: 'Daily test sessions, board paper presentation drills, separate wings for boys and girls.'
    },
    {
      id: 'fsc',
      title: 'Higher Secondary (F.Sc / Inter)',
      grades: 'Grades 11 – 12',
      icon: <GraduationCap className="w-5 h-5" />,
      tagline: 'Pre-Medical & Pre-Engineering stepping stone to elite universities',
      description: 'Intensive pre-professional education geared towards top engineering universities, medical colleges (MDCAT / ECAT), and international degrees.',
      curriculum: [
        'Advanced Pre-Medical Track (Botany, Zoology, Biochemistry)',
        'Pre-Engineering Track (Advanced Calculus, Applied Mechanics)',
        'ICS Stream (Algorithms, Data Structures, Web Technologies)',
        'MDCAT / ECAT Orientation & Weekly Test Drills',
        'Research Paper Reading & Scientific Seminars'
      ],
      highlights: 'Full scholarship for top board rankers, state-of-the-art research apparatus.'
    },
    {
      id: 'hifz',
      title: 'Integrated Tahfeez-ul-Quran',
      grades: 'Ages 8 – 13 (Concurrent)',
      icon: <ScrollText className="w-5 h-5" />,
      tagline: 'Memorizing the Holy Quran while maintaining 100% academic parity',
      description: 'Our signature integrated stream allowing dedicated scholars to complete Hifz-ul-Quran with master Qaris while smoothly clearing their regular grade exams.',
      curriculum: [
        'Sabaq, Sabqi, and Manzil Daily Memorization Cycles',
        'Tarteel & Tajweed Mastery under Sanad-Holding Qaris',
        'Core Subject Classes: Math, English, General Science & Urdu',
        'Spiritual Tarbiyah, Hadeeth Studies & Daily Fiqh of Worship',
        'Post-Hifz Accelerated School Re-Integration Program'
      ],
      highlights: 'Completed by over 240+ Huffaz to date, certified Sanad upon completion.'
    }
  ];

  const currentWing = wings.find(w => w.id === selectedWing) || wings[2];

  return (
    <section id="academics" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#0D47A1] bg-sky-100/70 px-3 py-1 rounded-md border border-sky-200">
            <span>Scholastic Programs & Curricula</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Cinzel'] font-bold text-slate-900 tracking-tight">
            Academic Wings & Learning Tracks
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Delivering a rigorous, values-based curriculum accredited by the Board of Intermediate & Secondary Education and Cambridge standards.
          </p>
        </div>

        {/* Wing Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-2">
          {wings.map((w) => (
            <button
              key={w.id}
              onClick={() => setSelectedWing(w.id as any)}
              className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 whitespace-nowrap cursor-pointer ${
                selectedWing === w.id
                  ? 'bg-[#0D47A1] text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span>{w.icon}</span>
              <span>{w.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Wing Deep-Dive */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Overview Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                {currentWing.grades}
              </span>
              <h3 className="text-2xl sm:text-3xl font-['Cinzel'] font-bold text-slate-900">
                {currentWing.title}
              </h3>
              <p className="text-sm font-medium text-[#0D47A1] pt-1">
                {currentWing.tagline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {currentWing.description}
            </p>

            <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-100 text-xs text-sky-950 space-y-1">
              <div className="font-bold uppercase tracking-wider text-[#0D47A1]">Wing Distinction:</div>
              <div>{currentWing.highlights}</div>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Evaluation:</span>
              <span>Monthly Progress Tests · Term Finals · Parent Teacher Conferences</span>
            </div>
          </div>

          {/* Subjects & Core Syllabus Column */}
          <div className="lg:col-span-6 space-y-4 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#0D47A1]" />
              <span>Core Curricular Focus & Modules</span>
            </h4>

            <ul className="space-y-3 pt-1">
              {currentWing.curriculum.map((subj, sIdx) => (
                <li key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{subj}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
              <span>Standard: Certified Board & National Curriculum</span>
              <span className="font-bold text-[#0D47A1]">Weekly Lab Sessions</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
