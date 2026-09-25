import React, { useState } from "react";
import { motion } from "framer-motion";
import { tools } from "../../../pages/data"; //[cite: 1]

// Data Tech Stack
const techRegistry = [
  // ================= FRONTEND =================
  { name: 'HTML', category: 'frontend', color: '#e34f26', xp: '6+ Years', level: '99%', role: 'Markup Language', desc: 'Semantic markup and web structure.', tags: ['Semantic', 'DOM', 'A11y'], symbol: 'H5', x: 10, y: 30 },
  { name: 'CSS', category: 'frontend', color: '#1572b6', xp: '6+ Years', level: '95%', role: 'Styling', desc: 'Responsive modern CSS layouts & animations.', tags: ['Flex/Grid', 'Keyframes', 'Responsive'], symbol: 'C3', x: 25, y: 80 },
  { name: 'JavaScript', category: 'frontend', color: '#facc15', xp: '5+ Years', level: '96%', role: 'Language Core', desc: 'Modern ESNext, asynchronous flows, web workers & DOM high-performance optimization.', tags: ['ESNext', 'Async/Await', 'Event Loop'], symbol: 'JS', x: 38, y: 20 },
  { name: 'BOOTSTRAP', category: 'frontend', color: '#c084fc', xp: '4 Years', level: '90%', role: 'UI Foundation', desc: 'Responsive grid layout systems, CSS variables, and rapid UI component prototyping.', tags: ['Grid System', 'Flexbox', 'Breakpoints'], symbol: 'B', x: 26, y: 48 },
  { name: 'React', category: 'frontend', color: '#38bdf8', xp: '4+ Years', level: '95%', role: 'Client UI Framework', desc: 'Component architecture, custom hooks, suspense, SSR state reconciliation & Next.js ecosystem.', tags: ['Hooks', 'Context API', 'SSR', 'Next.js'], symbol: '⚛️', x: 20, y: 22 },
  { name: 'TailwinCSS', category: 'frontend', color: '#2dd4bf', xp: '4 Years', level: '98%', role: 'Utility Engine', desc: 'Utility-first styling, dynamic design tokens, custom plugins and JIT compilation.', tags: ['JIT', 'Responsive Grid', 'Plugins'], symbol: '≈', x: 8, y: 76 },
  { name: 'Vuejs', category: 'frontend', color: '#4ade80', xp: '3 Years', level: '88%', role: 'Progressive Framework', desc: 'Composition API, Pinia centralized state management & Nuxt 3 fullstack web apps.', tags: ['Pinia', 'Nuxt 3', 'Composition API'], symbol: 'V', x: 12, y: 50 },
  { name: 'Typescript', category: 'frontend', color: '#60a5fa', xp: '4 Years', level: '92%', role: 'Static Type System', desc: 'Strict typing, generics, AST transformations & contract safety across fullstack boundaries.', tags: ['Generics', 'Utility Types', 'AST'], symbol: 'TS', x: 30, y: 78 },

  // ================= BACKEND =================
  { name: 'PHP', category: 'backend', color: '#777bb4', xp: '3 Years', level: '85%', role: 'Server Scripting', desc: 'Server-side scripting language for web development.', tags: ['Backend', 'Server', 'Scripting'], symbol: 'PHP', x: 45, y: 35 },
  { name: 'MYSQL', category: 'backend', color: '#f59e0b', xp: '5 Years', level: '90%', role: 'Relational Database', desc: 'Schema architecture, query profiling, indexing tuning & replication strategies.', tags: ['Indexes', 'Query Tuning', 'Relational'], symbol: 'SQL', x: 56, y: 86 },
  { name: 'C Shap', category: 'backend', color: '#a855f7', xp: '2+ Years', level: '84%', role: 'Enterprise Language', desc: 'Object-oriented programming language for .NET framework.', tags: ['OOP', 'Backend', 'Strongly Typed'], symbol: 'C#', x: 44, y: 82 },
  { name: 'postgreSQL', category: 'backend', color: '#38bdf8', xp: '4 Years', level: '94%', role: 'Relational Database', desc: 'Advanced JSONB querying, triggers, stored procedures, indexing & ACID transaction pipelines.', tags: ['ACID', 'JSONB', 'Partitioning'], symbol: '🐘', x: 65, y: 78 },
  { name: 'Node Js', category: 'backend', color: '#22c55e', xp: '4+ Years', level: '92%', role: 'Server Runtime', desc: 'Express, NestJS, event-loop optimization, streaming file I/O and microservices.', tags: ['Express', 'NestJS', 'Streams', 'Async'], symbol: '⬢', x: 50, y: 15 },
  { name: '.Net', category: 'backend', color: '#512bd4', xp: '2+ Years', level: '84%', role: 'Enterprise Web API', desc: 'ASP.NET Core Web APIs, Entity Framework Core, LINQ and dependency injection.', tags: ['ASP.NET Core', 'EF Core', 'LINQ'], symbol: '.NET', x: 55, y: 60 },
  { name: 'Laravel', category: 'backend', color: '#ef4444', xp: '3 Years', level: '86%', role: 'MVC Framework', desc: 'Eloquent ORM, queues, Artisan CLI, event broadcast & enterprise authentication.', tags: ['Eloquent', 'Artisan', 'Jobs & Queues'], symbol: 'L', x: 62, y: 22 },
  { name: 'SQLite', category: 'backend', color: '#7dd3fc', xp: '3 Years', level: '88%', role: 'Embedded Database', desc: 'Lightweight serverless embedded database, local cache & fast file-based SQL storage.', tags: ['Zero-Config', 'Embedded', 'Local Cache'], symbol: 'Lite', x: 50, y: 68 },

  // ================= TOOLS =================
  { name: 'git', category: 'tools', color: '#f97316', xp: '5+ Years', level: '96%', role: 'Version Control', desc: 'Branching strategies, rebase workflows, submodules, interactive staging & git hooks.', tags: ['Interactive Rebase', 'Submodules', 'Hooks'], symbol: '⌥', x: 78, y: 22 },
  { name: 'github', category: 'tools', color: '#64748b', xp: '5+ Years', level: '95%', role: 'CI/CD Platform', desc: 'GitHub Actions, automated matrix testing, release automation, and branch protection.', tags: ['GitHub Actions', 'Workflows', 'Secrets'], symbol: '🐙', x: 88, y: 35 },
  { name: 'Swagger', category: 'tools', color: '#34d399', xp: '4 Years', level: '90%', role: 'API Contract', desc: 'OpenAPI 3.0 schema definitions, automated contract testing & interactive client documentation.', tags: ['OpenAPI 3.0', 'Interactive Specs', 'Contracts'], symbol: 'SW', x: 90, y: 72 },
  { name: 'Vite', category: 'tools', color: '#c084fc', xp: '3 Years', level: '92%', role: 'Build Tooling', desc: 'Instant ESM-based hot module replacement, Rollup bundle pipeline & custom plugin development.', tags: ['HMR', 'Rollup Bundler', 'Fast Dev'], symbol: '⚡', x: 80, y: 55 }
];

const coreSystemMock = {
  name: 'Core System Stack',
  category: 'Unified Architecture',
  color: '#38bdf8',
  level: '98%',
  xp: '5+ Years',
  role: 'Full-Stack Ecosystem',
  desc: 'High-availability full-stack architecture harmonizing reactive interfaces, distributed backend services, and automated CI/CD deployment channels.',
  tags: ['Full-Stack', 'APIs', 'Microservices', 'Clean Code'],
  symbol: '⚡',
  x: 50, // Perbaikan TypeScript
  y: 50  // Perbaikan TypeScript
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState("topology");
  const [selectedTech, setSelectedTech] = useState(techRegistry.find(t => t.name === 'React') || techRegistry[0]);

  // Perbaikan TypeScript: Tambahkan string type
  const handleCategoryFilter = (cat: string) => {
    setActiveCategory(cat);
  };

  const handleRandomTech = () => {
    const randomItem = techRegistry[Math.floor(Math.random() * techRegistry.length)];
    setSelectedTech(randomItem);
  };

  // Perbaikan TypeScript: Tambahkan string type dan return undefined instead of null
  const getToolImage = (techName: string) => {
    const foundTool = tools.find((t) => t.title === techName);
    return foundTool ? foundTool.image : undefined; 
  };

  return (
    <section id="skills" className="w-full py-16 select-none overflow-hidden relative">
      <style>{`
        @keyframes linePulse { 0% { stroke-dashoffset: 40; } 100% { stroke-dashoffset: 0; } }
        .anim-pulse-line { stroke-dasharray: 6 6; animation: linePulse 2.2s linear infinite; }
        @keyframes radarPing { 0% { transform: scale(0.85); opacity: 0.8; } 70% { transform: scale(1.4); opacity: 0; } 100% { transform: scale(1.4); opacity: 0; } }
        .radar-wave { animation: radarPing 3s cubic-bezier(0, 0.2, 0.8, 1) infinite; }
        .bg-tech-grid { background-size: 32px 32px; background-image: linear-gradient(to right, var(--border-color) 1px, transparent 1px), linear-gradient(to bottom, var(--border-color) 1px, transparent 1px); opacity: 0.2; }
      `}</style>

      {/* HEADER */}
      <div className="mb-8 md:mb-12 text-center md:text-left flex flex-col md:flex-row md:justify-between md:items-end gap-6">
        <div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[var(--text-primary)] font-bold tracking-wide">
            [Skills & Tech Stack.]
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-3 max-w-xl">
            Interactive topology map and competency telemetry. Select nodes or filter categories to inspect production-tested frameworks, backends, and tooling.
          </p>
        </div>
      </div>

      {/* FILTER & TABS */}
      <div className="mb-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
        <div className="inline-flex p-1 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-sm">
          {['all', 'frontend', 'backend', 'tools'].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryFilter(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all capitalize flex items-center gap-1.5
                ${activeCategory === cat 
                  ? 'bg-[var(--text-primary)] text-[var(--bg-main)] shadow-md' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
            >
              {cat === 'all' ? 'All Elements' : cat}
            </button>
          ))}
        </div>

        <div className="inline-flex p-1 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-sm">
          <button
            onClick={() => setViewMode('topology')}
            className={`px-3 py-2 text-xs font-semibold rounded-xl transition-all ${viewMode === 'topology' ? 'bg-[var(--text-primary)] text-[var(--bg-main)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
          >
            Topology Map
          </button>
          <button
            onClick={() => setViewMode('matrix')}
            className={`px-3 py-2 text-xs font-semibold rounded-xl transition-all ${viewMode === 'matrix' ? 'bg-[var(--text-primary)] text-[var(--bg-main)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
          >
            Radar Matrix
          </button>
        </div>
      </div>

      {/* CENTERPIECE: INTERACTIVE WORKSPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch mb-10 w-full">
        
        {/* LEFT PANEL */}
        <div className="lg:col-span-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] p-5 sm:p-7 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[460px] sm:min-h-[500px]">
          <div className="absolute inset-0 bg-tech-grid pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--border-color)]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
                {viewMode === 'topology' ? 'Architectural Ecosystem' : 'Categorical View'}
              </h3>
            </div>
            <button 
              onClick={() => {setActiveCategory('all'); setSelectedTech(techRegistry.find(t => t.name === 'React') || techRegistry[0]);}}
              className="px-2.5 py-1 rounded-lg bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition text-[11px]"
            >
              Reset View
            </button>
          </div>

          {/* VIEW: TOPOLOGY */}
          {viewMode === 'topology' && (
            <div className="relative z-10 my-4 flex-1 flex items-center justify-center min-h-[360px] sm:min-h-[390px] select-none">
              <div className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] rounded-full border border-sky-500/10 pointer-events-none flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-sky-400/20 radar-wave"></div>
              </div>
              <div className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full border border-dashed border-[var(--border-color)] pointer-events-none"></div>
              
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
                {techRegistry.map((tech) => (
                  <line 
                    key={`line-${tech.name}`}
                    x1="50%" y1="50%" 
                    x2={`${tech.x}%`} y2={`${tech.y}%`}
                    stroke={tech.color}
                    strokeWidth="1.2"
                    className={`anim-pulse-line transition-opacity duration-300 ${activeCategory === 'all' || activeCategory === tech.category ? 'opacity-30' : 'opacity-[0.03]'}`}
                  />
                ))}
              </svg>

              <div 
                onClick={() => setSelectedTech(coreSystemMock)}
                className="relative z-20 group cursor-pointer"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[var(--card-bg)] border border-sky-400/50 shadow-md flex flex-col items-center justify-center text-center p-2.5 transition-all duration-300 group-hover:scale-105 group-hover:border-sky-400">
                  <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-500 flex items-center justify-center mb-1">
                    ⚡
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-primary)] font-bold">STACK</span>
                  <span className="text-[9px] font-mono text-[var(--text-secondary)] font-semibold">KERNEL</span>
                </div>
              </div>

              {/* Orbiting Nodes dg Gambar Dinamis */}
              <div className="absolute inset-0 z-10">
                {techRegistry.map((tech) => {
                  const toolImage = getToolImage(tech.name);
                  
                  return (
                    <button
                      key={`node-${tech.name}`}
                      onClick={() => setSelectedTech(tech)}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-2xl bg-[var(--bg-main)] border shadow-sm transition-all duration-300 cursor-pointer flex items-center gap-1.5 group select-none backdrop-blur-md
                        ${selectedTech.name === tech.name ? 'ring-2 ring-offset-2 ring-offset-[var(--card-bg)] scale-110 z-30' : 'border-[var(--border-color)] hover:border-[var(--text-primary)] z-10'}
                        ${activeCategory === 'all' || activeCategory === tech.category ? 'opacity-100' : 'opacity-20 pointer-events-none scale-90'}
                      `}
                      // Perbaikan TypeScript: Hanya satu style attribute
                      style={{ 
                        left: `${tech.x}%`, 
                        top: `${tech.y}%`, 
                        borderColor: selectedTech.name === tech.name ? tech.color : 'var(--border-color)' 
                      }}
                    >
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs" style={{ backgroundColor: `${tech.color}15`, color: tech.color }}>
                        {toolImage ? (
                          <img src={toolImage} alt={tech.name} className="w-4 h-4 object-contain dark:invert-[.15]" />
                        ) : (
                          tech.symbol
                        )}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono font-medium text-[var(--text-primary)] hidden sm:inline">
                        {tech.name}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* VIEW: MATRIX */}
          {viewMode === 'matrix' && (
            <div className="relative z-10 my-4 flex-1 select-none overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 h-full">
                {['frontend', 'backend', 'tools'].map((cat) => (
                  <div key={`matrix-${cat}`} className={`p-4 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-color)] flex flex-col ${activeCategory !== 'all' && activeCategory !== cat ? 'opacity-30 grayscale' : ''}`}>
                    <h4 className="text-xs font-mono font-bold text-[var(--text-primary)] uppercase mb-3 border-b border-[var(--border-color)] pb-2">
                      {cat} Ecosystem
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techRegistry.filter(t => t.category === cat).map((tech) => (
                        <span key={tech.name} onClick={() => setSelectedTech(tech)} className={`cursor-pointer text-[10px] font-mono px-2 py-1 rounded bg-[var(--card-bg)] border transition-all ${selectedTech.name === tech.name ? 'scale-105' : 'hover:border-[var(--text-primary)]'}`} style={{ color: tech.color, borderColor: selectedTech.name === tech.name ? tech.color : 'var(--border-color)' }}>
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="relative z-10 pt-3 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between text-xs text-[var(--text-secondary)] font-mono gap-2">
            <div className="flex items-center gap-4">
              <span>Frontend ({techRegistry.filter(t=>t.category === 'frontend').length})</span>
              <span>Backend ({techRegistry.filter(t=>t.category === 'backend').length})</span>
              <span>Tools ({techRegistry.filter(t=>t.category === 'tools').length})</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-500 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Production Ready
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: LIVE INSPECTOR */}
        <div className="lg:col-span-4 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] p-6 sm:p-7 shadow-sm relative flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-secondary)]">Live Inspector</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">ACTIVE</span>
            </div>
            
            <div className="p-5 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-color)] shadow-inner mb-5 transition-all">
              <div className="flex items-center gap-3.5 mb-3">
                <div 
                  className="w-12 h-12 rounded-xl border flex items-center justify-center font-mono font-extrabold text-lg"
                  style={{ backgroundColor: `${selectedTech.color}15`, color: selectedTech.color, borderColor: `${selectedTech.color}50` }}
                >
                  {getToolImage(selectedTech.name) ? (
                    <img src={getToolImage(selectedTech.name)} alt={selectedTech.name} className="w-7 h-7 object-contain dark:invert-[.15]" />
                  ) : (
                    selectedTech.symbol
                  )}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">{selectedTech.name}</h4>
                  <p className="text-xs font-mono uppercase tracking-wide" style={{ color: selectedTech.color }}>{selectedTech.category} Architecture</p>
                </div>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed min-h-[48px]">
                {selectedTech.desc}
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-[var(--text-secondary)] font-mono">Mastery</span>
                  <span className="font-mono font-bold" style={{ color: selectedTech.color }}>{selectedTech.level}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[var(--bg-main)] overflow-hidden border border-[var(--border-color)]">
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: selectedTech.level, backgroundColor: selectedTech.color }}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-2.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)]">
                  <span className="text-[10px] font-mono text-[var(--text-secondary)] block uppercase">Experience</span>
                  <span className="text-xs font-mono font-bold text-[var(--text-primary)]">{selectedTech.xp}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)]">
                  <span className="text-[10px] font-mono text-[var(--text-secondary)] block uppercase">Ecosystem Role</span>
                  <span className="text-xs font-mono font-bold text-[var(--text-primary)]">{selectedTech.role}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] mt-3">
                <span className="text-[10px] font-mono text-[var(--text-secondary)] block uppercase mb-2">Key Modules</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTech.tags.map(t => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-color)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
            <span className="text-[11px] font-mono text-[var(--text-secondary)]">Tap nodes to inspect</span>
            <button onClick={handleRandomTech} className="text-xs font-mono hover:text-[var(--text-primary)] text-[var(--text-secondary)] transition">
              Explore Stack →
            </button>
          </div>
        </div>
      </div>

      {/* BENTO GRID CATEGORIES (BOTTOM) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {[
          { id: 'frontend', title: 'Frontend Development', icon: '💻', color: '#38bdf8', desc: 'Crafting interactive, ultra-responsive, accessible, and performant user interfaces.' },
          { id: 'backend', title: 'Backend & Database', icon: '🗄️', color: '#10b981', desc: 'Building scalable APIs, microservices, and robust relational data models.' },
          { id: 'tools', title: 'Tools & Ecosystem', icon: '🛠️', color: '#8b5cf6', desc: 'Development instrumentation, version control, CI/CD pipelines, and workflow automation.' }
        ].map((cat, idx) => (
          <motion.article 
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={`group rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] p-6 sm:p-7 shadow-sm transition-all duration-300 flex flex-col justify-between
              ${activeCategory !== 'all' && activeCategory !== cat.id ? 'opacity-30 grayscale' : 'hover:border-[var(--text-primary)]/30'}
            `}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border text-xl" style={{ backgroundColor: `${cat.color}15`, borderColor: `${cat.color}30` }}>
                    {cat.icon}
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)]">
                    {cat.title}
                  </h2>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                {cat.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {techRegistry.filter(t => t.category === cat.id).map(tech => (
                  <button 
                    key={tech.name}
                    onClick={() => { 
                      setSelectedTech(tech); 
                      setActiveCategory(cat.id); 
                      // Perbaikan TypeScript: Tambahkan ?. (Optional Chaining) agar tidak null
                      window.scrollTo({ top: document.getElementById('skills')?.offsetTop || 0, behavior: 'smooth' }); 
                    }}
                    className={`px-3 py-1.5 rounded-full bg-[var(--bg-main)] border text-xs font-medium transition-all flex items-center gap-1.5
                      ${selectedTech.name === tech.name ? 'text-[var(--bg-main)]' : 'text-[var(--text-primary)] hover:border-[var(--text-primary)]'}`}
                    style={{ 
                      borderColor: selectedTech.name === tech.name ? tech.color : 'var(--border-color)',
                      backgroundColor: selectedTech.name === tech.name ? tech.color : 'var(--bg-main)'
                    }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedTech.name === tech.name ? 'var(--bg-main)' : tech.color }}></span>
                    <span>{tech.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="pt-4 border-t border-[var(--border-color)]">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-[var(--text-secondary)] font-mono">Category Mastery</span>
                <span className="font-mono font-bold" style={{ color: cat.color }}>Advanced</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[var(--bg-main)] border border-[var(--border-color)] overflow-hidden">
                <div className="h-full rounded-full w-[90%]" style={{ backgroundColor: cat.color }}></div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}