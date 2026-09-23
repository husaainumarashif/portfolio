"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  Download,
  Mail,
  Menu,
  X,
  Code2,
  Database,
  BrainCircuit,
  BarChart3,
  MapPin,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { profile } from "../data/profile";
import { skillGroups } from "../data/skills";
import { projects } from "../data/projects";
import { experience } from "../data/experience";
import { education } from "../data/education";
import { certifications } from "../data/certifications";
import { achievements } from "../data/achievements";

const navItems = [
  ["about", "About"],
  ["work", "Projects"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["achievements", "Achievements"],
  ["contact", "Contact"],
];

const icons = [
  Code2,
  BrainCircuit,
  Database,
  BarChart3,
  Code2,
  TerminalIcon,
];

function TerminalIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <span
      className={className}
      style={{
        fontSize: size,
        lineHeight: 1,
        display: "inline-flex",
      }}
    >
      &gt;_
    </span>
  );
}

export default function Portfolio() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const selected =
    selectedProject !== null ? projects[selectedProject] : null;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08090b] text-[#f2f2ef]">

      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.07] bg-[#08090b]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">

          <a
            href="#top"
            className="font-mono text-sm tracking-wider text-white"
          >
            AR<span className="text-[#8cffb7]">.</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-[12px] text-white/55 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="/Ashif-Raza-Resume.pdf"
            download
            className="hidden items-center gap-2 border border-white/15 px-4 py-2 text-xs font-medium transition hover:border-[#8cffb7]/50 hover:text-[#8cffb7] md:inline-flex"
          >
            Resume
            <Download size={13} />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/[0.07] md:hidden"
            >
              <nav className="flex flex-col px-5 py-4">
                {navItems.map(([id, label]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-white/[0.06] py-4 text-sm text-white/65"
                  >
                    {label}
                  </a>
                ))}

                <a
                  href="/Ashif-Raza-Resume.pdf"
                  download
                  className="mt-4 inline-flex items-center justify-center gap-2 border border-white/15 px-4 py-3 text-sm"
                >
                  Download Resume
                  <Download size={15} />
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section id="top" className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_25%,rgba(140,255,183,0.08),transparent_28%),radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.025),transparent_30%)]" />

        <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:px-10">

          {/* HERO CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#8cffb7]">
              <span className="h-px w-8 bg-[#8cffb7]" />
              AI / ML · Full Stack · Data
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[88px]">
              Ashif
              <br />
              <span className="text-white/40">Raza.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55 sm:text-xl">
              {profile.summary}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-[#f2f2ef] px-5 py-3 text-sm font-medium text-black transition hover:bg-[#8cffb7]"
              >
                View My Work
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="/Ashif-Raza-Resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-sm text-white/80 transition hover:border-white/35 hover:text-white"
              >
                Download Resume
                <Download size={15} />
              </a>
            </div>

            {/* SOCIAL BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-3">

              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 px-4 py-2 font-mono text-xs text-white/50 transition hover:border-[#8cffb7]/40 hover:text-[#8cffb7]"
              >
                GitHub
              </a>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 px-4 py-2 font-mono text-xs text-white/50 transition hover:border-[#8cffb7]/40 hover:text-[#8cffb7]"
              >
                LinkedIn
              </a>

              <a
                href={profile.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 px-4 py-2 font-mono text-xs text-white/50 transition hover:border-[#8cffb7]/40 hover:text-[#8cffb7]"
              >
                LeetCode
              </a>

              <a
                href={profile.links.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 px-4 py-2 font-mono text-xs text-white/50 transition hover:border-[#8cffb7]/40 hover:text-[#8cffb7]"
              >
                HackerRank
              </a>

             <a
                 href="mailto:razaashif395@gmail.com"
                 className="border border-white/10 px-4 py-2 font-mono text-xs text-white/50 transition hover:border-[#8cffb7]/40 hover:text-[#8cffb7]"
            >
                 Email
            </a>
            </div>
          </motion.div>

          {/* PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hidden items-center justify-center lg:flex"
          >
            <div className="relative">

              {/* OUTER FRAME */}
              <div className="absolute -inset-4 border border-[#8cffb7]/20" />

              <div className="absolute -inset-8 border border-white/[0.05]" />

              {/* PHOTO */}
              <div className="relative h-[420px] w-[340px] overflow-hidden border border-white/[0.12] bg-[#111418]">

                <img
                  src="/ashif.jpeg"
                  alt="Ashif Raza"
                  className="h-full w-full object-cover"
                />

                {/* DARK OVERLAY */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090b]/25 via-transparent to-transparent" />

              </div>

              {/* NAME CARD */}
              <div className="absolute -bottom-5 -left-5 border border-white/[0.1] bg-[#0b0d0f] px-4 py-3">

                <p className="font-mono text-[10px] uppercase tracking-wider text-[#8cffb7]">
                  Ashif Raza
                </p>

                <p className="mt-1 font-mono text-[9px] text-white/35">
                  AI/ML · Full Stack · Data Analyst
                </p>

              </div>

              {/* TOP RIGHT LABEL */}
              <div className="absolute -right-4 -top-4 border border-white/[0.1] bg-[#0b0d0f] px-3 py-2">

                <div className="flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-[#8cffb7]" />

                  <span className="font-mono text-[9px] uppercase tracking-wider text-white/45">
                    Available
                  </span>

                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">

          <SectionLabel number="01" title="About" />

          <div className="mt-12 grid gap-12 lg:grid-cols-[.7fr_1.3fr]">

            <h2 className="max-w-md text-3xl font-medium tracking-tight sm:text-4xl">
              Building across the boundary between data, intelligence and
              software.
            </h2>

            <div className="max-w-2xl space-y-5 text-[15px] leading-8 text-white/55">

              <p>{profile.summary}</p>

              <p>
                My technical work spans full-stack applications, analytics
                dashboards, databases, machine learning and AI-oriented
                systems.
              </p>

              <p>
                Alongside technical development, teaching Mathematics and
                Science helped develop communication, patience and
                problem-solving skills.
              </p>

              <div className="flex flex-wrap gap-x-7 gap-y-3 pt-3 font-mono text-[11px] text-white/35">

                <span className="flex items-center gap-2">
                  <MapPin size={13} />
                  {profile.location}
                </span>

                <span className="flex items-center gap-2">
                  <Mail size={13} />
                  {profile.email}
                </span>

                <span className="flex items-center gap-2">
                  <Phone size={13} />
                  {profile.phone}
                </span>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="border-t border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">

          <SectionLabel number="02" title="Selected Work" />

          <div className="mt-12">

            <motion.button
              whileHover={{ y: -4 }}
              onClick={() => setSelectedProject(0)}
              className="group grid w-full overflow-hidden border border-white/[0.09] bg-[#0d0f12] text-left lg:grid-cols-[1.1fr_.9fr]"
            >

              <div className="flex min-h-[360px] flex-col justify-between p-7 sm:p-10">

                <div>

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8cffb7]">
                    Featured Project / 01
                  </span>

                  <h3 className="mt-6 max-w-xl text-3xl font-medium tracking-tight sm:text-5xl">
                    {projects[0].title}
                  </h3>

                  <p className="mt-5 max-w-xl leading-7 text-white/50">
                    {projects[0].description}
                  </p>

                </div>

                <div className="mt-8 flex flex-wrap gap-2">

                  {projects[0].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/10 px-3 py-1.5 font-mono text-[10px] text-white/45"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

              <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden border-t border-white/[0.07] bg-[#111418] lg:border-l lg:border-t-0">

                <div className="absolute inset-8 border border-white/[0.07]" />
                <div className="absolute inset-16 border border-white/[0.05]" />

                <div className="relative text-center">

                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center border border-[#8cffb7]/30 text-[#8cffb7]">
                    <Code2 size={28} />
                  </div>

                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Full-Stack System
                  </p>

                </div>

                <ArrowUpRight
                  size={22}
                  className="absolute right-7 top-7 text-white/30 transition group-hover:text-[#8cffb7]"
                />

              </div>

            </motion.button>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">

            {projects.slice(1).map((project, index) => (

              <motion.button
                key={project.id}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedProject(index + 1)}
                className="group border border-white/[0.08] bg-[#0b0d0f] p-6 text-left transition hover:border-white/[0.16]"
              >

                <div className="flex items-start justify-between">

                  <span className="font-mono text-[10px] text-[#8cffb7]">
                    {String(index + 2).padStart(2, "0")} /{" "}
                    {project.category}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-white/25 transition group-hover:text-[#8cffb7]"
                  />

                </div>

                <h3 className="mt-8 text-xl font-medium">
                  {project.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/45">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] text-white/30"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </motion.button>

            ))}

          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">

          <SectionLabel number="03" title="Technical Stack" />

          <div className="mt-12 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">

            {skillGroups.map((group, index) => {

              const Icon = icons[index % icons.length];

              return (
                <motion.div
                  key={group.title}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,.035)",
                  }}
                  className="bg-[#0b0d0f] p-7"
                >

                  <Icon size={20} className="text-[#8cffb7]" />

                  <h3 className="mt-7 font-mono text-xs uppercase tracking-wider">
                    {group.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-white/[0.08] px-3 py-2 text-xs text-white/50"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-t border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">

          <SectionLabel number="04" title="Experience" />

          <div className="mt-12 divide-y divide-white/[0.08] border-y border-white/[0.08]">

            {experience.map((item) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid gap-5 py-9 lg:grid-cols-[180px_1fr_auto]"
              >

                <span className="font-mono text-[11px] text-[#8cffb7]">
                  {item.period}
                </span>

                <div>

                  <h3 className="text-xl font-medium">
                    {item.role}
                  </h3>

                  <p className="mt-1 text-sm text-white/40">
                    {item.organization}
                  </p>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50">
                    {item.description}
                  </p>

                  {"highlights" in item && item.highlights && (
                    <ul className="mt-4 space-y-2 text-sm text-white/40">

                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2"
                        >
                          <ChevronRight
                            size={15}
                            className="mt-1 shrink-0 text-[#8cffb7]"
                          />
                          {highlight}
                        </li>
                      ))}

                    </ul>
                  )}

                </div>

                <span className="h-fit w-fit border border-white/[0.08] px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-white/35">
                  {item.type}
                </span>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="border-t border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">

          <SectionLabel number="05" title="Education" />

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {education.map((item) => (
              <div
                key={item.degree}
                className="border border-white/[0.08] bg-[#0b0d0f] p-6"
              >

                <span className="font-mono text-[10px] text-[#8cffb7]">
                  {item.period}
                </span>

                <h3 className="mt-6 text-lg font-medium">
                  {item.degree}
                </h3>

                <p className="mt-2 text-sm text-white/45">
                  {item.institution}
                </p>

                <p className="mt-1 text-xs text-white/30">
                  {item.location}
                </p>

                {"performance" in item && item.performance && (
                  <div className="mt-6 border-t border-white/[0.08] pt-4 font-mono text-[10px] leading-6 text-white/40">

                    {item.performance.map((performance) => (
                      <div key={performance}>
                        {performance}
                      </div>
                    ))}

                  </div>
                )}

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CERTIFICATIONS + ACHIEVEMENTS */}
      <section id="achievements" className="border-t border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">

          <SectionLabel
            number="06"
            title="Certifications & Achievements"
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-2">

            {/* CERTIFICATIONS */}
            <div>

              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                Certifications
              </p>

              <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">

                {certifications.map((cert, index) => (
                  <div
                    key={cert.name}
                    className="flex items-center justify-between gap-5 py-4"
                  >

                    <div>

                      <p className="text-sm text-white/70">
                        {cert.name}
                      </p>

                      <p className="mt-1 font-mono text-[10px] text-white/30">
                        {cert.issuer}
                      </p>

                    </div>

                    <span className="font-mono text-[10px] text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>
                ))}

              </div>
            </div>

            {/* ACHIEVEMENTS */}
            <div>

              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                Achievements
              </p>

              <div className="space-y-4">

                {achievements.map((achievement) => (
                  <div
                    key={achievement.title}
                    className="border border-white/[0.08] bg-[#0b0d0f] p-5"
                  >

                    <div className="flex items-center justify-between gap-4">

                      <h3 className="font-medium">
                        {achievement.title}
                      </h3>

                      <span className="font-mono text-[9px] uppercase text-[#8cffb7]">
                        {achievement.category}
                      </span>

                    </div>

                    <p className="mt-3 text-sm leading-6 text-white/45">
                      {achievement.description}
                    </p>

                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:px-10">

          <div className="max-w-3xl">

            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8cffb7]">
              07 / Contact
            </div>

            <h2 className="mt-6 text-4xl font-medium tracking-tight sm:text-6xl">
              Let&apos;s build something useful.
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-white/45">
              Interested in connecting, discussing a project, or exploring
              technical opportunities? Reach out through the channels below.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 bg-[#f2f2ef] px-5 py-3 text-sm font-medium text-black transition hover:bg-[#8cffb7]"
              >
                <Mail size={16} />
                Email Me
              </a>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/15 px-5 py-3 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/15 px-5 py-3 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
              >
                GitHub
              </a>

              <a
                href={profile.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/15 px-5 py-3 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
              >
                LeetCode
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.07]">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">

          <p className="font-mono text-[10px] text-white/25">
            © {new Date().getFullYear()} Ashif Raza
          </p>

          <p className="font-mono text-[10px] text-white/20">
            AI/ML · Full-Stack · Data Analytics
          </p>

        </div>

      </footer>

      {/* PROJECT MODAL */}
      <AnimatePresence>

        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-black/80 p-4 backdrop-blur-md sm:p-8"
            onClick={() => setSelectedProject(null)}
          >

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={(event) => event.stopPropagation()}
              className="mx-auto mt-10 max-w-4xl border border-white/[0.1] bg-[#0b0d0f] p-6 sm:p-10"
            >

              <div className="flex items-start justify-between gap-5">

                <div>

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8cffb7]">
                    {selected.category}
                  </span>

                  <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">
                    {selected.title}
                  </h2>

                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="shrink-0 border border-white/10 p-2 text-white/50 transition hover:text-white"
                  aria-label="Close project details"
                >
                  <X size={18} />
                </button>

              </div>

              <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_.8fr]">

                <div>

                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/25">
                    Overview
                  </p>

                  <p className="mt-4 leading-8 text-white/55">
                    {selected.description}
                  </p>

                  <p className="mt-8 font-mono text-[10px] uppercase tracking-wider text-white/25">
                    Features
                  </p>

                  <ul className="mt-4 space-y-3">

                    {selected.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-white/55"
                      >
                        <ChevronRight
                          size={14}
                          className="text-[#8cffb7]"
                        />
                        {feature}
                      </li>
                    ))}

                  </ul>

                </div>

                <div>

                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/25">
                    Technologies
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">

                    {selected.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border border-white/10 px-3 py-2 font-mono text-[10px] text-white/50"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  <div className="mt-10 border-t border-white/[0.08] pt-6">

                    <p className="font-mono text-[10px] leading-6 text-white/25">
                      Detailed architecture, implementation challenges,
                      outcomes, and project links can be added here when
                      available.
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>
    </main>
  );
}

function SectionLabel({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">

      <span className="font-mono text-[10px] text-[#8cffb7]">
        {number}
      </span>

      <span className="h-px w-10 bg-white/15" />

      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
        {title}
      </span>

    </div>
  );
}