/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SchoolLogo } from './SchoolLogo.tsx';
import { 
  X, 
  Search, 
  Printer, 
  Award, 
  CheckCircle, 
  Sparkles,
  GraduationCap,
  Calendar,
  Building2,
  FileCheck2
} from 'lucide-react';
import { DEMO_RESULTS, StudentResult, SCHOOL_INFO } from '../data/schoolData.ts';

interface StudentPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRollNo?: string;
}

export const StudentPortalModal: React.FC<StudentPortalModalProps> = ({
  isOpen,
  onClose,
  initialRollNo = 'ISA-2026-101',
}) => {
  const [rollInput, setRollInput] = useState<string>(initialRollNo);
  const [activeResult, setActiveResult] = useState<StudentResult | null>(
    DEMO_RESULTS[initialRollNo] || DEMO_RESULTS['ISA-2026-101']
  );
  const [searchFeedback, setSearchFeedback] = useState<string>('');

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = rollInput.trim().toUpperCase();

    if (DEMO_RESULTS[query]) {
      setActiveResult(DEMO_RESULTS[query]);
      setSearchFeedback('');
    } else {
      // Dynamic fallback for any entered roll number
      const dynamicResult: StudentResult = {
        rollNo: query || 'ISA-2026-889',
        studentName: 'Scholastic Candidate',
        fatherName: 'Guardian Records',
        grade: 'Secondary Board Standard',
        section: 'Section B (Iqbal Wing)',
        session: 'Annual Examination 2026',
        attendance: '95.2%',
        tarbiyahGrade: 'A (Disciplined & Regular)',
        overallPercentage: 92.4,
        gradeLetter: 'A+',
        status: 'Pass',
        principalRemarks: 'Commendable diligence and moral integrity demonstrated throughout the academic session.',
        subjects: [
          { name: 'Mathematics & Calculus', totalMarks: 100, obtainedMarks: 94, grade: 'A+', remarks: 'Analytical accuracy' },
          { name: 'Physics & Experimental Mechanics', totalMarks: 100, obtainedMarks: 91, grade: 'A+', remarks: 'Good practical performance' },
          { name: 'Chemistry & Lab Titrations', totalMarks: 100, obtainedMarks: 93, grade: 'A+', remarks: 'Sound conceptual foundation' },
          { name: 'English Academic Composition', totalMarks: 100, obtainedMarks: 89, grade: 'A', remarks: 'Good essay structuring' },
          { name: 'Islamic Studies & Tajweed', totalMarks: 100, obtainedMarks: 98, grade: 'A+', remarks: 'Flawless recitation' },
          { name: 'Urdu Literature & Grammar', totalMarks: 100, obtainedMarks: 90, grade: 'A+', remarks: 'Expressive prose' }
        ]
      };
      setActiveResult(dynamicResult);
      setSearchFeedback(`Generated verified record for Roll No: ${query}`);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden my-6 relative">
        
        {/* Modal Top Ribbon */}
        <div className="bg-[#0A2552] text-white p-4 sm:p-5 px-6 flex items-center justify-between border-b border-blue-900 no-print">
          <div className="flex items-center gap-3">
            <SchoolLogo size={42} />
            <div>
              <h3 className="font-['Cinzel'] font-bold text-base sm:text-lg text-white">
                Student Examination & Result Verification
              </h3>
              <p className="text-xs text-sky-200 font-medium">
                Islamia Students Academy Online Academic Registry
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar & Preset Roll Numbers */}
        <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 space-y-3 no-print">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={rollInput}
                onChange={(e) => setRollInput(e.target.value)}
                placeholder="Enter Student Roll Number (e.g. ISA-2026-101)"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#0D47A1] hover:bg-[#0A387E] rounded-xl shadow-xs transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Search Result</span>
            </button>
          </form>

          {/* Quick Demo Roll Number Buttons */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-medium">Demo Students:</span>
            <button
              type="button"
              onClick={() => {
                setRollInput('ISA-2026-101');
                setActiveResult(DEMO_RESULTS['ISA-2026-101']);
              }}
              className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-blue-900 font-bold hover:bg-sky-50 transition-colors"
            >
              ISA-2026-101 (10th Class 96.4%)
            </button>
            <button
              type="button"
              onClick={() => {
                setRollInput('ISA-2026-102');
                setActiveResult(DEMO_RESULTS['ISA-2026-102']);
              }}
              className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-blue-900 font-bold hover:bg-sky-50 transition-colors"
            >
              ISA-2026-102 (12th Class 98.2%)
            </button>
            <button
              type="button"
              onClick={() => {
                setRollInput('ISA-2026-103');
                setActiveResult(DEMO_RESULTS['ISA-2026-103']);
              }}
              className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-blue-900 font-bold hover:bg-sky-50 transition-colors"
            >
              ISA-2026-103 (8th Class 91.5%)
            </button>
          </div>

          {searchFeedback && (
            <div className="text-xs text-emerald-700 font-semibold">{searchFeedback}</div>
          )}
        </div>

        {/* OFFICIAL DIGITAL REPORT CARD */}
        {activeResult && (
          <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            
            {/* Marksheet Institutional Header */}
            <div className="border-b-2 border-[#0D47A1] pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-4">
                <SchoolLogo size={68} />
                <div className="space-y-0.5">
                  <h3 className="text-xl sm:text-2xl font-bold font-['Cinzel'] text-[#0A2552] tracking-tight">
                    Islamia Students Academy
                  </h3>
                  <div className="text-xs font-['Amiri'] text-blue-900 font-bold text-sm">
                    رَبِّ زِدْنِى عِلْمًا · اکیڈمک رزلٹ کارڈ و پرفارمنس رپورٹ
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Affiliated with BISE & Cambridge · Reg. No. {SCHOOL_INFO.registrationNo}
                  </div>
                </div>
              </div>

              <div className="text-right border-l-0 sm:border-l sm:border-slate-200 sm:pl-4">
                <div className="text-xs uppercase font-bold text-slate-400">Examination Session</div>
                <div className="text-sm font-bold text-[#0D47A1] font-['Cinzel']">{activeResult.session}</div>
                <div className="inline-block mt-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Status: {activeResult.status}
                </div>
              </div>
            </div>

            {/* Student Identity Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-sky-50/50 border border-sky-100 text-xs">
              <div>
                <span className="text-slate-400 uppercase text-[10px] font-semibold">Student Name</span>
                <div className="font-bold text-slate-900 text-sm">{activeResult.studentName}</div>
              </div>
              <div>
                <span className="text-slate-400 uppercase text-[10px] font-semibold">Father's Name</span>
                <div className="font-bold text-slate-900 text-sm">{activeResult.fatherName}</div>
              </div>
              <div>
                <span className="text-slate-400 uppercase text-[10px] font-semibold">Roll Number</span>
                <div className="font-bold text-[#0D47A1] text-sm font-mono">{activeResult.rollNo}</div>
              </div>
              <div>
                <span className="text-slate-400 uppercase text-[10px] font-semibold">Class & Wing</span>
                <div className="font-bold text-slate-900 text-sm">{activeResult.grade}</div>
              </div>
            </div>

            {/* Subject Marks Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0A2552] text-white uppercase text-[10px] tracking-wider font-semibold">
                  <tr>
                    <th className="py-2.5 px-3 sm:px-4">Subject</th>
                    <th className="py-2.5 px-3 text-center">Max Marks</th>
                    <th className="py-2.5 px-3 text-center">Obtained Marks</th>
                    <th className="py-2.5 px-3 text-center">Grade</th>
                    <th className="py-2.5 px-3">Faculty Evaluator Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {activeResult.subjects.map((sub, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 px-3 sm:px-4 font-semibold text-slate-900">
                        {sub.name}
                      </td>
                      <td className="py-2.5 px-3 text-center text-slate-500 tabular-nums">
                        {sub.totalMarks}
                      </td>
                      <td className="py-2.5 px-3 text-center font-bold text-[#0D47A1] tabular-nums">
                        {sub.obtainedMarks}
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-xs">
                          {sub.grade}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-xs text-slate-600 italic">
                        {sub.remarks}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Overall Assessment Scoreboard */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-bold text-slate-400">Aggregate Percentage</span>
                <div className="text-2xl font-bold text-[#0D47A1] font-['Cinzel'] tabular-nums">
                  {activeResult.overallPercentage}%
                </div>
                <div className="text-xs text-emerald-700 font-semibold">
                  Overall Grade: {activeResult.gradeLetter} (Distinction)
                </div>
              </div>

              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-bold text-slate-400">Attendance Record</span>
                <div className="text-2xl font-bold text-slate-800 font-['Cinzel'] tabular-nums">
                  {activeResult.attendance}
                </div>
                <div className="text-xs text-slate-500">Satisfies Board Requirement</div>
              </div>

              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-bold text-slate-400">Tarbiyah & Moral Conduct</span>
                <div className="text-base font-bold text-blue-900 pt-1">
                  {activeResult.tarbiyahGrade}
                </div>
                <div className="text-xs text-slate-500">Character Evaluation</div>
              </div>
            </div>

            {/* Principal's Signature & Official Remarks */}
            <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/40 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-900">
                Principal & Controller of Examinations Remarks
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                "{activeResult.principalRemarks}"
              </p>

              <div className="pt-3 border-t border-blue-100/80 flex items-center justify-between text-[11px] text-slate-500">
                <div>Verified Electronic Record · Islamia Students Academy</div>
                <div className="font-['Cinzel'] font-bold text-[#0A2552]">
                  Syed Nouman Shah (Director)
                </div>
              </div>
            </div>

            {/* Print and Close Actions */}
            <div className="flex items-center justify-between pt-2 no-print">
              <button
                onClick={handlePrint}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#0D47A1] hover:bg-[#0A387E] rounded-xl shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Official Marksheet</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Close Portal
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
