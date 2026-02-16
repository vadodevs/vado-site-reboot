import { useTranslation } from 'react-i18next';
import { PageTitle } from '@/components/PageTitle';
import { AISolutionsSection } from '@/components/layout/home/ai-solutions/AISolutionsSection';
import { DigitalProductsSection } from '@/components/layout/home/digital-products/DigitalProductsSection';
import { ClientsSection } from '@/components/layout/home/clients/ClientsSection';
import { Hero } from '@/components/layout/home/hero/Hero';
import { StaffAugmentationSection } from '@/components/layout/home/staff-augmentation/StaffAugmentationSection';
import { TechStackSection } from '@/components/layout/home/tech-stack/TechStackSection';
import { WhyVadoSection } from '@/components/layout/home/why-vado/WhyVadoSection';
import { CultureAndTalentSection } from '@/components/layout/home/culture-and-talent/CultureAndTalentSection';
import { VadoInsightsSection } from '@/components/layout/home/insights/VadoInsightsSection';
import { FAQSection } from '@/components/layout/home/faq/FAQSection';
import { CtaContactSection } from '@/components/layout/home/cta-contact/CtaContactSection';
import { TrustedBrands } from '@/components/layout/home/brands/TrustedBrands';
import { AnimatedSection } from '@/components/layout/home/AnimatedSection';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle title={t('home.title')} />
      <MainLayout>
        <Hero />
        <AnimatedSection>
          <TrustedBrands />
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <DigitalProductsSection />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <AISolutionsSection />
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <TechStackSection />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <ClientsSection />
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <StaffAugmentationSection />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <WhyVadoSection />
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <CultureAndTalentSection />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <VadoInsightsSection />
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <CtaContactSection />
        </AnimatedSection>
      </MainLayout>
    </>
  );
}
