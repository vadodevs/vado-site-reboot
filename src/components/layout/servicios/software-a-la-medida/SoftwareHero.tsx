import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/hooks/useLocale';
import { CenterContainer } from '@/components/layout/CenterContainer';

export function SoftwareHero() {
  const { t } = useTranslation();
  const { path } = useLocale();

  return (
    <section
      className="relative h-[60vh] min-h-[320px] w-full overflow-hidden bg-white"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 82%, 0 100%)',
      }}
    >
      {/* Fondo con bg-blue.svg */}
      <img
        src="/backgrounds/bg-blue.svg"
        alt=""
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
        aria-hidden
      />
      <div className="absolute inset-0 z-1 flex items-center pb-8">
        <CenterContainer className="w-full">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            {/* Izquierda: título, subtítulo, CTA */}
            <div className="max-w-2xl flex-1">
              <h1 className="text-2xl leading-tight font-bold tracking-tight text-white uppercase drop-shadow sm:text-3xl md:text-4xl lg:text-4xl">
                <span className="block">{t('services.customSoftware.hero.titleLine1')}</span>
                <span className="text-primary mt-0.5 block">
                  {t('services.customSoftware.hero.titleLine2')}
                </span>
              </h1>
              <p className="mt-2 max-w-lg text-sm text-white/95 drop-shadow md:text-base">
                {t('services.customSoftware.hero.tagline')}
              </p>
              <Link href={path('/contacto')} className="mt-4 inline-block">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-5 py-4 text-sm font-bold"
                >
                  {t('services.customSoftware.hero.cta')}
                </Button>
              </Link>
            </div>
          </div>
        </CenterContainer>
      </div>
    </section>
  );
}
