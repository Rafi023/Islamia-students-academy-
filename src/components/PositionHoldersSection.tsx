/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Trophy, 
  Medal, 
  Star, 
  Sparkles, 
  Award, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { POSITION_HOLDERS_DATA, PositionHolder } from '../data/schoolData.ts';

interface PositionHoldersSectionProps {
  onCheckStudentResult: (rollNo: string) => void;
}

export const PositionHoldersSection: React.FC<PositionHoldersSectionProps> = ({
  onCheckStudentResult,
}) => {
  const [selectedTab, setSelectedTab] = useState<'all' | '10th' | '9th'>('all');

  const filteredHolders = POSITION_HOLDERS_DATA.filter((holder) => {
    if (selectedTab === '10th') return holder.classGrade.startsWith('10th');
    if (selectedTab === '9th') return holder.classGrade.startsWith('9th');
    return true;
  });

  const getRankBadge = (rank: number) => {
    if (rank === 1) {
      return {
        label: "1st Position · Gold Medalist",
        bgClass: "bg-amber-500 text-white",
        borderClass: "border-amber-400 ring-2 ring-amber-400/30",
        pillClass: "bg-amber-50 text-amber-900 border-amber-200",
        icon: <Trophy className="w-4 h-4 text-amber-300" />
      };
    }
    if (rank === 2) {
      return {
        label: "2nd Position · Silver Medalist",
        bgClass: "bg-slate-600 text-white",
        borderClass: "border-slate-300 ring-2 ring-slate-300/30",
        pillClass: "bg-slate-50 text-slate-800 border-slate-200",
        icon: <Medal className="w-4 h-4 text-slate-200" />
      };
    }
    return {
      label: "3rd Position · Bronze Medalist",
      bgClass: "bg-amber-700 text-white",
      borderClass: "border-amber-600 ring-2 ring-amber-600/30",
      pillClass: "bg-amber-50 text-amber-900 border-amber-200",
      icon: <Award className="w-4 h-4 text-amber-200" />
    };
  };

  return (
    <section id="position-holders" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-blue-900 bg-blue-100/70 px-3 py-1 rounded-md border border-blue-200">
              <Trophy className="w-3.5 h-3.5 text-blue-800" />
              <span>Hall of Academic Distinction</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-['Cinzel'] font-bold text-slate-900 tracking-tight">
              Position Holders of 9th & 10th Classes
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Celebrating the stellar triumphs of Islamia Students Academy scholars who secured top merit positions in the Annual Board Examinations.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-xl border border-slate-200 shadow-sm shrink-0">
            <button
              onClick={() => setSelectedTab('all')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedTab === 'all'
                  ? 'bg-[#0D47A1] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All Toppers
            </button>
            <button
              onClick={() => setSelectedTab('10th')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedTab === '10th'
                  ? 'bg-[#0D47A1] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              10th Class (Matric)
            </button>
            <button
              onClick={() => setSelectedTab('9th')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedTab === '9th'
                  ? 'bg-[#0D47A1] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              9th Class (Annual)
            </button>
          </div>
        </div>

        {/* Position Holders Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHolders.map((holder) => {
            const badge = getRankBadge(holder.rank);
            return (
              <div
                key={holder.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative"
              >
                {/* Top Rank Banner Ribbon */}
                <div className={`px-4 py-2 text-xs font-bold flex items-center justify-between ${badge.bgClass}`}>
                  <span className="flex items-center gap-1.5 font-['Cinzel'] tracking-wider">
                    {badge.icon}
                    <span>{holder.position}</span>
                  </span>
                  <span className="text-[11px] opacity-90 font-medium">
                    {holder.classGrade.split(' ')[0]} Grade
                  </span>
                </div>

                {/* Photo & Identity Section */}
                <div className="p-6 pb-4 flex flex-col items-center text-center space-y-4">
                  {/* Student Photo with Frame */}
                  <div className="relative">
                    <div className="w-36 h-36 rounded-2xl overflow-hidden border-4 border-slate-100 shadow-md group-hover:scale-105 transition-transform duration-300 bg-slate-100">
                      <img
                        src={holder.imagePath}
                        alt={`Photo of ${holder.name}, ${holder.position}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Rank Number Badge */}
                    <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-[#0D47A1] text-white font-['Cinzel'] font-bold text-sm flex items-center justify-center shadow-md border-2 border-white">
                      #{holder.rank}
                    </div>
                  </div>

                  {/* Student Details */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-['Cinzel'] text-slate-900 leading-tight">
                      {holder.name}
                    </h3>
                    <div className="text-xs text-slate-500 font-medium">
                      s/d of {holder.fatherName}
                    </div>
                    <div className="inline-block text-xs font-semibold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded-md mt-1">
                      {holder.group}
                    </div>
                  </div>
                </div>

                {/* Marks & Quantitative Rigor Panel */}
                <div className="mx-6 p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                        Marks Obtained
                      </div>
                      <div className="text-2xl font-bold text-[#0D47A1] tabular-nums font-['Cinzel']">
                        {holder.marksObtained}{' '}
                        <span className="text-xs font-medium text-slate-400">
                          / {holder.totalMarks}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                        Percentage
                      </div>
                      <div className="text-2xl font-bold text-emerald-700 tabular-nums font-['Cinzel']">
                        {holder.percentage}%
                      </div>
                    </div>
                  </div>

                  {/* Roll Number & Class */}
                  <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                    <span>Board Roll No: <strong className="text-slate-900 tabular-nums">{holder.rollNumber}</strong></span>
                    <span className="text-emerald-700 font-bold">A+ Distinction</span>
                  </div>
                </div>

                {/* Board Citation & Major Strengths */}
                <div className="p-6 pt-4 space-y-3 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{holder.boardCitation}"
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      Subject Distinction Scores
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {holder.majorStrengths.map((strength, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded"
                        >
                          {strength}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link to verify / view in portal */}
                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={() => onCheckStudentResult("ISA-2026-101")}
                      className="w-full py-2.5 px-3 text-xs font-bold text-blue-900 hover:text-white bg-blue-50 hover:bg-[#0D47A1] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Verify Digital Board Marksheet</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Board Examination Adjacency Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0A2552] via-[#0D47A1] to-[#0A387E] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300">
              <Sparkles className="w-4 h-4" />
              <span>Consecutive Board Distinctions</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Cinzel']">
              100% Passing Ratio Across 9th & 10th Classes
            </h3>
            <p className="text-sm text-slate-200 max-w-2xl">
              Over 88% of our students secured Grade A-One (A+) in the recent Board examinations, with zero compartment or failed subjects.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onCheckStudentResult("ISA-2026-101")}
              className="px-5 py-3 text-xs font-bold text-blue-950 bg-white hover:bg-amber-100 rounded-xl shadow transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Trophy className="w-4 h-4 text-amber-600" />
              <span>Search Any Student Result</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
