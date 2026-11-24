import {useState} from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  accentHex?: string;
  className?: string;
}

export function ResilientImage({
  src,
  alt,
  fallbackTitle,
  accentHex = '#7A1328',
  className = '',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center p-6 text-center text-white ${className}`}
        style={{
          background: `linear-gradient(135deg, ${accentHex} 0%, #3E0914 100%)`,
        }}
      >
        <span className="font-display text-lg font-semibold tracking-tight">{fallbackTitle}</span>
        <span className="mt-1 text-xs text-white/80">Wana Az-Zahra · MICE PNJ</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
