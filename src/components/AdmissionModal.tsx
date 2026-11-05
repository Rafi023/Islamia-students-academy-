/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SchoolLogo } from './SchoolLogo.tsx';
import { 
  X, 
  CheckCircle2, 
  User, 
  FileCheck, 
  Printer, 
  ArrowRight, 
  ArrowLeft,
  Calendar,
  Phone,
  Building,
  GraduationCap
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData.ts';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [appId, setAppId] = useState<string>('');

  // Form State
  const [formData, setFormData] = useState({
    studentName: '',
    gender: 'Male',
    dob: '',
    grade: '10th Class (Secondary Science)',
    bFormNumber: '',
    fatherName: '',
    fatherCnic: '',
    fatherOccupation: '',
    phone: '',
    email: '',
    address: '',
    previousSchool: '',
    previousMarks: '',
    needTransport: 'Yes',
    hifzInterest: 'No'
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `ISA-ADM-${Math.floor(100000 + Math.random() * 900000)}`;
    setAppId(generatedId);
    setSubmitted(true);
  };

  const handlePrintSlip = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden my-8 relative">
        
        {/* Modal Top Header with Logo */}
        <div className="bg-[#0A2552] text-white p-5 px-6 flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center gap-3">
            <SchoolLogo size={42} />
            <div>
              <h3 className="font-['Cinzel'] font-bold text-lg sm:text-xl text-white">
                Islamia Students Academy
              </h3>
              <p className="text-xs text-sky-200 font-medium">
                Online Admission Registration · Session 2026–2027
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

        {/* Modal Body */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Step Wizard Progress Indicator */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${currentStep >= 1 ? 'bg-[#0D47A1] text-white' : 'bg-slate-100 text-slate-500'}`}>
                  1
                </span>
                <span className="text-xs font-bold text-slate-700">Student Info</span>
              </div>
              <div className="w-12 h-0.5 bg-slate-200" />
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${currentStep >= 2 ? 'bg-[#0D47A1] text-white' : 'bg-slate-100 text-slate-500'}`}>
                  2
                </span>
                <span className="text-xs font-bold text-slate-700">Parent & Contact</span>
              </div>
              <div className="w-12 h-0.5 bg-slate-200" />
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${currentStep === 3 ? 'bg-[#0D47A1] text-white' : 'bg-slate-100 text-slate-500'}`}>
                  3
                </span>
                <span className="text-xs font-bold text-slate-700">Academic History</span>
              </div>
            </div>

            {/* STEP 1: STUDENT INFO */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                  Step 1: Student Particulars
                </h4>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Candidate's Full Name (As per B-Form) *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    required
                    value={formData.studentName}
                    onChange={handleChange}
                    placeholder="e.g. Muhammad Zayd"
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Gender *</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                    >
                      <option value="Male">Male (Boys Wing)</option>
                      <option value="Female">Female (Girls Wing)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Date of Birth *</label>
                    <input
                      type="date"
                      name="dob"
                      required
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Grade Applying For *</label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                    >
                      <option value="Montessori / Nursery">Montessori / Nursery</option>
                      <option value="Kindergarten (KG / Prep)">Kindergarten (KG / Prep)</option>
                      <option value="Primary (Grade 1 - 5)">Primary (Grade 1 - 5)</option>
                      <option value="Middle (Grade 6 - 8)">Middle (Grade 6 - 8)</option>
                      <option value="9th Class (Science Biology)">9th Class (Science Biology)</option>
                      <option value="9th Class (Computer Science)">9th Class (Computer Science)</option>
                      <option value="10th Class (Secondary Science)">10th Class (Secondary Science)</option>
                      <option value="11th / 12th F.Sc Pre-Medical">11th / 12th F.Sc Pre-Medical</option>
                      <option value="11th / 12th F.Sc Pre-Engineering">11th / 12th F.Sc Pre-Engineering</option>
                      <option value="Integrated Hifz-ul-Quran Wing">Integrated Hifz-ul-Quran Wing</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">NADRA B-Form Number *</label>
                    <input
                      type="text"
                      name="bFormNumber"
                      required
                      placeholder="e.g. 37405-1234567-1"
                      value={formData.bFormNumber}
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: PARENT & CONTACT */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                  Step 2: Parent / Guardian Details
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Father / Guardian Full Name *</label>
                    <input
                      type="text"
                      name="fatherName"
                      required
                      value={formData.fatherName}
                      onChange={handleChange}
                      placeholder="e.g. Tariq Mahmood"
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Father's CNIC Number *</label>
                    <input
                      type="text"
                      name="fatherCnic"
                      required
                      placeholder="e.g. 37405-9876543-1"
                      value={formData.fatherCnic}
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Emergency Contact (Mobile) *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 0300-1234567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Residential Address *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="House/Street, Sector, City"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* STEP 3: ACADEMIC HISTORY */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                  Step 3: Academic Background & Transport
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Last School Attended *</label>
                    <input
                      type="text"
                      name="previousSchool"
                      required
                      placeholder="Name of previous academy/school"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Marks / Grade in Last Exam *</label>
                    <input
                      type="text"
                      name="previousMarks"
                      required
                      placeholder="e.g. 92% or Grade A+"
                      value={formData.previousMarks}
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Require School Van / Bus Service?</label>
                    <select
                      name="needTransport"
                      value={formData.needTransport}
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-sm"
                    >
                      <option value="Yes">Yes, require school transport</option>
                      <option value="No">No, private drop & pick</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Interest in Integrated Hifz?</label>
                    <select
                      name="hifzInterest"
                      value={formData.hifzInterest}
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-sm"
                    >
                      <option value="No">Standard Academic Curriculum</option>
                      <option value="Yes">Yes, Integrated Hifz Wing</option>
                    </select>
                  </div>
                </div>

                <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl text-xs text-sky-950 flex items-start gap-2.5">
                  <FileCheck className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                  <div>
                    I hereby declare that the information provided is accurate and authentic. I agree to abide by the disciplinary rules and Tarbiyah ethos of Islamia Students Academy.
                  </div>
                </div>
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous Step</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#0D47A1] hover:bg-[#0A387E] rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              )}
            </div>

          </form>
        ) : (
          /* REGISTRATION SUCCESS & PRINTABLE SLIP */
          <div className="p-6 sm:p-8 space-y-6 animate-fadeIn">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-['Cinzel'] text-slate-900">
                Application Successfully Registered!
              </h3>
              <p className="text-xs text-slate-600">
                Please retain your Registration Slip and present it on the entrance evaluation date.
              </p>
            </div>

            {/* Printable Admission Slip Card */}
            <div className="p-6 rounded-2xl border-2 border-dashed border-[#0D47A1]/40 bg-sky-50/40 space-y-4 text-xs text-slate-800">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <SchoolLogo size={36} />
                  <div>
                    <div className="font-bold font-['Cinzel'] text-slate-900">Islamia Students Academy</div>
                    <div className="text-[10px] text-slate-500">Official Admission Provisional Slip</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Registration ID</div>
                  <div className="text-sm font-bold text-[#0D47A1] font-mono">{appId}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <span className="text-slate-500">Candidate Name:</span>
                  <div className="font-bold text-slate-900">{formData.studentName || 'Muhammad Zayd'}</div>
                </div>
                <div>
                  <span className="text-slate-500">Father's Name:</span>
                  <div className="font-bold text-slate-900">{formData.fatherName || 'Tariq Mahmood'}</div>
                </div>
                <div>
                  <span className="text-slate-500">Grade Applied:</span>
                  <div className="font-bold text-[#0D47A1]">{formData.grade}</div>
                </div>
                <div>
                  <span className="text-slate-500">Test Venue & Date:</span>
                  <div className="font-bold text-emerald-700">Central Hall · Dec 14, 2026 (09:00 AM)</div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-600 space-y-1">
                <div><strong>Next Instructions:</strong> Please bring 2 attested passport size photographs and previous grade marksheet on the test day.</div>
                <div className="text-[10px] text-slate-500">Issued by Admissions Secretariat (Sheikh Salman Khan · sheikhuu49@gmail.com · 0334-1001715) · Directorate of Syed Nouman Shah.</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                onClick={handlePrintSlip}
                className="px-5 py-2.5 text-xs font-bold text-[#0D47A1] bg-sky-100 hover:bg-sky-200 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Registration Slip</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#0D47A1] hover:bg-[#0A387E] rounded-xl transition-colors cursor-pointer"
              >
                Done / Return to Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
