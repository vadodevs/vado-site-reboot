import { useTranslation } from 'react-i18next';
import { PageTitle } from '@/components/PageTitle';
import MainLayout from '@/components/layout/MainLayout';
import { SoftwareHero } from '@/components/layout/servicios/software-a-la-medida/SoftwareHero';
import { SoftwareProductsSection } from '@/components/layout/servicios/software-a-la-medida/SoftwareProductsSection';
import { SoftwareTabsSection } from '@/components/layout/servicios/software-a-la-medida/SoftwareTabsSection';

export default function SoftwareALaMedida() {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle title={t('nav.customSoftware')} />
      <MainLayout>
        <SoftwareHero />
        <SoftwareProductsSection />
        <SoftwareTabsSection />
      </MainLayout>
    </>
  );
}
