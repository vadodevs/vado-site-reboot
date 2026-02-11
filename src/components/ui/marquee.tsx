import { cn } from '@/lib/utils';

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  /** Espacio entre elementos (ej. gap-8, gap-12) */
  gap?: string;
  /** Velocidad en segundos para un ciclo completo (por defecto 30) */
  duration?: number;
  /** Pausar animación al hacer hover (por defecto true) */
  pauseOnHover?: boolean;
};

export function Marquee({
  children,
  className,
  gap = 'gap-12',
  duration = 30,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn('overflow-hidden', pauseOnHover && 'group/marquee', className)}
      role="marquee"
      aria-hidden
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
      }}
    >
      <div
        className={cn('flex w-max', gap, pauseOnHover && 'marquee-track')}
        style={
          {
            animation: `marquee ${duration}s linear infinite`,
          } as React.CSSProperties
        }
      >
        {children}
        {/* Duplicado para loop infinito sin corte */}
        {children}
      </div>
    </div>
  );
}
