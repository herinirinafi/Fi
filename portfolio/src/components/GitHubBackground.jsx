const githubAvatar = 'https://avatars.githubusercontent.com/u/171402509?v=4'

const days = ['L', 'M', 'W', 'F']

const greenLevels = ['#0d1117', '#0e4429', '#006d32', '#26a641', '#39d353']

function deterministic(n) {
  const x = Math.sin(n * 999.9) * 10000
  return x - Math.floor(x)
}

function ContributionGraph() {
  const weeks = 38
  const rows = 7
  const cells = []
  for (let w = 0; w < weeks; w++) {
    for (let r = 0; r < rows; r++) {
      const v = deterministic(w * 7 + r + 13)
      const level = v > 0.75 ? 4 : v > 0.55 ? 3 : v > 0.38 ? 2 : v > 0.22 ? 1 : 0
      cells.push(
        <div
          key={`${w}-${r}`}
          className="h-[7px] w-[7px] rounded-[1.5px]"
          style={{ background: greenLevels[level], outline: '1px solid rgba(255,255,255,0.06)' }}
        />
      )
    }
  }
  return (
    <div className="flex gap-[3px]">
      <div className="mr-1 flex w-4 flex-col justify-between">
        {days.map(d => <span key={d} className="text-[7px] leading-[9px] text-[#8b949e]">{d}</span>)}
      </div>
      <div className="flex flex-col gap-[3px]">{cells}</div>
    </div>
  )
}

function PinnedCard({ name, lang, langColor, dots = '0110101001' }) {
  return (
    <div className="flex w-72 flex-col gap-3 rounded-lg border border-[#30363d] bg-[#0d1117]/80 p-4">
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="#8b949e" aria-hidden>
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8v1.5h1.75a.75.75 0 0 1 0 1.5h-2.5A1.5 1.5 0 0 1 2 12.5v-10Z" />
        </svg>
        <span className="font-semibold text-[#58a6ff]">{name}</span>
      </div>
      <div className="flex items-center justify-center gap-[2px]">
        {dots.split('').map((c, i) => (
          <span key={i} className="h-[7px] w-[7px] rounded-[1.5px]" style={{ background: c === '0' ? '#21262d' : greenLevels[2] }} />
        ))}
      </div>
      <div className="mt-1 flex items-center gap-3 text-[11px] text-[#8b949e]">
        <span className="flex items-center gap-1">
          <svg viewBox="0 0 16 16" width="14" height="14"><path fill="#8b949e" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19.01-.82.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8Z" /></svg>
          {dots.split('').filter(c => c === '1').length} star
        </span>
        <span className="flex items-center gap-1">
          <svg viewBox="0 0 16 16" width="12" height="12"><path fill="#8b949e" d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" transform="translate(1 1)" /></svg>
          fork
        </span>
        <span className="ml-auto flex items-center gap-1">
          <span style={{ background: langColor }} className="h-[8px] w-[8px] rounded-full" />
          {lang}
        </span>
      </div>
    </div>
  )
}

export default function GitHubBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 select-none overflow-hidden bg-[#010409] opacity-70">
      <div className="absolute left-0 right-0 top-0 h-[440px] overflow-hidden bg-[#0d1117]">
        {/* GitHub top nav */}
        <div className="flex h-8 items-center gap-3 border-b border-[#21262d] bg-[#161b22] px-6">
          <svg viewBox="0 0 16 16" width="18" height="18" fill="#e6edf3"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8Z" /></svg>
          <svg viewBox="0 0 16 16" width="14" height="14" fill="#8b949e"><path d="M8 2c1.1 0 1.99.89 1.99 1.99 0 .52-.2 1-.52 1.35.01.02.01.03.01.05v1.18c0 .03-.01.05-.01.07.24.17.4.52.53 1.06.22.98.74 1.17 1.06 1.17.4 0 .64-.2.78-.58.12-.33-.04-.67-.13-.86l-.09-.2c-.21-.47-.47-1.43.07-1.85l.16-.12c.27-.21.63-.21.9 0 .28.25.71.18.89-.25.13-.3-.04-.67-.13-.9a.49.49 0 0 0-.21-.29l-.16-.11c-.8-.57-1.9-.16-2.29-.72l-.1-.16c-.34-.58-.54-1.04-.54-1.89C7.95 2.42 8.85 1.35 10.5 1c.18-.04.34.09.34.28 0 .12-.05.21-.15.26-.17.1-.37.19-.37.47 0 .35.35.43.43.43 1.11 0 2.22.5 2.75 1.48.1.18 0 .4-.2.44-.13.02-.25.05-.26.11-.01.03-.01.05-.02.08-.12.7-.7 1.5-1.49 1.57-.05 0-.1.03-.12.08a.32.32 0 0 0 .02.12c.06.12.24.13.3.13.68 0 1.29.43 1.67 1.1.29.53.43 1.14.57 1.72.11.46-.22.87-.7.87-.3.02-.58-.17-.61-.5-.02-.2-.09-.4-.2-.58l-.02-.02c-.13-.2-.37-.29-.6-.18-.25.12-.52.53-.72 1.12-.34.96-1.28 1.59-2.44 1.59H4.24c-.72 0-1.41-.3-1.91-.79-.04-.05-.09-.09-.13-.11.13.14.28.21.44.38.15.16.33.33.41.54.06.16.08.35.08.52a1.99 1.99 0 1 1-1.85 2.87c.04-.08.05-.16.07-.24l.05-.58c.02-.38.08-.68.18-.88.14-.29.33-.52.53-.7.11-.11.22-.2.33-.28l1.05-.83c.27-.21.6-.45.6-.95V6.2c0-.03-.01-.05-.02-.08l-.15-.12c-.61-.57-.9-1.55-.5-2.4l.22-.47C2.86 1.4 4 1 5.06 1c.68 0 1.3.27 1.75.72C7.31 1.3 7.53.2 7.99.2.98.03 2.08.05 4.14.78a.3.3 0 0 0 .3-.68c-.19-.09-.19-.16-.19-.16a5.3 5.3 0 0 1 3.23 0c.05.01.1-.01.13-.06l.03-.04c.1-.2.24-.23.48-.23c.87.18.66.1.58.1a5.3 5.3 0 0 0 2.31-.8c.33.04.1.2.47.9.59.72.5.36.74.27Z" transform="translate(.25)"/></svg>
          <svg viewBox="0 0 16 16" width="14" height="14" fill="#8b949e"><path d="M8 1.5A1.75 1.75 0 0 0 6.25 3.25v3.293l-1.873 1.873a1.75 1.75 0 0 0 0 2.475L6.94 12.25h-1.19a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H8.31l2.563-2.563a1.75 1.75 0 0 0 0-2.475L9.75 6.543V3.25A1.75 1.75 0 0 0 8 1.5Zm-.75 1.75a.25.25 0 0 1 .5 0v3.062c0 .199.079.39.22.53l2.53 2.53a.25.25 0 0 1 0 .354l-2.53 2.53a.25.25 0 0 1-.354 0l-2.53-2.53a.25.25 0 0 1 0-.354l2.53-2.53a.75.75 0 0 0 .22-.53V3.25Z" /></svg>
          <span className="ml-2 h-5 w-44 rounded-md bg-[#21262d]/80" />
          <span className="ml-auto flex h-6 w-14 rounded-md border border-[#21262d]" />
          <span className="ml-3 flex h-6 w-14 items-center justify-center rounded-md bg-[#238636] text-[10px] text-white">Sign in</span>
        </div>

        {/* Profile header */}
        <div className="mx-auto flex w-full max-w-[1100px] gap-8 px-8 pb-6 pt-8">
          <div className="w-[230px] flex-shrink-0">
            <div className="h-[180px] w-[180px] overflow-hidden rounded-full border border-[#30363d]">
              <img src={githubAvatar} alt="herinirinafi" className="h-full w-full object-cover" />
            </div>
            <h1 className="mt-4 text-2xl font-semibold text-[#f0f6fc]">Sitrakiniaina Fi"tia HERINIRINA</h1>
            <p className="text-lg text-[#8b949e]">herinirinafi</p>
            <div className="mt-4 flex h-7 w-24 items-center justify-center rounded-md border border-[#30363d] text-xs font-medium text-[#e6edf3]">Follow</div>
            <p className="mt-4 text-xs text-[#8b949e]"><span className="font-semibold text-[#e6edf3]">0</span> followers · <span className="font-semibold text-[#e6edf3]">1</span> following</p>
            <ul className="mt-4 space-y-1 text-xs text-[#8b949e]">
              <li className="flex items-center gap-1.5">🔗 www.linkedln.com/in/fi-taratra-herinirina</li>
            </ul>
            <div className="mt-4 flex items-center gap-1.5">
              <span className="text-xs font-semibold text-[#e6edf3]">⭐ Pro</span>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-4 flex gap-4 border-b border-[#21262d] text-sm">
              <span className="border-b-2 border-[#f78166] pb-2 font-semibold text-[#e6edf3]">Overview</span>
              <span className="pb-2 font-semibold text-[#e6edf3]">Repositories <span className="ml-1 rounded-full bg-[#21262d] px-2 text-xs text-[#8b949e]">2</span></span>
              <span className="pb-2 text-[#8b949e]">Projects <span className="ml-1 rounded-full bg-[#21262d] px-2 text-xs">0</span></span>
              <span className="pb-2 text-[#8b949e]">Packages <span className="ml-1 rounded-full bg-[#21262d] px-2 text-xs">0</span></span>
              <span className="pb-2 text-[#8b949e]">Stars <span className="ml-1 rounded-full bg-[#21262d] px-2 text-xs">0</span></span>
            </div>

            <p className="mb-2 text-xs text-[#8b949e]">Popular repositories</p>
            <div className="flex flex-wrap gap-3">
              <PinnedCard name="BourseX-1.0" lang="TypeScript" langColor="#3178c6" />
              <PinnedCard name="Fi" lang="JavaScript" langColor="#f1e05a" dots="1011011010" />
            </div>

            <p className="mb-2 mt-6 text-xs text-[#8b949e]">Contribution activity</p>
            <div className="rounded-lg border border-[#30363d] bg-[#0d1117]/70 p-4">
              <div className="mb-2 flex items-center justify-between text-[10px] text-[#8b949e]">
                <span>Nov | Déc | Jan | Fév | Mar | Avr | Mai | Juin | Juil | Août | Sep</span>
                <span className="flex items-center gap-1">
                  Less 
                  {[1, 2, 3, 4].map(l => <span key={l} className="h-[8px] w-[8px]" style={{ background: greenLevels[l] }} />)}
                  More
                </span>
              </div>
              <ContributionGraph />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom shading so content remains readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a12]/10 to-[#0a0a12]/60" />
    </div>
  )
}
