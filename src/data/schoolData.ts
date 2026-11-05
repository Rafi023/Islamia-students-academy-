/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AdmissionStep {
  step: number;
  title: string;
  duration: string;
  description: string;
  actionHint: string;
}

export interface AgeCriterion {
  grade: string;
  ageRange: string;
  eligibilityCutoff: string;
  notes: string;
}

export interface AcademicDate {
  event: string;
  date: string;
  status: 'Open' | 'Upcoming' | 'Scheduled';
  description: string;
}

export interface RequiredDocument {
  id: string;
  title: string;
  copies: string;
  mandatory: boolean;
  notes: string;
}

export interface PositionHolder {
  id: string;
  name: string;
  fatherName: string;
  classGrade: '10th Class (Matriculation)' | '9th Class (Board Annual)';
  position: '1st Position' | '2nd Position' | '3rd Position';
  rank: 1 | 2 | 3;
  marksObtained: number;
  totalMarks: number;
  percentage: number;
  group: 'Science (Biology)' | 'Science (Computer)' | 'Pre-Engineering';
  rollNumber: string;
  imagePath: string;
  boardCitation: string;
  majorStrengths: string[];
}

export interface ValueItem {
  title: string;
  arabic: string;
  description: string;
  iconName: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  department: string;
  qualification: string;
  experience: string;
  specialization: string;
  imagePath?: string;
  featured?: boolean;
}

export interface StudentResult {
  rollNo: string;
  studentName: string;
  fatherName: string;
  grade: string;
  section: string;
  session: string;
  attendance: string;
  tarbiyahGrade: string;
  overallPercentage: number;
  gradeLetter: string;
  status: 'Pass' | 'Distinct Pass';
  subjects: {
    name: string;
    totalMarks: number;
    obtainedMarks: number;
    grade: string;
    remarks: string;
  }[];
  principalRemarks: string;
}

export const SCHOOL_INFO = {
  name: "Islamia Students Academy",
  urduName: "اسلامیہ سٹوڈنٹس اکیڈمی",
  mottoArabic: "رَبِّ زِدْنِى عِلْمًا",
  mottoEnglish: "O My Lord, Increase Me in Knowledge",
  tagline: "Cultivating Noble Character, Inspiring Academic Excellence",
  foundedYear: 1994,
  affiliation: "Affiliated with Board of Intermediate & Secondary Education and Cambridge Assessment International Education",
  registrationNo: "ISA/REG-8921-PB",
  director: "Syed Nouman Shah",
  directorTitle: "Director of the School",
  contact: {
    directorName: "Syed Nouman Shah",
    directorTitle: "Director of the School",
    inChargeName: "Sheikh Salman Khan",
    inChargeTitle: "Admissions In-charge & Academic Administration",
    address: "Campus Avenue, Academic Block 4, Education City",
    phone: "0334-1001715",
    altPhone: "+92 51 8492040",
    whatsapp: "03341001715",
    email: "sheikhuu49@gmail.com",
    altEmail: "khrafiullah2@gmail.com",
    officeHours: "Monday – Saturday: 08:00 AM – 03:30 PM",
  },
  stats: [
    { value: "100%", label: "Board Examination Pass Rate", context: "Consecutive 8-Year Record" },
    { value: "1,550+", label: "Enrolled Scholars", context: "From Pre-School to Higher Secondary" },
    { value: "1:14", label: "Teacher to Student Ratio", context: "Personalized Academic Mentorship" },
    { value: "32+", label: "Years of Academic Distinction", context: "Est. 1994 with 8,000+ Alumni" },
  ]
};

export const ABOUT_CONTENT = {
  history: [
    "Islamia Students Academy was established in 1994 by an esteemed council of educators, scholars, and scientists who envisioned an institution where premier contemporary sciences and traditional Islamic wisdom could flourish side by side without compromise.",
    "Beginning with two modest academic blocks and eighty pioneering students, the Academy steadily expanded over three decades into a prestigious modern campus complete with state-of-the-art physics, chemistry, and robotics laboratories, an expansive digital research library, sports grounds, and dedicated Tahfeez-ul-Quran sanctuaria.",
    "Today, Islamia Students Academy stands recognized as a beacon of academic rigor and moral cultivation, producing alumni who excel at top engineering colleges, medical universities, civil services, and international academic arenas while upholding humble devotion and high ethical integrity."
  ],
  mission: "To foster an intellectually stimulating, morally sound, and spiritually enriched educational environment that empowers students to achieve academic mastery in STEM and humanities, practice compassionate civic leadership, and personify the timeless Islamic virtues of honesty, discipline, and selfless service.",
  vision: "To be the benchmark educational academy recognized nationally and globally for producing well-rounded scholars who harmoniously integrate cutting-edge modern science, technology, and critical thought with the profound moral ethos of Islam.",
  coreValues: [
    {
      title: "Faith & Integrity",
      arabic: "الإيمان والأمانة",
      description: "Rooting all learning in deep consciousness of Allah, upright moral conduct, intellectual honesty, and accountability in thought and deed.",
      iconName: "ShieldCheck"
    },
    {
      title: "Pursuit of Excellence",
      arabic: "الإتقان",
      description: "Instilling the Islamic virtue of Itqan—striving for the highest quality of work, analytical precision, and dedication in every endeavor.",
      iconName: "Award"
    },
    {
      title: "Character & Tarbiyah",
      arabic: "التربية والأدب",
      description: "Cultivating empathy, respect for teachers and parents, emotional resilience, modesty (Haya), and righteous behavior in daily life.",
      iconName: "HeartHandshake"
    },
    {
      title: "Scientific Inquiry",
      arabic: "البحث والتدبر",
      description: "Encouraging curiosity, empirical experimentation, critical reasoning, and technological literacy to understand the laws governing the universe.",
      iconName: "FlaskConical"
    },
    {
      title: "Service to Humanity",
      arabic: "خدمة الإنسانية",
      description: "Guiding knowledge toward constructive social impact, community welfare, and uplifting the underprivileged through active volunteerism.",
      iconName: "Users"
    }
  ] as ValueItem[]
};

export const ADMISSIONS_DATA = {
  session: "Session 2026–2027",
  statusBanner: "Registrations are now open for Pre-School, Primary, Middle, Secondary (Matric / O-Level), and Higher Secondary (F.Sc / A-Level).",
  procedure: [
    {
      step: 1,
      title: "Online Registration & Prospectus Submission",
      duration: "Day 1",
      description: "Submit the online inquiry and registration form on this portal, or obtain the physical prospectus voucher from the Campus Admissions Secretariat.",
      actionHint: "Complete in 5 minutes via the Online Application portal."
    },
    {
      step: 2,
      title: "Document Verification & Admit Card Issuance",
      duration: "Within 48 Hours",
      description: "The admissions desk reviews academic credentials, age eligibility, and identity documents before issuing an Entrance Assessment Admit Slip.",
      actionHint: "Digital Admit Card with assigned venue & time sent via SMS/Email."
    },
    {
      step: 3,
      title: "Diagnostic Written Assessment",
      duration: "Scheduled Test Day",
      description: "Applicants undergo a structured written evaluation in English, Mathematics, Science, and Urdu/Islamic Studies calibrated for grade readiness.",
      actionHint: "Syllabus outlines and sample questions available upon registration."
    },
    {
      step: 4,
      title: "Family Interview & Tarbiyah Interaction",
      duration: "Within 3 Days of Test",
      description: "A constructive, welcoming meeting between the Academic Board, the applicant, and parents to align expectations, interests, and pastoral support.",
      actionHint: "Both parents are cordially requested to accompany the candidate."
    },
    {
      step: 5,
      title: "Merit Notification & Fee Settlement",
      duration: "Final Step",
      description: "Final merit list is published online. Upon fee voucher clearance, the admission is formally confirmed and orientation welcome pack dispatched.",
      actionHint: "Merit and need-based scholarships applied automatically at this stage."
    }
  ] as AdmissionStep[],

  ageCriteria: [
    {
      grade: "Montessori / Nursery",
      ageRange: "3.0 to 4.0 Years",
      eligibilityCutoff: "Born between April 2022 and March 2023",
      notes: "Must be toilet-trained and responsive to basic verbal guidance."
    },
    {
      grade: "Kindergarten (KG / Prep)",
      ageRange: "4.0 to 5.0 Years",
      eligibilityCutoff: "Born between April 2021 and March 2022",
      notes: "Focus on social interaction, phonics recognition, and gross motor skills."
    },
    {
      grade: "Primary Wing (Grades 1 – 5)",
      ageRange: "5.5 to 10.5 Years",
      eligibilityCutoff: "Strict 1-year progression per academic tier",
      notes: "Previous grade clearance certificate and school leaving transcript mandatory."
    },
    {
      grade: "Middle Wing (Grades 6 – 8)",
      ageRange: "10.5 to 13.5 Years",
      eligibilityCutoff: "Completion of Grade 5 with $\\ge 60\\%$ marks",
      notes: "Diagnostic assessment in Mathematics, Science, and English language comprehension."
    },
    {
      grade: "Secondary (Matriculation / Grade 9–10)",
      ageRange: "13.5 to 15.5 Years",
      eligibilityCutoff: "Middle standard board or school passing certificate",
      notes: "Stream selection: Science (Biology/Physics/Chem) or Computer Science group."
    },
    {
      grade: "Higher Secondary (F.Sc / Inter Grades 11–12)",
      ageRange: "15.5 to 18.0 Years",
      eligibilityCutoff: "Minimum 65% aggregate in SSC / Matriculation",
      notes: "Pre-Medical, Pre-Engineering, ICS (Computer Science), and Humanities tracks."
    },
    {
      grade: "Integrated Hifz-ul-Quran Wing",
      ageRange: "8.0 to 12.0 Years",
      eligibilityCutoff: "Nazira Quran clearance with accurate Tajweed",
      notes: "Dual academic curriculum ensuring zero loss of regular school progression."
    }
  ] as AgeCriterion[],

  importantDates: [
    {
      event: "Phase-I Online Registration Commencement",
      date: "November 15, 2026",
      status: "Open",
      description: "Early registration round with fee waiver on prospectus processing."
    },
    {
      event: "Phase-I Entrance Evaluation Examination",
      date: "December 14, 2026",
      status: "Upcoming",
      description: "Conducted at the Central Examination Hall, Campus Academic Block."
    },
    {
      event: "Merit List Display & Parent Consultations",
      date: "December 22, 2026",
      status: "Scheduled",
      description: "Digital publication on school web portal and SMS alerts to selected families."
    },
    {
      event: "Phase-II Late Admissions & Transfer Window",
      date: "January 10, 2027",
      status: "Scheduled",
      description: "Subject to seat availability across specialized senior science sections."
    },
    {
      event: "New Scholar Orientation & Book Distribution",
      date: "March 28, 2027",
      status: "Scheduled",
      description: "Campus walkthrough, uniform distribution, and introduction to mentors."
    },
    {
      event: "Commencement of Regular Academic Classes",
      date: "April 05, 2027",
      status: "Scheduled",
      description: "Official start of Academic Year 2027–2028 with morning assembly."
    }
  ] as AcademicDate[],

  requiredDocuments: [
    {
      id: "doc-1",
      title: "Official Birth Certificate or NADRA B-Form",
      copies: "Original + 2 Attested Photocopies",
      mandatory: true,
      notes: "Mandatory verification of student full legal name and exact birth date."
    },
    {
      id: "doc-2",
      title: "Previous School Leaving Certificate (SLC / Transfer)",
      copies: "Original Document",
      mandatory: true,
      notes: "Required for admission to Grade 2 and higher, countersigned by District Education Officer if from another board."
    },
    {
      id: "doc-3",
      title: "Recent Academic Progress Reports / Marksheets",
      copies: "Photocopies of past 2 terms",
      mandatory: true,
      notes: "Demonstrating consistent academic record and conduct evaluation."
    },
    {
      id: "doc-4",
      title: "CNIC Copies of Father / Legal Guardian",
      copies: "2 Clear Photocopies",
      mandatory: true,
      notes: "Government issued identity verification for official student registry."
    },
    {
      id: "doc-5",
      title: "Passport Size Color Photographs (Sky Blue Background)",
      copies: "4 Recent Photographs",
      mandatory: true,
      notes: "Candidate in neat formal attire with name written on reverse."
    },
    {
      id: "doc-6",
      title: "Medical Fitness & Immunization Record",
      copies: "1 Copy on Academy Medical Format",
      mandatory: true,
      notes: "Including blood group certificate and disclosure of any chronic allergies."
    }
  ] as RequiredDocument[]
};

export const DEMO_RESULTS: Record<string, StudentResult> = {
  "ISA-2026-101": {
    rollNo: "ISA-2026-101",
    studentName: "Zayd Ahmed Siddiqui",
    fatherName: "Tariq Mahmood Siddiqui",
    grade: "Grade 10 (Secondary)",
    section: "Science - A (Avicenna Block)",
    session: "2025–2026 Annual Examination",
    attendance: "97.8%",
    tarbiyahGrade: "A+ (Exemplary Moral Conduct)",
    overallPercentage: 96.4,
    gradeLetter: "A+",
    status: "Distinct Pass",
    principalRemarks: "Outstanding scholastic mastery. Demonstrates exceptional scientific rigor and exemplary humility in daily conduct. Recommended for Board Merit Scholarship.",
    subjects: [
      { name: "Mathematics & Analytical Algebra", totalMarks: 100, obtainedMarks: 99, grade: "A+", remarks: "Flawless mathematical precision" },
      { name: "Physics (Theory & Experimental Lab)", totalMarks: 100, obtainedMarks: 97, grade: "A+", remarks: "Superb laboratory technique" },
      { name: "Chemistry (Organic & Inorganic)", totalMarks: 100, obtainedMarks: 95, grade: "A+", remarks: "Deep conceptual grasp" },
      { name: "Biology / Computer Systems", totalMarks: 100, obtainedMarks: 96, grade: "A+", remarks: "Top percentile performance" },
      { name: "English Language & Literature", totalMarks: 100, obtainedMarks: 94, grade: "A+", remarks: "Eloquent expression" },
      { name: "Urdu Adab & Composition", totalMarks: 100, obtainedMarks: 95, grade: "A+", remarks: "Rich literary vocabulary" },
      { name: "Islamic Studies & Tajweed", totalMarks: 100, obtainedMarks: 99, grade: "A+", remarks: "Exemplary comprehension & recitation" },
      { name: "Pakistan Studies & History", totalMarks: 100, obtainedMarks: 96, grade: "A+", remarks: "Analytical critical perspective" }
    ]
  },
  "ISA-2026-102": {
    rollNo: "ISA-2026-102",
    studentName: "Fatima Zahra Khan",
    fatherName: "Dr. Asim Ullah Khan",
    grade: "Grade 12 (Higher Secondary F.Sc)",
    section: "Pre-Medical - Alpha",
    session: "2025–2026 Midterm & Board Prep",
    attendance: "99.1%",
    tarbiyahGrade: "A+ (Academic & Ethical Leader)",
    overallPercentage: 98.2,
    gradeLetter: "A+",
    status: "Distinct Pass",
    principalRemarks: "School Valedictorian candidate. Unrivaled consistency in biological sciences, research initiative, and generous peer tutoring.",
    subjects: [
      { name: "Biology & Human Physiology", totalMarks: 100, obtainedMarks: 99, grade: "A+", remarks: "Outstanding anatomical depth" },
      { name: "Chemistry & Biochemistry", totalMarks: 100, obtainedMarks: 98, grade: "A+", remarks: "Impeccable titration & synthesis" },
      { name: "Physics & Thermodynamics", totalMarks: 100, obtainedMarks: 97, grade: "A+", remarks: "Masterful problem solving" },
      { name: "English Academic Writing", totalMarks: 100, obtainedMarks: 97, grade: "A+", remarks: "Sophisticated critical synthesis" },
      { name: "Islamic Ideology & Ethics", totalMarks: 100, obtainedMarks: 100, grade: "A+", remarks: "Perfect theoretical score" },
      { name: "Urdu Literary Criticism", totalMarks: 100, obtainedMarks: 96, grade: "A+", remarks: "Highly commended" }
    ]
  },
  "ISA-2026-103": {
    rollNo: "ISA-2026-103",
    studentName: "Muhammad Bilal Qureshi",
    fatherName: "Sohail Ahmed Qureshi",
    grade: "Grade 8 (Middle Wing)",
    section: "Ibn-e-Haytham Section",
    session: "2025–2026 Term Evaluation",
    attendance: "94.5%",
    tarbiyahGrade: "A (Courteous & Diligent)",
    overallPercentage: 91.5,
    gradeLetter: "A+",
    status: "Distinct Pass",
    principalRemarks: "Consistently keen participation in STEM robotics club and inter-house debates. Keen interest in computational logic.",
    subjects: [
      { name: "General Science & STEM Robotics", totalMarks: 100, obtainedMarks: 94, grade: "A+", remarks: "Innovative science fair project" },
      { name: "Mathematics & Geometry", totalMarks: 100, obtainedMarks: 92, grade: "A+", remarks: "Strong geometric proofs" },
      { name: "English Composition & Reading", totalMarks: 100, obtainedMarks: 89, grade: "A", remarks: "Solid essay structuring" },
      { name: "Urdu Language & Grammar", totalMarks: 100, obtainedMarks: 90, grade: "A+", remarks: "Commendable calligraphy" },
      { name: "Social Studies & Geography", totalMarks: 100, obtainedMarks: 93, grade: "A+", remarks: "Well researched assignments" },
      { name: "Quranic Nazira & Hifz Chapter", totalMarks: 100, obtainedMarks: 96, grade: "A+", remarks: "Fluent pronunciation" }
    ]
  }
};

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: "fac-rafiullah",
    name: "Mr. Rafiullah",
    title: "English Language Instructor",
    department: "Languages & Humanities",
    qualification: "BS English from NUML University Islamabad",
    experience: "English Language & Literature Instructor",
    specialization: "English Linguistics, Board Examination Syllabus, Functional Grammar & Spoken Communication",
    imagePath: "/assets/aistudio/IMG_20250119_180304_129b5514.jpg",
    featured: true
  },
  {
    id: "fac-0",
    name: "Syed Nouman Shah",
    title: "Director of the School & Head of Institutional Council",
    department: "Executive Leadership",
    qualification: "M.A. Sociology · Senior Educational Administrator",
    experience: "Director & Institutional Founder",
    specialization: "Institutional Vision, Strategic Academic Leadership & Tarbiyah Council",
    imagePath: "/assets/aistudio/IMG-20261105-WA0008_5d1c7f94.jpg",
    featured: true
  },
  {
    id: "fac-salman",
    name: "Sheikh Salman Khan",
    title: "Admissions In-charge & Academic Administration",
    department: "Admissions & Secretariat",
    qualification: "Senior Admissions & Academic Coordinator",
    experience: "Admissions Counseling & Student Placement Lead",
    specialization: "Admissions Counseling, Merit Placement & Student Guidance",
    imagePath: "/assets/aistudio/IMG-20261105-WA0009_a22a1e9c.jpg",
    featured: true
  },
  {
    id: "fac-2",
    name: "Prof. Farhan Naeem",
    title: "Head of Sciences & Senior Physics Lecturer",
    department: "Physical Sciences",
    qualification: "M.Phil in Applied Physics (Gold Medalist)",
    experience: "16 Years in Secondary & Higher Secondary Board Prep",
    specialization: "Experimental Mechanics, Optics & Olympiad Mentorship"
  },
  {
    id: "fac-3",
    name: "Dr. Maryam Batool",
    title: "Senior Lecturer in Biological Sciences",
    department: "Life Sciences",
    qualification: "Ph.D. in Molecular Biology & Genetics",
    experience: "12 Years in Pre-Medical Training",
    specialization: "Microbiology, Physiology & Pre-Medical MDCAT Guidance"
  },
  {
    id: "fac-4",
    name: "Qari Hafiz Abdul Rehman",
    title: "Director of Tahfeez & Islamic Sciences",
    department: "Islamic Studies & Tajweed",
    qualification: "Sanad in Qira'at 'Ashara & M.A. Islamic Studies (Al-Azhar Affiliated)",
    experience: "19 Years in Quranic Pedagogy",
    specialization: "Tajweed-ul-Quran, Classical Arabic & Character Tarbiyah"
  },
  {
    id: "fac-5",
    name: "Engr. Salman Raza",
    title: "Director of Computing & Robotics Lab",
    department: "Computer Science & AI",
    qualification: "M.S. in Computer Science & Robotics",
    experience: "9 Years in STEM Education",
    specialization: "Python, Microcontrollers, Web Engineering & Algorithmic Thinking"
  },
  {
    id: "fac-6",
    name: "Mrs. Naila Jamshed",
    title: "Head of English Literature & Dean of Humanities",
    department: "Languages & Humanities",
    qualification: "M.Phil in Applied Linguistics (Cambridge CELTA Certified)",
    experience: "15 Years in Secondary Education",
    specialization: "Rhetoric, Creative Prose & Parliamentary Debates"
  }
];

export const FAQS = [
  {
    question: "What makes Islamia Students Academy distinctive from ordinary private schools?",
    answer: "Islamia Students Academy uniquely blends rigorous modern academic standards (accredited Board and Cambridge curricula, cutting-edge STEM laboratories, and coding) with genuine Islamic Tarbiyah (character development, Quranic Tajweed, ethical grounding, and daily practical manners). Students achieve top merit positions in competitive exams without sacrificing their religious identity."
  },
  {
    question: "Is there an integrated Hifz-ul-Quran option for regular school-going students?",
    answer: "Yes. Our renowned Integrated Hifz Wing allows students from Grades 3 through 7 to memorize the Holy Quran under master Qaris while attending core academic classes (Mathematics, English, Science, and Urdu) through a customized timetable, ensuring they never fall behind their academic year."
  },
  {
    question: "What is the fee structure and are scholarships available?",
    answer: "Our fee structure is affordable and transparent, with no hidden charges. We offer 100% Merit Scholarships for students securing 90%+ in board exams, as well as need-based Qardh-e-Hasana and sibling concessions to ensure financial constraints never prevent a bright student from studying at Islamia Students Academy."
  },
  {
    question: "What transport and security arrangements are provided?",
    answer: "The Academy maintains a fleet of air-conditioned GPS-tracked buses covering all major residential sectors with dedicated female chaperones for younger students. The campus features 24/7 CCTV surveillance, boundary security guards, biometric gates, and standby medical response personnel."
  },
  {
    question: "How can parents monitor their child's day-to-day progress?",
    answer: "Parents receive access to our online Student Portal, weekly SMS attendance and homework notifications, monthly progress folders, and bi-monthly scheduled Parent-Teacher Conferences (PTCs)."
  }
];

export const POSITION_HOLDERS_DATA: PositionHolder[] = [
  // 10th Class (Matriculation)
  {
    id: "pos-10-1",
    name: "Zayd Ahmed Siddiqui",
    fatherName: "Tariq Mahmood Siddiqui",
    classGrade: "10th Class (Matriculation)",
    position: "1st Position",
    rank: 1,
    marksObtained: 1082,
    totalMarks: 1100,
    percentage: 98.36,
    group: "Science (Biology)",
    rollNumber: "849201",
    imagePath: "/src/assets/images/student_topper_10th_first_1793845995418.jpg",
    boardCitation: "1st Position Overall in Divisional Board Examination. Gold Medalist & School Valedictorian.",
    majorStrengths: ["100/100 Mathematics", "99/100 Physics", "99/100 Chemistry", "98/100 Biology"]
  },
  {
    id: "pos-10-2",
    name: "Fatima Zahra Khan",
    fatherName: "Dr. Asim Ullah Khan",
    classGrade: "10th Class (Matriculation)",
    position: "2nd Position",
    rank: 2,
    marksObtained: 1076,
    totalMarks: 1100,
    percentage: 97.81,
    group: "Science (Computer)",
    rollNumber: "849224",
    imagePath: "/src/assets/images/student_topper_10th_second_1793845996732.jpg",
    boardCitation: "2nd Position Overall in Board Examination. Silver Medalist & All-Round Star Scholar.",
    majorStrengths: ["100/100 Computer Studies", "99/100 Mathematics", "98/100 Physics", "98/100 English"]
  },
  {
    id: "pos-10-3",
    name: "Abdullah Malik",
    fatherName: "Sohail Ahmed Malik",
    classGrade: "10th Class (Matriculation)",
    position: "3rd Position",
    rank: 3,
    marksObtained: 1068,
    totalMarks: 1100,
    percentage: 97.09,
    group: "Pre-Engineering",
    rollNumber: "849219",
    imagePath: "/src/assets/images/student_topper_9th_first_1793845997702.jpg",
    boardCitation: "3rd Position in Divisional Board. Bronze Medalist in Physical Sciences & Analytical Mechanics.",
    majorStrengths: ["99/100 Mathematics", "97/100 Physics", "96/100 Chemistry", "98/100 Islamiyat"]
  },

  // 9th Class (Board Annual)
  {
    id: "pos-9-1",
    name: "Muhammad Rehan Ali",
    fatherName: "Muhammad Ali Akhtar",
    classGrade: "9th Class (Board Annual)",
    position: "1st Position",
    rank: 1,
    marksObtained: 538,
    totalMarks: 550,
    percentage: 97.81,
    group: "Science (Biology)",
    rollNumber: "914082",
    imagePath: "/src/assets/images/student_topper_9th_first_1793845997702.jpg",
    boardCitation: "1st Position in 9th Class Annual Board Examination. Gold Crest of Scholastic Brilliance.",
    majorStrengths: ["75/75 Mathematics", "60/60 Physics", "60/60 Chemistry", "74/75 Urdu"]
  },
  {
    id: "pos-9-2",
    name: "Ayesha Noor Bano",
    fatherName: "Engr. Khurram Bano",
    classGrade: "9th Class (Board Annual)",
    position: "2nd Position",
    rank: 2,
    marksObtained: 532,
    totalMarks: 550,
    percentage: 96.72,
    group: "Science (Computer)",
    rollNumber: "914105",
    imagePath: "/src/assets/images/student_topper_9th_second_1793845998086.jpg",
    boardCitation: "2nd Position in 9th Class Annual Board Examination. Silver Medalist in Computational Thinking.",
    majorStrengths: ["75/75 Mathematics", "50/50 Computer Lab", "59/60 Physics", "73/75 English"]
  },
  {
    id: "pos-9-3",
    name: "Syed Hamza Hashmi",
    fatherName: "Syed Qasim Hashmi",
    classGrade: "9th Class (Board Annual)",
    position: "3rd Position",
    rank: 3,
    marksObtained: 526,
    totalMarks: 550,
    percentage: 95.63,
    group: "Science (Biology)",
    rollNumber: "914093",
    imagePath: "/src/assets/images/student_topper_10th_first_1793845995418.jpg",
    boardCitation: "3rd Position in 9th Class Annual Board Examination. Bronze Medalist in Life Sciences.",
    majorStrengths: ["74/75 Biology", "59/60 Chemistry", "58/60 Physics", "50/50 Islamiyat"]
  }
];

