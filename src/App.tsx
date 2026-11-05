/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { PositionHoldersSection } from './components/PositionHoldersSection.tsx';
import { AdmissionsSection } from './components/AdmissionsSection.tsx';
import { AcademicsSection } from './components/AcademicsSection.tsx';
import { FacilitiesSection } from './components/FacilitiesSection.tsx';
import { FacultySection } from './components/FacultySection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { AdmissionModal } from './components/AdmissionModal.tsx';
import { StudentPortalModal } from './components/StudentPortalModal.tsx';

export default function App() {
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [portalModalOpen, setPortalModalOpen] = useState(false);
  const [activeRollNumber, setActiveRollNumber] = useState('ISA-2026-101');

  const handleOpenAdmissions = () => {
    setAdmissionModalOpen(true);
  };

  const handleOpenPortal = (rollNo?: string) => {
    if (rollNo) {
      setActiveRollNumber(rollNo);
    }
    setPortalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-sky-200 selection:text-blue-900">
      {/* Top Navigation Bar */}
      <Navbar
        onOpenAdmissions={handleOpenAdmissions}
        onOpenPortal={() => handleOpenPortal('ISA-2026-101')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenAdmissions={handleOpenAdmissions}
          onOpenPortal={() => handleOpenPortal('ISA-2026-101')}
        />

        {/* About Us Section */}
        <AboutSection />

        {/* 9th & 10th Class Position Holders with Photos & Marks */}
        <PositionHoldersSection
          onCheckStudentResult={(rollNo) => handleOpenPortal(rollNo)}
        />

        {/* Admissions Information Section */}
        <AdmissionsSection
          onOpenApplyModal={handleOpenAdmissions}
        />

        {/* Academic Wings & Curricula */}
        <AcademicsSection />

        {/* Campus Facilities & Laboratories */}
        <FacilitiesSection />

        {/* Distinguished Faculty Directory */}
        <FacultySection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact & Campus Tour Booking */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenAdmissions={handleOpenAdmissions}
        onOpenPortal={() => handleOpenPortal('ISA-2026-101')}
      />

      {/* Modals */}
      <AdmissionModal
        isOpen={admissionModalOpen}
        onClose={() => setAdmissionModalOpen(false)}
      />

      <StudentPortalModal
        isOpen={portalModalOpen}
        onClose={() => setPortalModalOpen(false)}
        initialRollNo={activeRollNumber}
      />
    </div>
  );
}
