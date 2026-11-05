/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Calendar,
  Building,
  User,
  MessageCircle,
  Copy,
  Check,
  Edit3,
  X,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData.ts';

export const ContactSection: React.FC = () => {
  // Contact details with localStorage persistence
  const [contacts, setContacts] = useState({
    directorName: SCHOOL_INFO.contact.directorName || "Syed Nouman Shah",
    directorTitle: SCHOOL_INFO.contact.directorTitle || "Director of the School",
    inChargeName: SCHOOL_INFO.contact.inChargeName || "Sheikh Salman Khan",
    inChargeTitle: SCHOOL_INFO.contact.inChargeTitle || "Admissions In-charge",
    email: SCHOOL_INFO.contact.email || "sheikhuu49@gmail.com",
    phone: SCHOOL_INFO.contact.phone || "0334-1001715",
    altPhone: SCHOOL_INFO.contact.altPhone || "+92 51 8492040",
    whatsapp: SCHOOL_INFO.contact.whatsapp || "03341001715",
    address: SCHOOL_INFO.contact.address || "Campus Avenue, Academic Block 4, Education City",
    officeHours: SCHOOL_INFO.contact.officeHours || "Monday – Saturday: 08:00 AM – 03:30 PM",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({ ...contacts });
  const [saveSuccessMsg, setSaveSuccessMsg] = useState(false);

  // Form Submission state
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    studentGrade: '10th Class (Matric)',
    message: ''
  });

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('isa_custom_contact');
      if (saved) {
        setContacts(JSON.parse(saved));
      }
    } catch (e) {
      // Ignore error
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contacts.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contacts.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleOpenEditModal = () => {
    setEditFormData({ ...contacts });
    setIsEditModalOpen(true);
  };

  const handleSaveContactEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setContacts({ ...editFormData });
    try {
      localStorage.setItem('isa_custom_contact', JSON.stringify(editFormData));
    } catch (err) {
      // Ignore error
    }
    setSaveSuccessMsg(true);
    setTimeout(() => {
      setSaveSuccessMsg(false);
      setIsEditModalOpen(false);
    }, 1200);
  };

  const handleResetDefaults = () => {
    const defaults = {
      directorName: "Syed Nouman Shah",
      directorTitle: "Director of the School",
      inChargeName: "Sheikh Salman Khan",
      inChargeTitle: "Admissions In-charge",
      email: "sheikhuu49@gmail.com",
      phone: "0334-1001715",
      altPhone: "+92 51 8492040",
      whatsapp: "03341001715",
      address: "Campus Avenue, Academic Block 4, Education City",
      officeHours: "Monday – Saturday: 08:00 AM – 03:30 PM",
    };
    setContacts(defaults);
    setEditFormData(defaults);
    try {
      localStorage.removeItem('isa_custom_contact');
    } catch (e) {
      // Ignore
    }
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Generate mailto and WhatsApp link with prefilled message
  const inquirySubject = encodeURIComponent(`Admission Inquiry for ${formData.studentGrade} - ${formData.name}`);
  const inquiryBody = encodeURIComponent(
    `Dear ${contacts.inChargeName},\n\nI am contacting you regarding admission for ${formData.studentGrade}.\n\nParent/Guardian Name: ${formData.name}\nContact Number: ${formData.phone}\nEmail: ${formData.email}\nGrade Interested In: ${formData.studentGrade}\n\nInquiry Details:\n${formData.message}\n\nThank you!`
  );
  const mailtoLink = `mailto:${contacts.email}?subject=${inquirySubject}&body=${inquiryBody}`;
  const whatsappClean = contacts.whatsapp.replace(/[^0-9]/g, '');
  const whatsappLink = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(
    `Salam ${contacts.inChargeName}, I would like to inquire regarding admission for ${formData.studentGrade}. Name: ${formData.name}, Phone: ${formData.phone}. Question: ${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#0D47A1] bg-sky-100/70 px-3 py-1 rounded-md border border-sky-200">
              <Building className="w-3.5 h-3.5" />
              <span>Direct Admissions & Administration Desk</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-['Cinzel'] font-bold text-slate-900 tracking-tight">
              Contact & Official Secretariat
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Connect directly with our administration and admissions desk. We are available for parent walkthroughs, counseling, and campus admissions.
            </p>
          </div>

          {/* Quick Edit Action Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleOpenEditModal}
              className="px-3.5 py-2 text-xs font-semibold text-[#0D47A1] bg-white border border-sky-200 hover:bg-sky-50 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <Edit3 className="w-3.5 h-3.5 text-sky-600" />
              <span>Edit / Update Contact Details</span>
            </button>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Institutional Contact Cards (Left Column) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Director of the School Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0A2552] to-[#0D47A1] text-white shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-13 h-13 rounded-xl overflow-hidden border-2 border-white/40 shadow-sm shrink-0 bg-slate-800">
                  <img
                    src="/assets/aistudio/IMG-20261105-WA0008_5d1c7f94.jpg"
                    alt={contacts.directorName}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/src/assets/images/director_syed_nouman_shah.jpg';
                    }}
                  />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-sky-300">
                    Director of the School
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-['Cinzel'] text-white leading-tight">
                    {contacts.directorName}
                  </h3>
                  <div className="text-xs text-slate-200">
                    M.A. Sociology · {contacts.directorTitle}
                  </div>
                </div>
              </div>

              <span className="hidden sm:inline-block text-[10px] font-bold text-sky-200 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                Executive Leadership
              </span>
            </div>

            {/* Primary Admissions & Administration Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
              
              {/* Executive Header */}
              <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-16 rounded-xl overflow-hidden border-2 border-blue-200 shadow-sm shrink-0 bg-slate-100">
                    <img
                      src="/assets/aistudio/IMG-20261105-WA0009_a22a1e9c.jpg"
                      alt={contacts.inChargeName}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/src/assets/images/sheikh_salman_khan_admissions.jpg';
                      }}
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-sky-700">
                      Admissions Desk & In-Charge
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-['Cinzel'] text-slate-900 leading-tight">
                      {contacts.inChargeName}
                    </h3>
                    <div className="text-xs text-slate-500 font-medium">
                      {contacts.inChargeTitle}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Admissions Contact
                </span>
              </div>

              {/* Contact List */}
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                
                {/* Official Email */}
                <div className="p-3 rounded-xl bg-sky-50/50 border border-sky-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 bg-white rounded-lg text-[#0D47A1] shadow-2xs">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Official Email</div>
                      <a
                        href={`mailto:${contacts.email}`}
                        className="font-bold text-[#0D47A1] hover:underline underline-offset-2 truncate block"
                      >
                        {contacts.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-slate-500 hover:text-slate-900 bg-white border border-slate-200 rounded-lg shrink-0 transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Mobile & WhatsApp */}
                <div className="p-3 rounded-xl bg-emerald-50/40 border border-emerald-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg text-emerald-700 shadow-2xs">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400">Direct Mobile & WhatsApp</div>
                      <a
                        href={`tel:${contacts.phone.replace(/\s+/g, '')}`}
                        className="font-bold text-emerald-800 hover:underline"
                      >
                        {contacts.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={`https://wa.me/${whatsappClean}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold rounded-lg transition-colors flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Landline / Alternate Line */}
                <div className="flex items-start gap-3 px-1">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block text-xs">Secretariat Office Landline:</strong>
                    <span className="text-slate-600">{contacts.altPhone}</span>
                  </div>
                </div>

                {/* Campus Address */}
                <div className="flex items-start gap-3 px-1">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block text-xs">Campus Address:</strong>
                    <span className="text-slate-600">{contacts.address}</span>
                  </div>
                </div>

                {/* Visiting Hours */}
                <div className="flex items-start gap-3 px-1">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block text-xs">Visiting & Inquiry Timings:</strong>
                    <span className="text-slate-600">{contacts.officeHours}</span>
                  </div>
                </div>

              </div>

              {/* Quick Contact Link Hub */}
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={`mailto:${contacts.email}?subject=Admission%20Inquiry%20-%20Islamia%20Students%20Academy`}
                  className="flex-1 min-w-[140px] py-2.5 px-3 rounded-xl bg-[#0D47A1] hover:bg-[#0A387E] text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </a>

                <a
                  href={`https://wa.me/${whatsappClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Quick Visit Tips */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0A2552] to-[#0D47A1] text-white space-y-3 shadow-md">
              <div className="flex items-center gap-2 text-sky-300 font-semibold text-xs uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>Parent Walk-in Consultations</span>
              </div>
              <h4 className="text-base font-bold font-['Cinzel']">
                Experience Islamia Students Academy in Person
              </h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                Parents are warmly invited to visit during official hours (09:00 AM – 01:30 PM) to observe classes in session, meet academic coordinators, and tour our specialized physics, chemistry, and robotics wings.
              </p>
            </div>

          </div>

          {/* Interactive Inquiry Form (Right Column) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmitInquiry} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-['Cinzel'] text-slate-900">
                    Send an Admission Inquiry / Request Campus Visit
                  </h3>
                  <p className="text-xs text-slate-500">
                    Directly message <strong className="text-slate-800">{contacts.inChargeName}</strong> at <strong className="text-[#0D47A1]">{contacts.email}</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Parent / Guardian Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Siddiqui"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0300-5512291"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Your Email Address</label>
                    <input
                      type="email"
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Grade Interested In</label>
                    <select
                      value={formData.studentGrade}
                      onChange={(e) => setFormData({...formData, studentGrade: e.target.value})}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                    >
                      <option value="Pre-School / Montessori">Pre-School / Montessori</option>
                      <option value="Primary Wing (1-5)">Primary Wing (1-5)</option>
                      <option value="Middle Wing (6-8)">Middle Wing (6-8)</option>
                      <option value="9th Class (Matric Science/CS)">9th Class (Matric Science/CS)</option>
                      <option value="10th Class (Matric)">10th Class (Matric)</option>
                      <option value="11th / 12th F.Sc">11th / 12th F.Sc</option>
                      <option value="Integrated Hifz Wing">Integrated Hifz Wing</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Your Inquiry or Special Questions</label>
                  <textarea
                    rows={4}
                    placeholder="Ask about syllabus, transport routes, scholarship criteria, or schedule a campus walkthrough..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-bold text-white bg-[#0D47A1] hover:bg-[#0A387E] rounded-xl shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to {contacts.inChargeName}</span>
                </button>
              </form>
            ) : (
              <div className="py-10 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-['Cinzel'] text-slate-900">
                  Inquiry Successfully Registered!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Your inquiry has been addressed to <strong className="text-slate-900">{contacts.inChargeName}</strong> ({contacts.email}). You can also transmit it directly via Email or WhatsApp below for an instant reply:
                </p>

                {/* Direct Action Hub after submission */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                  <a
                    href={mailtoLink}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#0D47A1] text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#0A387E] transition-colors shadow-2xs"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Gmail / Email App</span>
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors shadow-2xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs font-bold text-[#0D47A1] bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors cursor-pointer"
                  >
                    Write Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* EDIT / CUSTOMIZE CONTACT MODAL */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-xl overflow-hidden my-6">
            
            <div className="bg-[#0A2552] text-white p-4 px-6 flex items-center justify-between border-b border-blue-900">
              <div className="flex items-center gap-2.5">
                <Edit3 className="w-5 h-5 text-sky-400" />
                <div>
                  <h3 className="font-['Cinzel'] font-bold text-base text-white">
                    Customize Campus & Admin Contact Info
                  </h3>
                  <p className="text-xs text-sky-200">
                    Update phone, email, in-charge name, and campus address
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsEditModalOpen(false)}
                className="p-1 rounded-lg text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveContactEdit} className="p-6 space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Director of the School Name</label>
                  <input
                    type="text"
                    required
                    value={editFormData.directorName}
                    onChange={(e) => setEditFormData({ ...editFormData, directorName: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Director Title</label>
                  <input
                    type="text"
                    required
                    value={editFormData.directorTitle}
                    onChange={(e) => setEditFormData({ ...editFormData, directorTitle: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Admissions In-charge Name</label>
                  <input
                    type="text"
                    required
                    value={editFormData.inChargeName}
                    onChange={(e) => setEditFormData({ ...editFormData, inChargeName: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Admissions Role Title</label>
                  <input
                    type="text"
                    required
                    value={editFormData.inChargeTitle}
                    onChange={(e) => setEditFormData({ ...editFormData, inChargeTitle: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Primary Official Email *</label>
                  <input
                    type="email"
                    required
                    value={editFormData.email}
                    onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Mobile / WhatsApp Helpline *</label>
                  <input
                    type="text"
                    required
                    value={editFormData.phone}
                    onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value, whatsapp: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Office Landline / Alternate Phone</label>
                  <input
                    type="text"
                    value={editFormData.altPhone}
                    onChange={(e) => setEditFormData({ ...editFormData, altPhone: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Visiting & Inquiry Timings</label>
                  <input
                    type="text"
                    value={editFormData.officeHours}
                    onChange={(e) => setEditFormData({ ...editFormData, officeHours: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Campus Physical Address</label>
                <input
                  type="text"
                  value={editFormData.address}
                  onChange={(e) => setEditFormData({ ...editFormData, address: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D47A1] focus:outline-none"
                />
              </div>

              {saveSuccessMsg && (
                <div className="p-2.5 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Contact information successfully saved!</span>
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleResetDefaults}
                  className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
                >
                  Reset to Defaults
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold text-white bg-[#0D47A1] hover:bg-[#0A387E] rounded-xl transition-colors cursor-pointer shadow-xs"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      )}

    </section>
  );
};
