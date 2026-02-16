import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { AnimatePresence, motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { PhoneMockup } from '@/components/ui/phone-mockup';
import { CenterContainer } from '@/components/layout/CenterContainer';
import { useLocale } from '@/hooks/useLocale';

const TAB_IDS = [
  'appsMvps',
  'sitiosWeb',
  'crm',
  'digitalizacion',
  'erp',
  'metaMensajeria',
] as const;

export function SoftwareTabsSection() {
  const { t } = useTranslation();
  const { path } = useLocale();
  const [activeTab, setActiveTab] = useState<string>(TAB_IDS[0]);

  return (
    <section className="overflow-x-hidden bg-white py-12 md:py-16 lg:py-20">
      <CenterContainer>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList
            variant="line"
            className="border-border mb-6 flex w-full justify-start gap-1 overflow-x-auto overflow-y-hidden border-b bg-transparent pb-0 md:flex-wrap"
            style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
          >
            {TAB_IDS.map((id) => (
              <TabsTrigger
                key={id}
                value={id}
                className="data-[state=active]:border-primary data-[state=active]:text-primary shrink-0 rounded-none border-b-2 border-transparent px-3 py-2 text-sm font-medium md:px-4 md:text-base"
              >
                {t(`services.customSoftware.tabs.${id}.label`)}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-0 focus-visible:outline-none">
            <div className="relative mx-auto overflow-visible rounded-2xl bg-[#19314c] px-6 py-8 md:px-8 md:py-10 lg:max-w-6xl lg:px-10 lg:py-8">
              {/* Fondo con bg-card.svg — solo el fondo se recorta */}
              <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-2xl">
                <img
                  src="/backgrounds/bg-card.svg"
                  alt=""
                  className="h-full w-full object-cover object-center opacity-60"
                  aria-hidden
                />
              </div>

              <div className="relative z-1 flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-8">
                {/* Texto: en mobile primero, en desktop a la izquierda y centrado verticalmente */}
                <div className="order-1 flex flex-1 flex-col justify-center lg:max-w-[48%]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="flex flex-col"
                    >
                      <h3 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                        {t(`services.customSoftware.tabs.${activeTab}.title`)}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-white/90 md:text-lg">
                        {t(`services.customSoftware.tabs.${activeTab}.description`)}
                      </p>
                      <Link href={path('/contacto')} className="mt-6 inline-block">
                        <Button
                          size="lg"
                          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-5 text-sm font-bold md:text-base"
                        >
                          {t('services.customSoftware.hero.cta')}
                        </Button>
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Phone mockup: la mitad fuera del contenedor azul hacia abajo en desktop */}
                <div className="order-2 flex flex-1 justify-center lg:max-w-[52%] lg:items-end lg:justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="flex justify-center lg:translate-y-[20%]"
                    >
                      <PhoneMockup className="w-[min(200px,65vw)] lg:w-[240px]"></PhoneMockup>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CenterContainer>
    </section>
  );
}
