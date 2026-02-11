import { useTranslation } from 'react-i18next';
import { Marquee } from '@/components/ui/marquee';
import { CenterContainer } from '@/components/layout/CenterContainer';

const BRAND_LOGOS = [
  { src: '/brands/washapp.svg', alt: 'WashApp' },
  { src: '/brands/washapp.svg', alt: 'WashApp' },
  { src: '/brands/washapp.svg', alt: 'WashApp' },
  { src: '/brands/washapp.svg', alt: 'WashApp' },
  { src: '/brands/washapp.svg', alt: 'WashApp' },
  { src: '/brands/washapp.svg', alt: 'WashApp' },
] as const;

const LOGO_GAP_CLASS = 'gap-16';

export function TrustedBrands() {
  const { t } = useTranslation();

  return (
    <section className="border-border bg-background border-t py-14">
      <CenterContainer className="flex flex-col items-center">
        <h2 className="text-foreground/60 mb-10 text-center text-xl font-medium">
          {t('home.trustedBrandsTitle')}
        </h2>
      </CenterContainer>

      <div className="w-full">
        <Marquee className="w-full" gap={LOGO_GAP_CLASS} duration={40} pauseOnHover>
          {BRAND_LOGOS.map((brand, index) => (
            <div
              key={`${brand.src}-${index}`}
              className="flex shrink-0 items-center justify-center grayscale transition-opacity hover:opacity-80"
              style={{ minWidth: 'min(180px, 25vw)' }}
            >
              <img
                src={brand.src}
                alt={brand.alt}
                className="h-10 w-auto object-contain md:h-12"
                width={180}
                height={48}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
