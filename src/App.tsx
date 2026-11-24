import {useState} from 'react';
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  Instagram,
  Menu,
  X,
} from 'lucide-react';
import {ResilientImage} from './components/ResilientImage';
import {SkillModal} from './components/SkillModal';
import {
  COLLABORATIONS,
  PROFILE,
  SKILLS,
  SkillCategory,
  SkillItem,
} from './data/profileData';

const FILTER_TABS: {id: SkillCategory; label: string}[] = [
  {id: 'all', label: 'Semua Keahlian'},
  {id: 'speaking', label: 'Public Speaking'},
  {id: 'barista', label: 'Barista Kopi'},
  {id: 'swimming', label: 'Atlet Renang'},
  {id: 'planner', label: 'Event Planner'},
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [activeSkillFilter, setActiveSkillFilter] = useState<SkillCategory>('all');
  const [selectedModalSkill, setSelectedModalSkill] = useState<SkillItem | null>(null);
  const [selectedCollabId, setSelectedCollabId] = useState<string>(COLLABORATIONS[0].id);
  const [copiedType, setCopiedType] = useState<'handle' | 'dm' | null>(null);

  const activeHeroSkill = SKILLS[heroSlideIndex] ?? SKILLS[0];
  const filteredSkills =
    activeSkillFilter === 'all'
      ? SKILLS
      : SKILLS.filter((item) => item.id === activeSkillFilter);
  const selectedCollab =
    COLLABORATIONS.find((item) => item.id === selectedCollabId) ?? COLLABORATIONS[0];

  const handleJumpToSkill = (category: Exclude<SkillCategory, 'all'>) => {
    setActiveSkillFilter(category);
    const section = document.getElementById('keahlian');
    if (section) {
      section.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  const handleSelectCollabTemplate = (collabId: string) => {
    setSelectedCollabId(collabId);
    const contactSection = document.getElementById('kontak');
    if (contactSection) {
      contactSection.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  const handleCopyText = async (text: string, type: 'handle' | 'dm') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      window.setTimeout(() => {
        setCopiedType((current) => (current === type ? null : current));
      }, 2200);
    } catch {
      // Clipboard fallback ignored silently on restricted iframes
      setCopiedType(type);
      window.setTimeout(() => {
        setCopiedType((current) => (current === type ? null : current));
      }, 2200);
    }
  };

  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-[#FAF8F8] text-[#1D1518]">
      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-40 border-b border-[#EAE2E4] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          {/* Zone 1: Single-line wordmark */}
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-[#7A1328] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7A1328]"
          >
            Wana Az-Zahra
          </a>

          {/* Zone 2: 4 concise single-line nav links */}
          <nav
            aria-label="Navigasi utama"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#524348]"
          >
            <a
              href="#tentang"
              className="py-1 transition-colors hover:text-[#7A1328] hover:underline hover:underline-offset-4 whitespace-nowrap shrink-0"
            >
              Tentang
            </a>
            <a
              href="#keahlian"
              className="py-1 transition-colors hover:text-[#7A1328] hover:underline hover:underline-offset-4 whitespace-nowrap shrink-0"
            >
              Keahlian
            </a>
            <a
              href="#kolaborasi"
              className="py-1 transition-colors hover:text-[#7A1328] hover:underline hover:underline-offset-4 whitespace-nowrap shrink-0"
            >
              Kolaborasi
            </a>
            <a
              href="#kontak"
              className="py-1 transition-colors hover:text-[#7A1328] hover:underline hover:underline-offset-4 whitespace-nowrap shrink-0"
            >
              Kontak
            </a>
          </nav>

          {/* Zone 3: 1 primary CTA + mobile menu toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#7A1328] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#620F21] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1328] whitespace-nowrap shrink-0"
            >
              <Instagram className="h-3.5 w-3.5" />
              <span>@wanazahraaa</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#EAE2E4] bg-white text-[#1D1518] transition-colors hover:bg-[#FDF2F4] hover:text-[#7A1328] md:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <nav
            aria-label="Menu seluler"
            className="border-t border-[#EAE2E4] bg-white px-4 py-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {[
                {href: '#tentang', label: 'Tentang Saya'},
                {href: '#keahlian', label: 'Keahlian & Fokus'},
                {href: '#kolaborasi', label: 'Ruang Kolaborasi'},
                {href: '#kontak', label: 'Kontak Instagram'},
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-[#2F2327] transition-colors hover:bg-[#FDF2F4] hover:text-[#7A1328]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={PROFILE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#7A1328] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#620F21]"
              >
                <Instagram className="h-4 w-4" />
                <span>Ikuti {PROFILE.instagramHandle}</span>
              </a>
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* 1. Pembuka (Hero Split-Screen) */}
        <section className="mx-auto max-w-6xl px-4 pt-8 pb-12 sm:px-6 sm:pt-12 sm:pb-16 lg:px-8 lg:pt-14">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Typography & CTA */}
            <div className="flex flex-col justify-center lg:col-span-6">
              <p className="text-xs font-semibold tracking-wide text-[#7A1328] sm:text-sm">
                Mahasiswa MICE · Politeknik Negeri Jakarta
              </p>

              <h1 className="mt-3 font-display text-[clamp(2.25rem,4.5vw,3.65rem)] leading-[1.08] font-bold tracking-tight text-[#1D1518] text-balance">
                {PROFILE.headline}
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4A3B40] sm:text-[17px]">
                {PROFILE.heroLead}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#kontak"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#7A1328] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#620F21] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1328] whitespace-nowrap shrink-0"
                >
                  <span>Hubungi Saya</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="#keahlian"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-lg border border-[#DECED3] bg-white px-5 py-3 text-sm font-semibold text-[#1D1518] transition-colors hover:border-[#7A1328] hover:text-[#7A1328] whitespace-nowrap shrink-0"
                >
                  Lihat Keahlian
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Showcase Visual */}
            <div className="lg:col-span-6">
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#EAE2E4] bg-white shadow-sm">
                <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden bg-[#2A1016]">
                  <ResilientImage
                    src={activeHeroSkill.image}
                    alt={activeHeroSkill.imageAlt}
                    fallbackTitle={activeHeroSkill.title}
                    accentHex={activeHeroSkill.accentHex}
                    className="h-full w-full object-cover transition-transform duration-300"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute right-0 bottom-0 left-0 p-5 text-white sm:p-6">
                    <div className="flex items-center gap-2 text-xs font-medium text-white/85">
                      <span className="tabular-nums font-semibold">{activeHeroSkill.number}</span>
                      <span aria-hidden="true">·</span>
                      <span>{activeHeroSkill.roleLabel}</span>
                    </div>
                    <p className="mt-1 font-display text-xl font-bold tracking-tight sm:text-2xl">
                      {activeHeroSkill.title}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs text-white/90 sm:text-sm">
                      {activeHeroSkill.tagline}
                    </p>
                  </div>
                </div>

                {/* Quick 4-role visual switcher bar */}
                <div
                  role="tablist"
                  aria-label="Sorotan peran Wana Az-Zahra"
                  className="grid grid-cols-2 gap-1.5 bg-[#FAF8F8] p-2 sm:grid-cols-4"
                >
                  {SKILLS.map((skill, idx) => {
                    const isActive = idx === heroSlideIndex;
                    return (
                      <button
                        key={skill.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setHeroSlideIndex(idx)}
                        className={`flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                          isActive
                            ? 'bg-[#7A1328] text-white shadow-xs'
                            : 'bg-white text-[#4A3B40] hover:bg-[#FDF2F4] hover:text-[#7A1328]'
                        }`}
                      >
                        <span className="tabular-nums opacity-75">{skill.number}</span>
                        <span className="truncate">{skill.shortTitle}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* 4-column Role Summary Strip below Hero Split */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map((skill) => (
              <button
                key={skill.id}
                type="button"
                onClick={() => handleJumpToSkill(skill.id)}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#EAE2E4] bg-white text-left transition-all duration-150 hover:-translate-y-0.5 hover:border-[#CBB6BC] hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1328]"
              >
                <div
                  className="h-1.5 w-full"
                  style={{backgroundColor: skill.accentHex}}
                  aria-hidden="true"
                />
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-[#6B5A5F]">
                      <span className="tabular-nums" style={{color: skill.accentHex}}>
                        {skill.number}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-[#8C7A80] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#7A1328]" />
                    </div>
                    <h2 className="mt-2 font-display text-lg font-bold text-[#1D1518]">
                      {skill.title}
                    </h2>
                    <p className="mt-1 text-xs leading-relaxed text-[#5D4C52]">
                      {skill.roleLabel}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* 2. Tentang Saya */}
        <section id="tentang" className="border-y border-[#EFE4E7] bg-[#FDF7F8] py-14 sm:py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-wide text-[#7A1328]">Tentang Saya</p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#1D1518] text-balance sm:text-4xl">
                Energi panggung, ketelitian racikan kopi, dan disiplin seorang perenang.
              </h2>

              <div className="mt-5 space-y-4 text-base leading-relaxed text-[#433439]">
                {PROFILE.aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-[#EAE0E3] bg-white p-6 shadow-xs sm:p-7">
                <h3 className="font-display text-lg font-bold text-[#1D1518]">
                  Profil Singkat
                </h3>
                <dl className="mt-4 divide-y divide-[#F0E8EA]">
                  {PROFILE.quickFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex flex-col gap-1 py-3.5 first:pt-1 last:pb-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                    >
                      <dt className="text-xs font-medium text-[#726066] shrink-0">
                        {fact.label}
                      </dt>
                      <dd className="text-sm font-semibold text-[#1D1518] sm:text-right">
                        {fact.label === 'Instagram' ? (
                          <a
                            href={PROFILE.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[#7A1328] underline decoration-[#7A1328]/40 underline-offset-4 hover:decoration-[#7A1328]"
                          >
                            <span>{fact.value}</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        ) : (
                          fact.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Keahlian & Eksplorasi Interaktif */}
        <section id="keahlian" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-[#7A1328]">
                Keahlian Utama
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#1D1518] text-balance sm:text-4xl">
                Empat pilar aktivitas yang saya tekuni secara konsisten.
              </h2>
            </div>

            {/* Interactive Segmented Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter keahlian"
              className="flex flex-wrap gap-1.5 rounded-xl border border-[#EAE2E4] bg-white p-1.5"
            >
              {FILTER_TABS.map((tab) => {
                const isSelected = activeSkillFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveSkillFilter(tab.id)}
                    className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'bg-[#7A1328] text-white'
                        : 'text-[#524348] hover:bg-[#FDF2F4] hover:text-[#7A1328]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className={`mt-8 grid gap-6 ${
              filteredSkills.length === 1
                ? 'grid-cols-1'
                : 'grid-cols-1 md:grid-cols-2'
            }`}
          >
            {filteredSkills.map((skill) => (
              <article
                key={skill.id}
                className={`flex flex-col overflow-hidden rounded-2xl border bg-white shadow-xs transition-shadow hover:shadow-md ${
                  filteredSkills.length === 1 ? 'md:grid md:grid-cols-12' : ''
                } ${skill.borderTint}`}
              >
                <div
                  className={`relative overflow-hidden bg-[#F4EFF1] ${
                    filteredSkills.length === 1
                      ? 'aspect-[4/3] md:col-span-6 md:aspect-auto md:h-full'
                      : 'aspect-[4/3]'
                  }`}
                >
                  <div
                    className="absolute top-0 right-0 left-0 z-10 h-1.5"
                    style={{backgroundColor: skill.accentHex}}
                    aria-hidden="true"
                  />
                  <ResilientImage
                    src={skill.image}
                    alt={skill.imageAlt}
                    fallbackTitle={skill.title}
                    accentHex={skill.accentHex}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>

                <div
                  className={`flex flex-1 flex-col justify-between p-6 sm:p-7 ${
                    filteredSkills.length === 1 ? 'md:col-span-6' : ''
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#6B5A5F]">
                      <span className="tabular-nums font-bold" style={{color: skill.accentHex}}>
                        {skill.number}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{skill.roleLabel}</span>
                    </div>

                    <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-[#1D1518] sm:text-2xl">
                      {skill.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#4A3B40] sm:text-[15px]">
                      {skill.summary}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-[#F0E8EA] pt-4">
                      {skill.details.slice(0, filteredSkills.length === 1 ? 4 : 3).map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm leading-snug text-[#433439]"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{backgroundColor: skill.accentHex}}
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#F0E8EA] pt-4">
                    <span className="text-xs font-medium text-[#6B5A5F]">
                      {skill.toolsOrFocus.join(' · ')}
                    </span>

                    <button
                      type="button"
                      onClick={() => setSelectedModalSkill(skill)}
                      className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-[#DECED3] bg-white px-4 py-2 text-xs font-semibold text-[#1D1518] transition-colors hover:border-[#7A1328] hover:bg-[#FDF2F4] hover:text-[#7A1328] whitespace-nowrap shrink-0"
                    >
                      <span>Detail Keahlian</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Ruang Kolaborasi */}
        <section id="kolaborasi" className="border-t border-[#EFE4E7] bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-[#7A1328]">
                Kolaborasi & Kontribusi
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#1D1518] text-balance sm:text-4xl">
                Terbuka untuk acara kampus, komunitas, hingga proyek kreatif.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#4A3B40]">
                Pilih bentuk kerja sama di bawah untuk menyiapkan pesan perkenalan instan sebelum menghubungi Instagram saya.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              {COLLABORATIONS.map((item) => {
                const isActive = item.id === selectedCollabId;
                return (
                  <div
                    key={item.id}
                    className={`flex flex-col justify-between rounded-2xl border p-6 transition-all ${
                      isActive
                        ? 'border-[#7A1328] bg-[#FDF7F8] shadow-sm'
                        : 'border-[#EAE2E4] bg-[#FAF8F8] hover:border-[#CBB6BC]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-medium text-[#6B5A5F]">
                        <span
                          className="inline-block h-2 w-2 rounded-full"
                          style={{backgroundColor: item.accentDotHex}}
                          aria-hidden="true"
                        />
                        <span>{item.context}</span>
                      </div>
                      <h3 className="mt-2.5 font-display text-xl font-bold text-[#1D1518]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#4A3B40]">
                        {item.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSelectCollabTemplate(item.id)}
                      className={`mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-lg px-4 py-2.5 text-xs font-semibold transition-colors whitespace-nowrap ${
                        isActive
                          ? 'bg-[#7A1328] text-white hover:bg-[#620F21]'
                          : 'border border-[#DECED3] bg-white text-[#1D1518] hover:border-[#7A1328] hover:text-[#7A1328]'
                      }`}
                    >
                      {isActive ? 'Template Terpilih di Bawah' : 'Gunakan Template Pesan'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Kontak Instagram (@wanazahraaa) */}
        <section id="kontak" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-[#620F21] text-white shadow-lg">
            <div className="grid grid-cols-1 gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:gap-10 lg:p-12">
              <div className="flex flex-col justify-between lg:col-span-6">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#F6CED7]">
                    Kontak Pribadi
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-bold tracking-[0.01em] text-white text-balance sm:text-4xl">
                    Mari terhubung di Instagram {PROFILE.instagramHandle}
                  </h2>
                  <p className="mt-4 max-w-lg text-base leading-relaxed tracking-[0.01em] text-[#F9E6EA]">
                    Untuk diskusi seputar event planning, undangan MC dan public speaking, kolaborasi barista, atau sekadar menyapa, silakan hubungi saya langsung melalui Direct Message Instagram.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href={PROFILE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#620F21] transition-colors hover:bg-[#FDF2F4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap shrink-0"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>Buka Instagram {PROFILE.instagramHandle}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopyText(PROFILE.instagramHandle, 'handle')}
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-white/30 bg-[#7A1328] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#8E1830] whitespace-nowrap shrink-0"
                  >
                    {copiedType === 'handle' ? (
                      <>
                        <Check className="h-4 w-4" />
                        <span>Username Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Salin {PROFILE.instagramHandle}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Interactive Quick DM Helper Box */}
              <div className="lg:col-span-6">
                <div className="flex h-full flex-col justify-between rounded-xl border border-white/15 bg-[#4C0B19] p-5 sm:p-6">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-[#F6CED7]">
                        Template Pesan Cepat · {selectedCollab.title}
                      </span>
                      <span className="text-xs text-white/75">Siap salin ke DM</span>
                    </div>

                    <p className="mt-3 rounded-lg border border-white/10 bg-[#3B0813] p-4 text-sm leading-relaxed text-[#FDF2F4]">
                      {selectedCollab.dmTemplate}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {COLLABORATIONS.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setSelectedCollabId(c.id)}
                          className={`min-h-[36px] rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap ${
                            c.id === selectedCollabId
                              ? 'bg-white text-[#620F21]'
                              : 'bg-white/10 text-white/90 hover:bg-white/20'
                          }`}
                        >
                          {c.title.split(' ')[0]}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyText(selectedCollab.dmTemplate, 'dm')}
                      className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg bg-[#9F1B38] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#B82042] whitespace-nowrap shrink-0"
                    >
                      {copiedType === 'dm' ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span>Pesan Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Salin Pesan DM</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#EAE2E4] bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div className="text-sm text-[#5D4C52]">
            <span className="font-semibold text-[#1D1518]">{PROFILE.name}</span>
            <span className="mx-2 text-[#CBB6BC]" aria-hidden="true">
              ·
            </span>
            <span>Mahasiswa MICE Politeknik Negeri Jakarta</span>
          </div>

          <div className="flex items-center gap-5 text-sm font-medium">
            <a
              href={PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7A1328] hover:underline hover:underline-offset-4 whitespace-nowrap"
            >
              Instagram {PROFILE.instagramHandle}
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-1 text-[#5D4C52] transition-colors hover:text-[#7A1328] whitespace-nowrap"
            >
              <span>Ke atas</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </footer>

      <SkillModal
        skill={selectedModalSkill}
        onClose={() => setSelectedModalSkill(null)}
      />
    </div>
  );
}
