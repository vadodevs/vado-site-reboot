import { useTranslation } from 'react-i18next';
import { PageTitle } from '@/components/PageTitle';
import { AISolutionsSection } from '@/components/layout/home/ai-solutions/AISolutionsSection';
import { DigitalProductsSection } from '@/components/layout/home/digital-products/DigitalProductsSection';
import { Hero } from '@/components/layout/home/hero/Hero';
import { TrustedBrands } from '@/components/layout/home/brands/TrustedBrands';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle title={t('home.title')} />
      <MainLayout>
        <Hero />
        <TrustedBrands />
        <DigitalProductsSection />
        <AISolutionsSection />
      </MainLayout>
    </>
  );
}
