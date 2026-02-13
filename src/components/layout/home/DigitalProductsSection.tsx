import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { CenterContainer } from '../CenterContainer';
import { FeatureCard } from './FeatureCard';
import { PhoneMockup } from '@/components/ui/phone-mockup';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/hooks/useLocale';

type DigitalProductsSectionProps = {
  mockupImageSrc?: string;
  mockupImageAlt?: string;
};

export function DigitalProductsSection({
  mockupImageSrc = '/home-assets/home-bg-mockup.png',
  mockupImageAlt = 'App mockup',
}: DigitalProductsSectionProps) {
  const { t } = useTranslation();
  const { path } = useLocale();

  return (
    <section className="relative overflow-hidden">
      <img
        src="/backgrounds/bg-white-blue.png"
        alt={t('home.digitalProducts.bgAlt')}
        className="pointer-events-none absolute top-0 right-0 h-full w-auto object-cover object-right"
        aria-hidden
      />
      <CenterContainer>
        <div className="relative flex flex-col items-center gap-8 py-12 lg:gap-12 lg:py-16">
          {/* Mockup + texto: dos columnas en desktop */}
          <div className="relative flex w-full flex-col items-center gap-4 py-4 lg:mr-auto lg:ml-6 lg:grid lg:max-w-5xl lg:grid-cols-[auto_1fr] lg:items-center lg:gap-20 lg:py-6">
            <div className="order-2 flex items-center justify-center lg:order-1 lg:justify-end">
              <PhoneMockup
                className="w-[min(240px,65vw)]"
                src={mockupImageSrc}
                alt={mockupImageAlt}
              />
            </div>
            <div className="relative order-1 flex items-center px-4 lg:order-2 lg:min-w-0 lg:pr-8 lg:pl-0">
              <div>
                <p className="text-muted-foreground mb-2 text-xs font-medium tracking-wider uppercase md:text-sm">
                  {t('home.digitalProducts.label')}
                </p>
                <h2 className="text-foreground mb-4 text-3xl leading-tight font-bold md:text-4xl lg:text-[2.5rem]">
                  <span className="text-[#1e3a5f]">{t('home.digitalProducts.titlePart1')} </span>
                  <span className="text-primary">{t('home.digitalProducts.titlePart2')}</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg">
                  {t('home.digitalProducts.description')}
                </p>
              </div>
            </div>
          </div>

          <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <FeatureCard
              iconSrc="/home-assets/card-digital/idea.svg"
              iconAlt={t('home.digitalProducts.card1Title')}
              title={t('home.digitalProducts.card1Title')}
              description={t('home.digitalProducts.card1Description')}
            />
            <FeatureCard
              iconSrc="/home-assets/card-digital/display.svg"
              iconAlt={t('home.digitalProducts.card2Title')}
              title={t('home.digitalProducts.card2Title')}
              description={t('home.digitalProducts.card2Description')}
            />
            <FeatureCard
              iconSrc="/home-assets/card-digital/cube.svg"
              iconAlt={t('home.digitalProducts.card3Title')}
              title={t('home.digitalProducts.card3Title')}
              description={t('home.digitalProducts.card3Description')}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="outline" size="lg" className="border-primary text-primary" asChild>
              <Link href={path('/servicios/desarrollo')}>{t('home.digitalProducts.moreInfo')}</Link>
            </Button>
            <Button size="lg" asChild>
              <Link href={path('/contacto')}>{t('nav.contactUs')}</Link>
            </Button>
          </div>
        </div>
      </CenterContainer>
    </section>
  );
}
