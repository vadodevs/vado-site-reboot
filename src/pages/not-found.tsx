import { useTranslation } from 'react-i18next';
import { PageTitle } from '@/components/PageTitle';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <PageTitle title={t('notFound.title')} />
      <h1 className="text-4xl font-bold text-red-500">{t('notFound.heading')}</h1>
      <p className="mt-2 text-lg text-gray-700">{t('notFound.description')}</p>
    </main>
  );
};
