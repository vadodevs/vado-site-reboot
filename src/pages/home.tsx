import { useTranslation } from 'react-i18next';
import { PageTitle } from '@/components/PageTitle';
// import { DigitalProductsSection } from '@/components/home/DigitalProductsSection';
import { Hero } from '@/components/home/Hero';
import { TrustedBrands } from '@/components/home/TrustedBrands';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle title={t('home.title')} />
      <MainLayout>
        <Hero />
        <TrustedBrands />
        {/* <DigitalProductsSection /> */}
      </MainLayout>
    </>
  );
}
