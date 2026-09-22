interface MockupProps {
  id: string;
  className?: string;
}

export function ProjectMockup({ id, className = "" }: MockupProps) {
  switch (id) {
    case "01": // Gen Gizz - Mobile Workforce & Job Discovery
      return (
        <div className={`relative w-full h-full bg-[#0d1117] text-bone font-mono flex items-center justify-center p-4 overflow-hidden select-none ${className}`}>
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:24px_24px] opacity-25" />

          {/* Smartphone Frame */}
          <div className="relative w-[280px] sm:w-[300px] h-[340px] sm:h-[360px] bg-[#161b22] border-2 border-[#30363d] rounded-[36px] shadow-2xl overflow-hidden flex flex-col p-3.5 z-10">
            {/* Phone Speaker Notch */}
            <div className="w-24 h-4 bg-[#0d1117] rounded-full mx-auto mb-3 flex items-center justify-center">
              <div className="w-10 h-1 bg-[#30363d] rounded-full" />
            </div>

            {/* App Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-[#30363d]/80 text-[11px]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-ember animate-pulse" />
                <span className="font-bold tracking-wider text-bone font-sans">GEN GIZZ</span>
              </div>
              <span className="text-[9px] bg-ember/20 text-ember px-2 py-0.5 rounded font-mono">ONLINE</span>
            </div>

            {/* Attendance Punch Card */}
            <div className="mt-3 bg-[#0d1117] p-2.5 rounded-xl border border-[#30363d]">
              <div className="flex justify-between items-center text-[10px] text-smoke">
                <span>DAILY ATTENDANCE</span>
                <span className="text-emerald-400">09:15 AM IN</span>
              </div>
              <div className="mt-1 text-center py-1.5 bg-[#161b22] rounded-lg border border-ember/30">
                <span className="text-xl font-bold font-sans text-ember">06h : 42m : 18s</span>
                <p className="text-[9px] text-smoke mt-0.5">CURRENT SESSION BILLABLE</p>
              </div>
              <div className="mt-2 flex gap-2">
                <button className="flex-1 py-1 rounded bg-emerald-600/80 text-[10px] text-white font-sans font-semibold">PUNCH IN</button>
                <button className="flex-1 py-1 rounded bg-rose-600/80 text-[10px] text-white font-sans font-semibold">PUNCH OUT</button>
              </div>
            </div>

            {/* Job Discovery Section */}
            <div className="mt-2.5 flex-1 bg-[#0d1117] p-2.5 rounded-xl border border-[#30363d] overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[10px] text-smoke mb-1.5">
                  <span>DISCOVER JOBS</span>
                  <span className="text-ember text-[9px]">4 NEW</span>
                </div>
                <div className="space-y-1.5">
                  <div className="bg-[#161b22] p-1.5 rounded border border-[#30363d] flex justify-between items-center text-[10px]">
                    <div>
                      <p className="font-sans font-semibold text-bone">AI/ML Junior Engineer</p>
                      <p className="text-[9px] text-smoke">Advi Groups • Bengaluru</p>
                    </div>
                    <span className="text-[9px] bg-ember/15 text-ember px-1.5 py-0.5 rounded">Full-time</span>
                  </div>
                  <div className="bg-[#161b22] p-1.5 rounded border border-[#30363d] flex justify-between items-center text-[10px]">
                    <div>
                      <p className="font-sans font-semibold text-bone">Full Stack React Dev</p>
                      <p className="text-[9px] text-smoke">Remote • Contract</p>
                    </div>
                    <span className="text-[9px] bg-blue-500/15 text-blue-400 px-1.5 py-0.5 rounded">Remote</span>
                  </div>
                </div>
              </div>
              <p className="text-[8px] text-smoke text-center mt-1">Firestore Realtime Sync • Active</p>
            </div>
          </div>
        </div>
      );

    case "02": // E-Commerce Sales Performance Dashboard with Cohort Analysis
      return (
        <div className={`relative w-full h-full bg-[#0a0e14] text-bone font-sans p-4 sm:p-5 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-[#262622]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-[#ff4d00]" />
              <span className="font-bold text-xs sm:text-sm tracking-wide text-bone">POWER BI • SALES COHORT ANALYTICS</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-smoke">
              <span className="px-2 py-0.5 rounded bg-[#161b22] border border-[#262622]">DAX ENGINE</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">LIVE DATA</span>
            </div>
          </div>

          {/* Metric KPIs */}
          <div className="grid grid-cols-4 gap-2 my-2.5">
            {[
              { label: "TOTAL REVENUE", val: "$482,920", trend: "+18.4%" },
              { label: "AVG ORDER VALUE", val: "$142.50", trend: "+6.2%" },
              { label: "REPEAT RATE", val: "42.8%", trend: "+9.1%" },
              { label: "COHORT RETENTION", val: "68.2%", trend: "+12.0%" },
            ].map((k) => (
              <div key={k.label} className="bg-[#12161f] border border-[#262622] p-2 rounded">
                <p className="text-[8px] sm:text-[9px] text-smoke tracking-wider font-mono">{k.label}</p>
                <p className="text-xs sm:text-base font-extrabold text-bone mt-0.5">{k.val}</p>
                <span className="text-[8px] sm:text-[9px] text-emerald-400 font-mono">{k.trend} vs LY</span>
              </div>
            ))}
          </div>

          {/* Cohort Heatmap Visual */}
          <div className="flex-1 bg-[#12161f] border border-[#262622] p-2.5 rounded flex flex-col justify-between">
            <div className="flex justify-between items-center text-[9px] text-smoke font-mono mb-1.5">
              <span>CUSTOMER COHORT RETENTION MATRIX (BY MONTH)</span>
              <span className="text-ember font-bold">100% → M+6</span>
            </div>
            <div className="space-y-1 font-mono text-[8px] sm:text-[9px]">
              {[
                { cohort: "2024-01", m0: "100%", m1: "62%", m2: "54%", m3: "48%", m4: "43%", m5: "39%" },
                { cohort: "2024-02", m0: "100%", m1: "65%", m2: "58%", m3: "52%", m4: "46%", m5: "-" },
                { cohort: "2024-03", m0: "100%", m1: "68%", m2: "61%", m3: "55%", m4: "-", m5: "-" },
                { cohort: "2024-04", m0: "100%", m1: "71%", m2: "64%", m3: "-", m4: "-", m5: "-" },
              ].map((r) => (
                <div key={r.cohort} className="grid grid-cols-7 gap-1 items-center">
                  <span className="text-smoke">{r.cohort}</span>
                  <span className="bg-emerald-600/60 text-white text-center rounded py-0.5">{r.m0}</span>
                  <span className="bg-emerald-600/40 text-emerald-200 text-center rounded py-0.5">{r.m1}</span>
                  <span className="bg-emerald-600/30 text-emerald-300 text-center rounded py-0.5">{r.m2}</span>
                  <span className="bg-emerald-700/25 text-emerald-300 text-center rounded py-0.5">{r.m3}</span>
                  <span className="bg-emerald-800/20 text-smoke text-center rounded py-0.5">{r.m4}</span>
                  <span className="bg-emerald-900/10 text-smoke text-center rounded py-0.5">{r.m5}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[8px] text-smoke font-mono pt-1 border-t border-[#262622]">
              <span>DRILL-DOWN: REGIONS • CATEGORIES</span>
              <span className="text-ember">DAX KPI CALCULATIONS</span>
            </div>
          </div>
        </div>
      );

    case "03": // Legal Semantic Search
      return (
        <div className={`relative w-full h-full bg-[#0b0f17] text-bone font-sans p-4 sm:p-5 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          {/* Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-[#1f2937]">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 text-[10px] font-mono font-bold">STREAMLIT</span>
              <span className="text-xs sm:text-sm font-bold text-bone font-sans">LEGAL SEMANTIC SEARCH ENGINE</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> NLP VECTOR INDEX READY
            </span>
          </div>

          {/* Search bar simulation */}
          <div className="my-2 bg-[#161e2e] border border-ember/40 rounded-lg p-2.5 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-2 text-xs font-mono text-bone">
              <span className="text-ember font-bold">query:</span>
              <span className="text-smoke">"breach of intellectual property in AI datasets"</span>
            </div>
            <span className="text-[10px] bg-ember text-ink font-bold px-2 py-0.5 rounded">SEARCH</span>
          </div>

          {/* Search result cards */}
          <div className="space-y-2 flex-1">
            <div className="bg-[#111827] border border-[#1f2937] p-2.5 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-bold text-xs text-bone">Supreme Court of India • Civil Appeal No. 4128/2023</span>
                <span className="text-[9px] font-mono bg-emerald-500/15 text-emerald-300 px-2 py-0.5 rounded">98.4% SIMILARITY</span>
              </div>
              <p className="text-[10px] text-smoke mt-1 line-clamp-2">
                "Subject: Copyright infringement, training data provenance, fair dealing defense in computational learning models..."
              </p>
              <div className="mt-1.5 flex gap-2 text-[8px] font-mono text-smoke">
                <span className="bg-[#1f2937] px-1.5 py-0.5 rounded">DATE: 14-OCT-2023</span>
                <span className="bg-[#1f2937] px-1.5 py-0.5 rounded">VERDICT: JUDGMENT DELIVERED</span>
                <span className="bg-[#1f2937] px-1.5 py-0.5 rounded">METADATA: INDEXED</span>
              </div>
            </div>

            <div className="bg-[#111827] border border-[#1f2937] p-2.5 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-bold text-xs text-bone">High Court of Karnataka • WP No. 18290/2022</span>
                <span className="text-[9px] font-mono bg-emerald-500/15 text-emerald-300 px-2 py-0.5 rounded">93.1% SIMILARITY</span>
              </div>
              <p className="text-[10px] text-smoke mt-1 line-clamp-2">
                "Subject: Proprietary database extraction, semantic search retrieval benchmarks and commercial licensing covenants..."
              </p>
            </div>
          </div>

          <div className="flex justify-between text-[9px] text-smoke font-mono pt-2 border-t border-[#1f2937]">
            <span>BACKEND: PYTHON • SQLITE • VECTOR EMBEDDINGS</span>
            <span className="text-ember">SEMANTIC RANKING APPLIED</span>
          </div>
        </div>
      );

    case "04": // MockTrack - Gamified Coding Quiz App
      return (
        <div className={`relative w-full h-full bg-[#0e1217] text-bone font-mono p-4 flex items-center justify-center overflow-hidden select-none ${className}`}>
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#262622_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

          {/* MockTrack App Screen */}
          <div className="relative w-[300px] sm:w-[320px] bg-[#171c24] border-2 border-ember/30 rounded-2xl p-4 shadow-2xl z-10 flex flex-col">
            <div className="flex justify-between items-center pb-2 border-b border-[#262622]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-ember" />
                <span className="font-bold text-xs text-bone font-sans">MOCKTRACK® QUIZ</span>
              </div>
              <span className="text-[10px] font-mono bg-ember/20 text-ember px-2 py-0.5 rounded">TIME: 00:45s</span>
            </div>

            {/* Quiz Progress */}
            <div className="mt-3">
              <div className="flex justify-between text-[9px] text-smoke mb-1">
                <span>QUESTION 7 OF 15</span>
                <span className="text-emerald-400">SCORE: 60 PTS</span>
              </div>
              <div className="w-full h-1.5 bg-[#0e1217] rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-ember" />
              </div>
            </div>

            {/* Question Card */}
            <div className="mt-3 bg-[#0e1217] p-3 rounded-lg border border-[#262622]">
              <span className="text-[9px] text-ember uppercase tracking-wider">PYTHON • DATA STRUCTURES</span>
              <p className="text-[11px] font-sans text-bone font-semibold mt-1">
                What is the time complexity of searching a key in an average Python dictionary?
              </p>
            </div>

            {/* Answer Options */}
            <div className="mt-2.5 space-y-1.5">
              <div className="bg-[#0e1217] p-2 rounded border border-[#262622] text-[10px] text-smoke flex items-center justify-between">
                <span>A) O(n)</span>
                <span className="text-[8px] text-smoke">Linear</span>
              </div>
              <div className="bg-emerald-500/15 p-2 rounded border border-emerald-500/40 text-[10px] text-emerald-300 font-bold flex items-center justify-between">
                <span>B) O(1) [Correct Answer]</span>
                <span className="text-[8px] text-emerald-400">Hash Lookup</span>
              </div>
              <div className="bg-[#0e1217] p-2 rounded border border-[#262622] text-[10px] text-smoke flex items-center justify-between">
                <span>C) O(log n)</span>
                <span className="text-[8px] text-smoke">Logarithmic</span>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-3 pt-2 border-t border-[#262622] flex justify-between items-center text-[8px] text-smoke">
              <span>ANDROID STUDIO • DART • FIREBASE</span>
              <span className="text-ember font-bold">NEXT QUESTION →</span>
            </div>
          </div>
        </div>
      );

    case "05": // Student Management System
      return (
        <div className={`relative w-full h-full bg-[#0a0d14] text-bone font-sans p-4 sm:p-5 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#1f293d]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded bg-blue-500" />
              <span className="font-bold text-xs sm:text-sm text-bone">ACADEMIC STUDENT MANAGEMENT PORTAL</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-smoke">
              <span className="px-2 py-0.5 rounded bg-[#131b2e] border border-[#1f293d]">ROLE: FACULTY ADMIN</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">ACTIVE SEMESTER</span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 my-2.5">
            <div className="bg-[#111726] border border-[#1f293d] p-2 rounded">
              <p className="text-[9px] text-smoke font-mono">TOTAL ENROLLED</p>
              <p className="text-sm sm:text-base font-bold text-bone">1,248 Students</p>
            </div>
            <div className="bg-[#111726] border border-[#1f293d] p-2 rounded">
              <p className="text-[9px] text-smoke font-mono">AVG ATTENDANCE</p>
              <p className="text-sm sm:text-base font-bold text-emerald-400">92.4%</p>
            </div>
            <div className="bg-[#111726] border border-[#1f293d] p-2 rounded">
              <p className="text-[9px] text-smoke font-mono">PENDING GRADES</p>
              <p className="text-sm sm:text-base font-bold text-ember">4 Modules</p>
            </div>
          </div>

          {/* Student Records Table */}
          <div className="flex-1 bg-[#111726] border border-[#1f293d] p-2.5 rounded overflow-hidden flex flex-col justify-between">
            <div className="flex justify-between items-center text-[9px] font-mono text-smoke mb-1.5 pb-1 border-b border-[#1f293d]">
              <span>USN / ID</span>
              <span>NAME</span>
              <span>DEPARTMENT</span>
              <span>ATTENDANCE</span>
              <span>GRADE</span>
            </div>
            <div className="space-y-1.5 font-mono text-[9px]">
              {[
                { usn: "1KL22BCA01", name: "Aarav Sharma", dept: "BCA CS", att: "94%", grade: "A+" },
                { usn: "1KL22BCA14", name: "Ananya Rao", dept: "BCA AI", att: "89%", grade: "A" },
                { usn: "1KL22BCA28", name: "Jeevan M", dept: "MCA AIML", att: "96%", grade: "O" },
                { usn: "1KL22BCA35", name: "Kiran Kumar", dept: "BCA Data", att: "88%", grade: "B+" },
              ].map((s) => (
                <div key={s.usn} className="flex justify-between items-center py-1 px-1.5 rounded hover:bg-[#1a233a] transition-colors">
                  <span className="text-ember font-bold">{s.usn}</span>
                  <span className="text-bone font-sans">{s.name}</span>
                  <span className="text-smoke">{s.dept}</span>
                  <span className="text-emerald-400">{s.att}</span>
                  <span className="bg-coal px-1.5 py-0.5 rounded border border-[#1f293d] text-bone font-bold">{s.grade}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[8px] text-smoke font-mono pt-1.5 border-t border-[#1f293d] mt-1">
              <span>CRUD OPS: ADD • UPDATE • ENROLL • EXPORT</span>
              <span className="text-ember">PYTHON DATABASE ADAPTER</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
