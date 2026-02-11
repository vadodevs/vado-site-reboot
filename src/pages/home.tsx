import { useTranslation } from 'react-i18next';
import { VadoLogo } from '@/assets/vado-logo';
import { PageTitle } from '@/components/PageTitle';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle title={t('home.title')} />
      <MainLayout>
        <h1 className="text-xl">{t('home.heading')}</h1>
        <VadoLogo />
      </MainLayout>
    </>
  );
}
