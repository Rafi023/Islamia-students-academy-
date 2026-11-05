/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface SchoolLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  className = '',
  size = 64,
  showText = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 select-none drop-shadow-sm"
        aria-label="Islamia Students Academy Official Emblem"
      >
        <defs>
          {/* Flame Gradients */}
          <linearGradient id="torchFlame" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="45%" stopColor="#0EA5E9" />
            <stop offset="85%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#E0F2FE" />
          </linearGradient>
          <linearGradient id="innerFlame" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0369A1" />
            <stop offset="60%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
          {/* Torch Handle Gradient */}
          <linearGradient id="torchHandle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="35%" stopColor="#60A5FA" />
            <stop offset="70%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          {/* Ribbon Gradient */}
          <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A387E" />
            <stop offset="50%" stopColor="#0D47A1" />
            <stop offset="100%" stopColor="#072A5E" />
          </linearGradient>
          {/* Curved Text Paths */}
          <path
            id="topCalligraphyPath"
            d="M 40,94 A 62,62 0 0,1 160,94"
            fill="none"
          />
          <path
            id="bottomCalligraphyPath"
            d="M 166,108 A 68,68 0 0,1 34,108"
            fill="none"
          />
          <path
            id="ribbonTextPath"
            d="M 32,168 Q 100,186 168,168"
            fill="none"
          />
        </defs>

        {/* Outer concentric decorative circles */}
        <circle cx="100" cy="100" r="92" stroke="#0D47A1" strokeWidth="4.5" fill="#FFFFFF" />
        <circle cx="100" cy="100" r="86" stroke="#0D47A1" strokeWidth="1.5" fill="none" />
        <circle cx="100" cy="100" r="82" stroke="#0D47A1" strokeWidth="3" fill="#FFFFFF" />

        {/* Stars on Left & Right */}
        {/* Left Star */}
        <g transform="translate(48, 102) scale(0.9)">
          <polygon
            points="0,-8 2.4,-2.5 8,-2.5 3.5,1.2 5.2,7 0,3.5 -5.2,7 -3.5,1.2 -8,-2.5 -2.4,-2.5"
            fill="#0D47A1"
          />
        </g>
        {/* Right Star */}
        <g transform="translate(152, 102) scale(0.9)">
          <polygon
            points="0,-8 2.4,-2.5 8,-2.5 3.5,1.2 5.2,7 0,3.5 -5.2,7 -3.5,1.2 -8,-2.5 -2.4,-2.5"
            fill="#0D47A1"
          />
        </g>

        {/* Top Calligraphy: رَبِّ زِدْنِي عِلْمًا */}
        <text fill="#0D47A1" style={{ fontFamily: "'Amiri', serif", fontWeight: 700 }}>
          <textPath
            href="#topCalligraphyPath"
            startOffset="50%"
            textAnchor="middle"
            fontSize="18"
            letterSpacing="0.05em"
          >
            رَبِّ زِدْنِى عِلْمًا
          </textPath>
        </text>

        {/* Central Torch & Flame */}
        <g id="torchGroup">
          {/* Main outer flame */}
          <path
            d="M100 68 C92 78, 86 88, 88 100 C89 108, 94 114, 100 115 C106 114, 111 108, 112 100 C114 88, 108 78, 100 68 Z"
            fill="url(#torchFlame)"
          />
          {/* Inner tongue of flame */}
          <path
            d="M100 75 C95 83, 92 90, 94 98 C95 104, 98 108, 100 109 C102 108, 105 104, 106 98 C108 90, 105 83, 100 75 Z"
            fill="url(#innerFlame)"
          />
          {/* Flame top flick */}
          <path
            d="M100 64 C98 68, 97 73, 101 77 C100 74, 103 70, 100 64 Z"
            fill="#38BDF8"
          />

          {/* Torch Bowl / Cup */}
          <path
            d="M91 115 L109 115 L107 122 L93 122 Z"
            fill="#1D4ED8"
          />
          <ellipse cx="100" cy="115" rx="9" ry="2.5" fill="#60A5FA" />
          <line x1="91" y1="118" x2="109" y2="118" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />

          {/* Torch Stem / Shaft */}
          <path
            d="M94 122 L106 122 L102 154 C101.5 156, 98.5 156, 98 154 Z"
            fill="url(#torchHandle)"
          />
          <path
            d="M98 154 C98 156.5, 102 156.5, 102 154 Z"
            fill="#1E40AF"
          />
        </g>

        {/* Central Script: اسلامیہ */}
        <text
          x="100"
          y="134"
          textAnchor="middle"
          fill="#0D47A1"
          style={{ fontFamily: "'Amiri', serif", fontWeight: 700, fontSize: "16px" }}
        >
          اسلاميه
        </text>

        {/* Lower Arch Calligraphy: اسلامیہ سٹوڈنٹس اکیڈمی */}
        <text fill="#0D47A1" style={{ fontFamily: "'Amiri', serif", fontWeight: 700 }}>
          <textPath
            href="#bottomCalligraphyPath"
            startOffset="50%"
            textAnchor="middle"
            fontSize="14.5"
            letterSpacing="0.02em"
          >
            اسلامیہ سٹوڈنٹس اکیڈمی
          </textPath>
        </text>

        {/* Bottom Banner Ribbon */}
        {/* Ribbon Left Swallowtail */}
        <path
          d="M20 162 L42 150 L38 174 L20 182 L28 171 Z"
          fill="#072A5E"
        />
        {/* Ribbon Right Swallowtail */}
        <path
          d="M180 162 L158 150 L162 174 L180 182 L172 171 Z"
          fill="#072A5E"
        />
        {/* Main Ribbon Body */}
        <path
          d="M28 160 Q 100 182 172 160 L166 182 Q 100 200 34 182 Z"
          fill="url(#ribbonGrad)"
          stroke="#051E45"
          strokeWidth="0.8"
        />

        {/* Ribbon Text: ISLAMIA STUDENTS ACADEMY */}
        <text
          fill="#FFFFFF"
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            fontWeight: 800,
            fontSize: "7.8px",
            letterSpacing: "0.14em",
          }}
        >
          <textPath
            href="#ribbonTextPath"
            startOffset="50%"
            textAnchor="middle"
          >
            ISLAMIA STUDENTS ACADEMY
          </textPath>
        </text>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-['Cinzel'] text-lg font-bold tracking-tight text-slate-900 leading-tight">
            Islamia Students Academy
          </span>
          <span className="text-xs font-medium text-blue-900/80 font-['Amiri'] -mt-0.5" dir="rtl">
            اسلامیہ سٹوڈنٹس اکیڈمی · علم اور اخلاق کا گہوارہ
          </span>
        </div>
      )}
    </div>
  );
};

export default SchoolLogo;
