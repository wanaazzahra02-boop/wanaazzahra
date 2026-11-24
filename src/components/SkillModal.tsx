import {useEffect} from 'react';
import {ArrowUpRight, Check, X} from 'lucide-react';
import {PROFILE, SkillItem} from '../data/profileData';
import {ResilientImage} from './ResilientImage';

interface SkillModalProps {
  skill: SkillItem | null;
  onClose: () => void;
}

export function SkillModal({skill, onClose}: SkillModalProps) {
  useEffect(() => {
    if (!skill) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [skill, onClose]);

  if (!skill) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A0D10]/75 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="skill-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#EAE2E4] bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="h-1.5 w-full"
          style={{backgroundColor: skill.accentHex}}
          aria-hidden="true"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup detail keahlian"
          className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#EAE2E4] bg-white/95 text-[#1D1518] shadow-sm transition-colors hover:bg-[#7A1328] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1328]"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="aspect-[16/10] w-full overflow-hidden bg-[#F5F1F2]">
          <ResilientImage
            src={skill.image}
            alt={skill.imageAlt}
            fallbackTitle={skill.title}
            accentHex={skill.accentHex}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#6B5A5F]">
            <span className="tabular-nums font-semibold" style={{color: skill.accentHex}}>
              {skill.number}
            </span>
            <span aria-hidden="true">·</span>
            <span>{skill.roleLabel}</span>
          </div>

          <h3
            id="skill-modal-title"
            className="mt-2 font-display text-2xl font-bold tracking-tight text-[#1D1518] sm:text-3xl"
          >
            {skill.title}
          </h3>

          <p className="mt-3 text-base leading-relaxed text-[#4A3B40]">{skill.summary}</p>

          <div className="mt-6 border-t border-[#EEE7E9] pt-5">
            <h4 className="text-sm font-semibold text-[#1D1518]">Ruang Lingkup & Kebiasaan Kerja</h4>
            <ul className="mt-3 space-y-2.5">
              {skill.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3 text-sm leading-relaxed text-[#4A3B40]">
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                    style={{backgroundColor: skill.accentHex}}
                    aria-hidden="true"
                  >
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-[#EEE7E9] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[#6B5A5F]">
              Fokus: {skill.toolsOrFocus.join(' · ')}
            </p>
            <a
              href={PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#7A1328] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#620F21] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1328] whitespace-nowrap shrink-0"
            >
              <span>Hubungi via {PROFILE.instagramHandle}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
