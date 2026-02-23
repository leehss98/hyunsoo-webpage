/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Linkedin, 
  ArrowUpRight,
  ChevronDown,
  Plus,
  ArrowRight,
  Briefcase,
  FileText
} from 'lucide-react';

// --- Data ---
const CV_DATA = {
  name: "Hyunsoo Lee",
  title: "Ph.D. Student in Electrical & Computer Engineering",
  institution: "Texas A&M University",
  contact: {
    phone: "979-344-1720",
    email: "leehss98@tamu.edu",
    linkedin: "www.linkedin.com/in/hyunsoo-lee-451a66334",
  },
  researchInterests: [
    {
      category: "Hardware Security & Vulnerability Detection",
      items: [
        "Hardware vulnerability detection in System-on-Chip",
        "PCIe bug detection using hardware fuzzing"
      ]
    },
    {
      category: "VLSI Computer-aided Design (CAD)",
      items: [
        "CAD algorithms for optimizing VLSI design",
        "Full design automation of analog & digital circuits"
      ]
    }
  ],
  education: [
    {
      degree: "Ph.D. in Electrical and Computer Engineering",
      school: "Texas A&M University",
      period: "Sep. 2025 - Present",
      advisor: "Jeyavijayan (JV) Rajendran",
      lab: "Secure and Trustworthy Hardware (SETH) Lab"
    },
    {
      degree: "M.S. in Electronic and Electrical Engineering",
      school: "Kyungpook National University (KNU)",
      period: "Sep. 2023 - Aug. 2025",
      advisor: "Taigon Song",
      lab: "Intelligent 3-Dimensional VLSI (I3D VLSI) Lab"
    },
    {
      degree: "B.S. in Electronics Engineering",
      school: "Kyungpook National University (KNU)",
      period: "Mar. 2017 - Aug. 2023"
    }
  ],
  scholarships: [
    {
      title: "Scholarship for Academic Excellence",
      org: "Kyungpook National University, Korea",
      year: "2017, 2020-2022, 2024"
    },
    {
      title: "International SoC Design Conference (ISOCC) – 2023 AI Semiconductor Forum Award",
      org: "Awarded as the best paper for “High-throughput PIM (Processing in-Memory) for DRAM using Bank-level Pipelined Architecture”",
      year: "Oct. 27, 2023"
    }
  ],
  experience: [
    {
      role: "Ph.D. Researcher",
      lab: "SETH Laboratory (Prof. Jeyavijayan “JV” Rajendran)",
      org: "Texas A&M University",
      period: "Sep. 2025 - Present",
      tasks: ["Research on Hardware Fuzzing in CPU and PCI Express"]
    },
    {
      role: "M.S. Researcher",
      lab: "I3D VLSI Laboratory (Prof. Taigon Song)",
      org: "Kyungpook National University (KNU)",
      period: "Sep. 2023 - Aug. 2025",
      tasks: [
        "Design Automation/Optimization of LC Voltage-Controlled Oscillator (LC-VCO) circuit",
        "Established a Complete LC-VCO auto-design framework with physical layout using Reinforcement Learning",
        "Tape-out AES-128 with Hardware Trojan ASIC",
        "Back-side Power Delivery Network (BSPDN) Optimization using Reinforcement Learning",
        "Low-power AI Accelerator based on Analog Computing in Memory using RRAM"
      ]
    },
    {
      role: "Undergraduate Intern",
      lab: "I3D VLSI Laboratory (Prof. Taigon Song)",
      org: "Kyungpook National University (KNU)",
      period: "Sep. 2021 - Aug. 2023",
      tasks: [
        "Processing-in Memory Using DDR5 SDRAM",
        "Designed PIM architecture using Synopsys EDA tools",
        "Completed Place & Route process of top-level layout"
      ]
    }
  ],
  projects: [
    {
      title: "Autonomous Hardware Vulnerability Detection in PCI Express",
      subtitle: "Hardware Fuzzing in PCIe",
      image: "/src/pic/Picture2.png",
      tag: "Hardware Security"
    },
    {
      title: "Assessing Effective Hardware Verification Techniques in System-on-Chip (SoC)",
      subtitle: "Comparing various Vulnerability detection methods",
      tag: "Hardware Security"
    },
    {
      title: "Designing LC-VCO Automation/Optimization Framework",
      subtitle: "Reinforcement Learning & Layout Automation",
      image: "/src/pic/Sec3_LCVCO_FLOW_v3.jpg",
      tag: "VLSI CAD"
    },
    {
      title: "AES-128 Hardware Trojan ASIC Tape-out",
      subtitle: "Tape-out & Security Analysis",
      image: "/src/pic/Picture1.png",
      tag: "Hardware Security"
    },
    {
      title: "Backside Power Delivery Network (BSPDN) Optimization",
      subtitle: "Reinforcement Learning for IR-drop Reduction",
      image: "/src/pic/Figure_3.jpg",
      tag: "VLSI CAD"
    }
  ],
  publications: [
    {
      title: "Reinforcement Learning-Based Optimization of Back-side Power Delivery Networks in VLSI Design for IR-drop Reduction",
      venue: "Design, Automation and Test in Europe Conference (DATE), 2024",
      authors: "Seungmin Woo, Hyunsoo Lee, Yunjeong Shin, MinSeok Han, Yunjeong Go, Jongbeom Kim, Hyundong Lee, Hyunwoo Kim and Taigon Song"
    },
    {
      title: "High-throughput PIM (Processing in-Memory) for DRAM using Bank-level Pipelined Architecture",
      venue: "IEEE International SoC Design Conference (ISOCC), 2023 (AI Semiconductor Forum Award)",
      authors: "Hyunsoo Lee, Minseung Shin, Gyuri Shin, Sumin Jeon, Hyundong Lee and Taigon Song"
    },
    {
      title: "FS2K: A Forksheet FET Technology Library and a Study of VLSI Prediction for 2nm and Beyond",
      venue: "IEEE International Symposium on Circuits and Systems (ISCAS), 2024",
      authors: "Yunjeong Shin, Daehyeok Park, Dohun Koh, Dongryul Heo, Jieun Park, Hyundong Lee, Jongbeom Kim, Hyunsoo Lee, and Taigon Song"
    }
  ],
  teaching: [
    {
      course: "Digital IP Intensive – Place&Route",
      role: "Teaching Assistant",
      org: "Samsung, Gyeonggi-do, Republic of Korea",
      period: "Nov 2023"
    },
    {
      course: "Digital Integrated Circuit (ELEC0413-002)",
      role: "Teaching Assistant",
      org: "Kyungpook National University (KNU), Daegu, South Korea",
      period: "Fall 2023"
    }
  ],
  skills: [
    {
      category: "Verification Tools",
      items: [
        { vendor: "Cadence", tools: ["Jasper Gold"] },
        { vendor: "Synopsys", tools: ["VC Formal"] }
      ]
    },
    {
      category: "EDA Tools for VLSI Design",
      items: [
        { vendor: "Cadence", tools: ["Virtuoso", "EMX", "Innovus"] },
        { vendor: "Synopsys", tools: ["Custom Compiler", "Design Compiler", "IC Compiler II", "Fusion Compiler", "StarRC", "PrimeTime", "Formality", "PrimeLib"] },
        { vendor: "Ansys", tools: ["Redhawk"] }
      ]
    },
    {
      category: "Simulators",
      list: ["HSPICE", "PrimeSim", "Verdi", "VCS", "Spectre"]
    },
    {
      category: "Programming",
      list: ["Shell script", "TCL", "Python", "SKILL", "LATEX"]
    },
    {
      category: "Developer Tools",
      list: ["Vim", "gVim", "VS Code"]
    }
  ]
};

// --- Components ---

export default function App() {
  return (
    <div className="min-h-screen bg-bg selection:bg-black selection:text-white">
      {/* --- Header --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-center">
          <div className="flex items-center gap-12 text-sm font-bold uppercase tracking-widest">
            <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
            <a href="#research" className="hover:opacity-50 transition-opacity">Research</a>
            <a href="#publications" className="hover:opacity-50 transition-opacity">Publications</a>
          </div>
        </div>
      </nav>

      <main className="pt-40 pb-32 scroll-mt-20" id="about">
        <div className="max-w-7xl mx-auto px-6">
          {/* --- 1. Introduction (Hero) --- */}
          <section className="mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted mb-6">Ph.D. Student · Researcher · Engineer</p>
              <div className="space-y-6 mb-10">
                <p className="text-lg md:text-xl leading-relaxed text-ink/80">
                  My name is <span className="font-bold text-ink">Hyunsoo Lee</span>, and I am currently pursuing a <span className="font-bold text-ink text-lg md:text-xl">Ph.D. in Professor Jeyavijayan (JV) Rajendran’s lab at Texas A&M University</span>, focusing on hardware vulnerability detection. 
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-ink/80">
                  During my master’s program, I worked in the VLSI CAD and design domain, researching algorithms to maximize and automate the performance of analog and digital circuits. Now, building on broad VLSI expertise, I am exploring optimal methodologies for detecting vulnerabilities that can arise in real processors and beyond the hardware level.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 mt-8">
                <a href={`mailto:${CV_DATA.contact.email}`} className="flex items-center gap-2 text-ink/70 hover:text-ink transition-colors font-medium">
                  <Mail className="w-4 h-4" />
                  {CV_DATA.contact.email}
                </a>
                <a href={CV_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ink/70 hover:text-ink transition-colors font-medium">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a href="/src/CV_Hyunsoo-Lee.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ink/70 hover:text-ink transition-colors font-medium">
                  <FileText className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            </div>
            <div className="shrink-0 w-48 aspect-[3/4] md:w-64 rounded-2xl overflow-hidden border border-black/5 shadow-sm">
              <img 
                src="/src/pic/card_photo_HS_Lee.JPG" 
                alt="Hyunsoo Lee" 
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* --- Current Status --- */}
          <section className="mb-32">
            <div className="p-8 md:p-10 bg-light-gray rounded-3xl border border-black/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Briefcase className="w-12 h-12" />
              </div>
              <div className="max-w-3xl relative z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-muted mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Current Status
                </p>
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  I am currently seeking a <span className="text-ink font-bold underline decoration-black/20 underline-offset-4">hardware verification internship</span> in the U.S. I am in F-1 student status and can be authorized to work through Curricular Practical Training (CPT) for an internship.
                </p>
              </div>
            </div>
          </section>

          {/* --- 2. Scholarships/Awards & Education --- */}
          <section className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold tracking-tighter mb-10">Scholarships & Awards</h2>
              </div>
              <div className="space-y-8">
                {CV_DATA.scholarships.map((award: any, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row justify-between items-start border-b border-black/5 pb-6 gap-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">{award.title}</h3>
                      <p className="text-ink/60 font-medium text-sm leading-relaxed">{award.org}</p>
                    </div>
                    <span className="text-sm font-medium text-muted shrink-0">{award.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold tracking-tighter mb-10">Education</h2>
              </div>
            <div className="space-y-8">
                {CV_DATA.education.map((edu: any, idx) => (
                  <div key={idx} className="flex flex-col gap-2 border-b border-black/5 pb-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-ink/70 font-medium">{edu.school}</p>
                      </div>
                      <span className="text-sm font-medium text-muted shrink-0">{edu.period}</span>
                    </div>
                    <div className="text-sm space-y-1">
                      {edu.advisor && <p className="text-muted"><span className="font-semibold text-ink/60">Advisor:</span> {edu.advisor}</p>}
                      {edu.lab && <p className="text-muted"><span className="font-semibold text-ink/60">Lab:</span> {edu.lab}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- 3. Research Interests --- */}
          <section id="research" className="mb-40 scroll-mt-24">
            <div className="mb-12">
              <h2 className="text-4xl font-bold tracking-tighter">Research Interests</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {CV_DATA.researchInterests.map((interest, idx) => (
                <div key={idx} className="p-8 bg-white border border-black/5 rounded-3xl hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold mb-6 text-ink">{interest.category}</h3>
                  <ul className="space-y-4">
                    {interest.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-ink leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* --- 4. Professional Experience (Grid Template) --- */}
          <section className="mb-40">
            <div className="mb-12">
              <h2 className="text-4xl font-bold tracking-tighter">Professional Experience</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {CV_DATA.projects.map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6 group cursor-pointer"
                >
                  <div className="card-image">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-4"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-6 left-6 p-3 bg-white/90 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted">{project.tag}</p>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-ink/80 text-sm">{project.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* --- 5. Publications (Vertical List) --- */}
          <section id="publications" className="mb-40 scroll-mt-24">
            <div className="mb-12">
              <h2 className="text-4xl font-bold tracking-tighter">Publications</h2>
            </div>
            <div className="space-y-10">
              {CV_DATA.publications.map((pub, idx) => (
                <div key={idx} className="border-b border-black/5 pb-10 group">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold leading-tight group-hover:text-muted transition-colors">{pub.title}</h3>
                    <p className="text-lg font-medium text-ink/80 italic">{pub.venue}</p>
                    <p className="text-muted leading-relaxed">
                      {pub.authors.split('Hyunsoo Lee').map((part: string, i: number, arr: any[]) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && <span className="font-bold text-ink underline">Hyunsoo Lee</span>}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- 6. Teaching Experience --- */}
          <section className="mb-40">
            <div className="mb-12">
              <h2 className="text-4xl font-bold tracking-tighter">Teaching Experience</h2>
            </div>
            <div className="space-y-8">
              {CV_DATA.teaching.map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 border border-black/5 rounded-3xl gap-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">{item.course}</h3>
                    <p className="text-ink/60 font-medium">{item.role}</p>
                    <p className="text-sm text-muted uppercase tracking-wider">{item.org}</p>
                  </div>
                  <span className="text-sm font-medium text-muted shrink-0">{item.period}</span>
                </div>
              ))}
            </div>
          </section>

          {/* --- 7. Skills & Certifications --- */}
          <section className="mb-40">
            <div className="mb-12">
              <h2 className="text-4xl font-bold tracking-tighter">Skills & Certifications</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
              {CV_DATA.skills.map((skill: any, idx) => (
                <div key={idx} className="group">
                  <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-muted mb-4 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-black/20" />
                    {skill.category}
                  </h3>
                  <div className="text-ink leading-relaxed font-medium pl-4 border-l border-black/5">
                    {skill.items ? (
                      <div className="space-y-2">
                        {skill.items.map((item: any, i: number) => (
                          <div key={i} className="text-ink">
                            <span>{item.vendor}</span>
                            <span className="text-ink/80"> ({item.tools.join(', ')})</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-ink">{skill.list.join(', ')}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="font-bold text-xl tracking-tighter">Hyunsoo's webpage</div>
          <p className="text-xs opacity-40">© {new Date().getFullYear()} Hyunsoo Lee. Crafted with precision.</p>
        </div>
      </footer>
    </div>
  );
}
