/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  FileText, 
  Calendar, 
  UserCheck, 
  CheckCircle, 
  Download, 
  Calculator, 
  GraduationCap, 
  Clock, 
  HelpCircle,
  ArrowRight,
  ShieldAlert,
  Info
} from 'lucide-react';
import { ADMISSIONS_DATA } from '../data/schoolData.ts';

interface AdmissionsSectionProps {
  onOpenApplyModal: () => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ onOpenApplyModal }) => {
  const [activeTab, setActiveTab] = useState<'procedure' | 'criteria' | 'documents' | 'dates' | 'calculator'>('procedure');

  // Interactive Fee Calculator State
  const [selectedGradeTier, setSelectedGradeTier] = useState<string>('secondary');
  const [needTransport, setNeedTransport] = useState<boolean>(true);
  const [transportZone, setTransportZone] = useState<string>('zone2');
  const [hasSibling, setHasSibling] = useState<boolean>(false);
  const [meritScholarship, setMeritScholarship] = useState<boolean>(false);

  // Fee Calculation Logic
  const getFeeBreakdown = () => {
    let baseTuition = 6500;
    let labFee = 0;
    let sportsLibraryFee = 1200;

    if (selectedGradeTier === 'preschool') {
      baseTuition = 4800;
      labFee = 0;
      sportsLibraryFee = 800;
    } else if (selectedGradeTier === 'primary') {
      baseTuition = 5600;
      labFee = 500;
      sportsLibraryFee = 1000;
    } else if (selectedGradeTier === 'middle') {
      baseTuition = 6500;
      labFee = 1200;
      sportsLibraryFee = 1200;
    } else if (selectedGradeTier === 'secondary') {
      baseTuition = 7800;
      labFee = 2000;
      sportsLibraryFee = 1500;
    } else if (selectedGradeTier === 'hssc') {
      baseTuition = 9500;
      labFee = 2800;
      sportsLibraryFee = 1800;
    } else if (selectedGradeTier === 'hifz') {
      baseTuition = 5200;
      labFee = 600;
      sportsLibraryFee = 900;
    }

    let transportCost = 0;
    if (needTransport) {
      if (transportZone === 'zone1') transportCost = 2500;
      else if (transportZone === 'zone2') transportCost = 3500;
      else if (transportZone === 'zone3') transportCost = 4500;
    }

    let discount = 0;
    if (hasSibling) {
      discount += baseTuition * 0.15; // 15% Sibling concession
    }
    if (meritScholarship) {
      discount += baseTuition * 0.35; // 35% Board distinction merit concession
    }

    const netMonthly = Math.max(0, baseTuition + labFee + sportsLibraryFee + transportCost - discount);

    return {
      baseTuition,
      labFee,
      sportsLibraryFee,
      transportCost,
      discount,
      netMonthly,
      annualEstimate: netMonthly * 12
    };
  };

  const fees = getFeeBreakdown();

  return (
    <section id="admissions" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#0D47A1] bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200">
            <span>Academic Admissions Session 2026–2027</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Cinzel'] font-bold text-slate-900 tracking-tight">
            Admissions Information & Procedure
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Everything parents and prospective scholars need to know regarding admission requirements, age benchmarks, documentation, key dates, and tuition estimates.
          </p>
        </div>

        {/* Tab Navigation Ribbon */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 border-b border-slate-200">
          <button
            onClick={() => setActiveTab('procedure')}
            className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'procedure'
                ? 'bg-[#0D47A1] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Application Procedure</span>
          </button>

          <button
            onClick={() => setActiveTab('criteria')}
            className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'criteria'
                ? 'bg-[#0D47A1] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Info className="w-4 h-4" />
            <span>Age Criteria & Eligibility</span>
          </button>

          <button
            onClick={() => setActiveTab('documents')}
            className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'documents'
                ? 'bg-[#0D47A1] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Required Documents</span>
          </button>

          <button
            onClick={() => setActiveTab('dates')}
            className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'dates'
                ? 'bg-[#0D47A1] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Important Dates</span>
          </button>

          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'calculator'
                ? 'bg-[#0D47A1] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Fee Estimator</span>
          </button>
        </div>

        {/* TAB 1: APPLICATION PROCEDURE */}
        {activeTab === 'procedure' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold font-['Cinzel'] text-slate-900">
                Step-by-Step Application Roadmap
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Our transparent 5-stage admission journey ensures every child is placed into an environment tailored for their scholastic success and moral growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {ADMISSIONS_DATA.procedure.map((step) => (
                <div
                  key={step.step}
                  className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-sky-300 hover:shadow-md transition-all relative group"
                >
                  <div className="space-y-4">
                    {/* Step indicator */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-[#0D47A1] font-bold font-['Cinzel'] text-base flex items-center justify-center shadow-xs">
                        0{step.step}
                      </div>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {step.duration}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] text-[#0D47A1] font-medium flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>{step.actionHint}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Admissions Desk In-Charge Counseling & Application Banner */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50/60 to-white border border-sky-200/90 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                <div className="w-20 h-24 rounded-2xl overflow-hidden border-2 border-white shadow-md shrink-0 bg-slate-100">
                  <img
                    src="/assets/aistudio/IMG-20261105-WA0009_a22a1e9c.jpg"
                    alt="Sheikh Salman Khan - Admissions In-charge"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/src/assets/images/sheikh_salman_khan_admissions.jpg';
                    }}
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#0D47A1] bg-sky-100/80 px-2.5 py-0.5 rounded-full border border-sky-200">
                    <span>Admissions Counseling Desk</span>
                  </div>
                  <h4 className="text-lg font-bold font-['Cinzel'] text-slate-900 leading-tight">
                    Sheikh Salman Khan
                  </h4>
                  <p className="text-xs text-slate-600 font-medium">
                    Admissions In-charge · Student Enrollment & Merit Placement
                  </p>
                  <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-700">
                    <a
                      href="tel:03341001715"
                      className="font-bold text-emerald-800 hover:underline flex items-center gap-1"
                    >
                      <span>📞 0334-1001715</span>
                    </a>
                    <span className="text-slate-300">·</span>
                    <a
                      href="mailto:sheikhuu49@gmail.com"
                      className="font-bold text-[#0D47A1] hover:underline flex items-center gap-1"
                    >
                      <span>✉️ sheikhuu49@gmail.com</span>
                    </a>
                    <span className="text-slate-300">·</span>
                    <a
                      href="https://wa.me/923341001715"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:underline font-semibold"
                    >
                      WhatsApp Active
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
                <button
                  onClick={onOpenApplyModal}
                  className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold text-white bg-[#0D47A1] hover:bg-[#0A387E] rounded-xl shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Open Online Application Form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AGE CRITERIA & ELIGIBILITY */}
        {activeTab === 'criteria' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold font-['Cinzel'] text-slate-900">
                Age Requirements by Academic Grade
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Age criteria are strictly calculated as of March 31, 2027 in compliance with the Educational Directorate and Board regulations.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0A2552] text-white uppercase text-[11px] tracking-wider font-semibold">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Grade / Academic Level</th>
                    <th className="py-3.5 px-4 sm:px-6">Required Age Bracket</th>
                    <th className="py-3.5 px-4 sm:px-6">Eligibility Benchmark</th>
                    <th className="py-3.5 px-4 sm:px-6">Curricular Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {ADMISSIONS_DATA.ageCriteria.map((crit, idx) => (
                    <tr key={idx} className="hover:bg-sky-50/50 transition-colors">
                      <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                        {crit.grade}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-[#0D47A1] font-semibold tabular-nums">
                        {crit.ageRange}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-slate-700">
                        {crit.eligibilityCutoff}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-slate-500 text-xs">
                        {crit.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">Age Relaxation Policy:</strong> A maximum of 60 days age relaxation may only be considered by the Principal upon special written request and submission of prior school credentials demonstrating advanced aptitude.
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: REQUIRED DOCUMENTS */}
        {activeTab === 'documents' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="max-w-2xl">
                <h3 className="text-xl font-bold font-['Cinzel'] text-slate-900">
                  Required Documentation Checklist
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Please bring attested photocopies along with original documents for in-person verification at the Admissions Secretariat.
                </p>
              </div>

              <button
                onClick={() => window.print()}
                className="px-4 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-2 self-start sm:self-auto cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-600" />
                <span>Print Document Checklist</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ADMISSIONS_DATA.requiredDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-sky-300 hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 bg-sky-50 text-[#0D47A1] rounded-xl border border-sky-100">
                        <FileText className="w-5 h-5" />
                      </div>
                      {doc.mandatory ? (
                        <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                          Mandatory
                        </span>
                      ) : (
                        <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                          Optional
                        </span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {doc.title}
                      </h4>
                      <div className="text-xs font-semibold text-[#0D47A1]">
                        Required: {doc.copies}
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {doc.notes}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Attestation by Gazetted Officer / Notary</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: IMPORTANT DATES */}
        {activeTab === 'dates' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold font-['Cinzel'] text-slate-900">
                Official Admission Calendar · Session 2026–2027
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Mark your calendars to adhere to all evaluation schedules and enrollment deadlines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ADMISSIONS_DATA.importantDates.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-all space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0D47A1]">
                      <Calendar className="w-4 h-4 text-sky-500" />
                      <span>Stage 0{idx + 1}</span>
                    </div>

                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        item.status === 'Open'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : item.status === 'Upcoming'
                          ? 'bg-sky-100 text-sky-900 border border-sky-200'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-base font-bold font-['Cinzel'] text-[#0D47A1]">
                      {item.date}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {item.event}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: FEE CALCULATOR */}
        {activeTab === 'calculator' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold font-['Cinzel'] text-slate-900">
                Interactive Tuition & Fee Estimator
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Calculate an upfront, transparent estimate of monthly school charges, laboratory access, and school bus services with zero hidden dues.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Controls Column */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                
                {/* Select Academic Wing */}
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-wider text-slate-700">
                    Select Academic Grade Tier
                  </label>
                  <select
                    value={selectedGradeTier}
                    onChange={(e) => setSelectedGradeTier(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1]"
                  >
                    <option value="preschool">Montessori & Kindergarten (Pre-School)</option>
                    <option value="primary">Primary Wing (Grades 1 – 5)</option>
                    <option value="middle">Middle Wing (Grades 6 – 8)</option>
                    <option value="secondary">Secondary Matriculation (Grades 9 – 10 Science & CS)</option>
                    <option value="hssc">Higher Secondary F.Sc / Inter (Pre-Med & Pre-Eng)</option>
                    <option value="hifz">Integrated Tahfeez-ul-Quran Department</option>
                  </select>
                </div>

                {/* Transport Options */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-bold text-slate-900">School Van / Bus Service</span>
                      <p className="text-xs text-slate-500">Air-conditioned fleet with female attendants & GPS</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={needTransport}
                      onChange={(e) => setNeedTransport(e.target.checked)}
                      className="w-5 h-5 text-[#0D47A1] rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
                    />
                  </div>

                  {needTransport && (
                    <div className="space-y-2 pt-2">
                      <label className="text-xs font-semibold text-slate-700">
                        Pick & Drop Distance Zone
                      </label>
                      <select
                        value={transportZone}
                        onChange={(e) => setTransportZone(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900"
                      >
                        <option value="zone1">Zone 1: Within 5 km Radius (Rs. 2,500/mo)</option>
                        <option value="zone2">Zone 2: 5 km to 12 km Distance (Rs. 3,500/mo)</option>
                        <option value="zone3">Zone 3: Extended Suburbs & Express Way (Rs. 4,500/mo)</option>
                      </select>
                    </div>
                  )}
                </div>

                {/* Concessions / Sibling Discount */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-700">
                    Eligible Concessions & Subsidies
                  </span>
                  
                  <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasSibling}
                      onChange={(e) => setHasSibling(e.target.checked)}
                      className="w-4 h-4 text-[#0D47A1] rounded"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-slate-900">Sibling Concession (15% Off Tuition)</span>
                      <p className="text-slate-500">Applicable when two or more children are currently enrolled</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={meritScholarship}
                      onChange={(e) => setMeritScholarship(e.target.checked)}
                      className="w-4 h-4 text-[#0D47A1] rounded"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-slate-900">Academic Board Merit Scholarship (35% Off Tuition)</span>
                      <p className="text-slate-500">For scholars achieving 90%+ in past institutional or board exam</p>
                    </div>
                  </label>
                </div>

              </div>

              {/* Estimate Summary Column */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#0A2552] to-[#0D47A1] text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
                
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-wider text-sky-300 font-semibold">
                    Fee Assessment Breakdown
                  </div>
                  <h4 className="text-xl font-bold font-['Cinzel'] text-white">
                    Monthly Tuition & Amenities
                  </h4>
                </div>

                <div className="space-y-3 text-xs sm:text-sm divide-y divide-white/10 pt-2">
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-300">Base Instructional Tuition</span>
                    <span className="font-bold tabular-nums">Rs. {fees.baseTuition.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-300">Science Lab & Computing Charges</span>
                    <span className="font-bold tabular-nums">Rs. {fees.labFee.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-300">Library, Sports & Co-Curricular</span>
                    <span className="font-bold tabular-nums">Rs. {fees.sportsLibraryFee.toLocaleString()}</span>
                  </div>

                  {needTransport && (
                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-300">Dedicated School Transport</span>
                      <span className="font-bold tabular-nums">Rs. {fees.transportCost.toLocaleString()}</span>
                    </div>
                  )}

                  {fees.discount > 0 && (
                    <div className="flex justify-between py-1.5 text-amber-300">
                      <span>Applied Concessions / Scholarship</span>
                      <span className="font-bold tabular-nums">- Rs. {fees.discount.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                {/* Net Total Display */}
                <div className="pt-4 border-t border-white/20 space-y-1">
                  <div className="text-xs text-sky-200">Estimated Monthly Payable</div>
                  <div className="text-3xl sm:text-4xl font-bold font-['Cinzel'] text-white tabular-nums">
                    Rs. {fees.netMonthly.toLocaleString()}
                    <span className="text-sm font-normal text-sky-200"> / month</span>
                  </div>
                  <div className="text-[11px] text-slate-300 pt-1">
                    Annual Academic Total (12 Months): Rs. {fees.annualEstimate.toLocaleString()}
                  </div>
                </div>

                <button
                  onClick={onOpenApplyModal}
                  className="w-full py-3.5 text-xs font-bold text-[#0A2552] bg-white hover:bg-sky-50 rounded-xl shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4 text-[#0D47A1]" />
                  <span>Submit Admission Application</span>
                </button>

                <p className="text-[10px] text-slate-300 text-center leading-tight">
                  * One-time admission registration and security deposit payable once upon final enrollment confirmation.
                </p>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
