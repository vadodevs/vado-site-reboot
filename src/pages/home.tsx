import { useTranslation } from 'react-i18next';
import { PageTitle } from '@/components/PageTitle';
import { Hero } from '@/components/home/Hero';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle title={t('home.title')} />
      <MainLayout fullWidthContent={<Hero />}>{null}</MainLayout>
    </>
  );
}
