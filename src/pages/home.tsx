import { useTranslation } from 'react-i18next';
import { PageTitle } from '@/components/PageTitle';
import { Hero } from '@/components/home/Hero';
import { TrustedBrands } from '@/components/home/TrustedBrands';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="w-full">
      <PageTitle title={t('home.title')} />
      <MainLayout fullWidthContent={<><Hero /><TrustedBrands /></>}>
        {null}
      </MainLayout>
    </main>
  );
}
