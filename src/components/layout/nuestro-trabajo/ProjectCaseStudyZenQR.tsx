import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { FaLink, FaGlobe } from 'react-icons/fa';
import { CenterContainer } from '@/components/layout/CenterContainer';
import { ProjectHero } from '@/components/layout/nuestro-trabajo/ProjectHero';
import {
  ProjectStack,
  type ProjectStackItem,
} from '@/components/layout/nuestro-trabajo/ProjectStack';
import { useLocale } from '@/hooks/useLocale';

const ZENQR_LINKS = {
  website: 'https://zenqr.app',
  // Actualizar con las URLs reales cuando ZenQR esté en las tiendas:
  appStore: 'https://apps.apple.com/app/zenqr/id0000000000',
  playStore: 'https://play.google.com/store/apps/details?id=app.zenqr',
} as const;

const ZENQR_PROJECT_COLOR = '#10b981';
const ZENQR_PROJECT_DARK = '#10b981';
const ZENQR_PROJECT_DARKER = '#10b981';

function Accent({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-semibold" style={{ color: ZENQR_PROJECT_COLOR }}>
      {children}
    </span>
  );
}

/** Stack de ZenQR: iconos desde public/stack */
const ZENQR_STACK: ProjectStackItem[] = [
  { name: 'Vue', icon: 'vue' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Node.js', icon: 'node-js' },
  { name: 'NestJS', icon: 'nestjs' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Digital Ocean', icon: 'digital-ocean' },
  { name: 'Stripe', icon: 'stripe' },
];

function CaseSection({
  label,
  title,
  children,
  imageSrc,
  imageAlt,
  reverse = false,
  accentColor,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
  accentColor?: string;
}) {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <CenterContainer>
        <div
          className={`flex flex-col gap-10 lg:gap-16 ${imageSrc ? (reverse ? 'lg:flex-row-reverse' : 'lg:flex-row') : ''} w-full lg:items-center`}
        >
          <div className="flex-1 space-y-4">
            <span
              className={`text-sm font-semibold tracking-wider uppercase ${!accentColor ? 'text-primary' : ''}`}
              style={accentColor ? { color: accentColor } : undefined}
            >
              {label}
            </span>
            <h2 className="text-foreground text-2xl font-bold tracking-tight md:text-3xl lg:text-[1.75rem]">
              {title}
            </h2>
            <div className="text-muted-foreground space-y-4 text-base leading-relaxed md:text-lg">
              {children}
            </div>
          </div>
          {imageSrc && (
            <div className="flex flex-1 justify-center lg:max-w-md">
              <div className="bg-muted/50 ring-border/50 relative overflow-hidden rounded-2xl shadow-lg ring-1">
                <img src={imageSrc} alt={imageAlt ?? ''} className="h-auto w-full object-cover" />
              </div>
            </div>
          )}
        </div>
      </CenterContainer>
    </section>
  );
}

export function ProjectCaseStudyZenQR() {
  const { t } = useTranslation();
  const { path } = useLocale();

  return (
    <article className="bg-background">
      <ProjectHero
        backHref={path('/nuestro-trabajo')}
        backLabel={t('nav.ourWork')}
        logoSrc="/brands/zenqr.svg"
        logoAlt="ZenQR"
        title="Una nueva forma de crear códigos QR"
        description="Plataforma de códigos QR con personalización, métricas en tiempo real e integraciones para eventos y pagos."
        cta={{
          href: ZENQR_LINKS.website,
          label: 'Visitar sitio web',
          ariaLabel: 'Visitar sitio web de ZenQR',
          icon: <FaGlobe className="size-4 shrink-0" />,
        }}
        storeLinks={{
          appStoreUrl: ZENQR_LINKS.appStore,
          playStoreUrl: ZENQR_LINKS.playStore,
        }}
        heroImageSrc="/projects/zenQR/zenqr_hero.png"
        heroImageAlt="ZenQR - Dashboard y app"
        backgroundColor={ZENQR_PROJECT_DARK}
      />

      {/* Stack: variante logos en fila con iconos de public/stack */}
      <ProjectStack
        items={ZENQR_STACK}
        variant="logos-row"
        accentColor={ZENQR_PROJECT_COLOR}
        label="Stack"
      />

      {/* El reto */}
      <CaseSection label="Caso de uso" title="El reto" accentColor={ZENQR_PROJECT_COLOR}>
        <p>
          Los códigos QR se han convertido en una <Accent>herramienta clave</Accent> para compartir
          información de forma práctica y rápida. Desde mostrar el menú en un restaurante hasta
          compartir datos de contacto o una contraseña de Wi-Fi, escanear un código es mucho más
          sencillo que escribir enlaces o datos largos.
        </p>
        <p>
          ZenQR llegó a Vado con una idea clara: crear una plataforma que ofreciera mucho más que la
          generación básica de códigos. Necesitaban una solución que permitiera a los usuarios{' '}
          <Accent>personalizar</Accent> sus códigos QR, almacenar distintos tipos de información,
          acceder a <Accent>estadísticas de uso</Accent> y conectar la herramienta con sistemas
          externos como pagos o boletaje de eventos. Todo esto, en una experiencia visual{' '}
          <Accent>clara, fluida y moderna</Accent>.
        </p>
      </CaseSection>

      {/* Nuestra estrategia */}
      <CaseSection
        label="Estrategia"
        title="Nuestra estrategia"
        reverse
        accentColor={ZENQR_PROJECT_COLOR}
      >
        <p>
          El punto de partida fue analizar a fondo ocho herramientas de generación de códigos QR ya
          existentes. Esto nos ayudó a detectar <Accent>oportunidades de mejora</Accent> tanto en
          funcionalidad como en experiencia de usuario, lo que nos permitió trazar una hoja de ruta
          enfocada en las necesidades reales del público.
        </p>
        <p>
          Además de desarrollar la plataforma, creamos una identidad visual que reflejara la esencia
          del producto: <Accent>orden, calma y sencillez</Accent>. El logo de ZenQR representa un
          espacio digital equilibrado, limpio y sin ruido — justo como debía sentirse la experiencia
          dentro de la app.
        </p>
        <p>
          A través de sesiones colaborativas de diseño, exploramos distintas ideas con un enfoque{' '}
          <Accent>flexible y humano</Accent>. Nuestro objetivo siempre fue mantener una experiencia
          clara, accesible y, sobre todo, útil.
        </p>
      </CaseSection>

      {/* La solución */}
      <CaseSection label="Solución" title="La solución" accentColor={ZENQR_PROJECT_COLOR}>
        <p>
          Diseñamos una interfaz <Accent>minimalista</Accent> que permite a los usuarios comenzar a
          crear códigos QR incluso <Accent>sin registrarse</Accent>. La navegación es libre y
          directa, eliminando pasos innecesarios o procesos rígidos.
        </p>
        <p className="text-foreground font-medium">La plataforma incluye:</p>
        <ul className="list-inside list-disc space-y-2 pl-2">
          <li>Soporte para distintos tipos de contenido</li>
          <li>
            <Accent>Personalización</Accent> con colores, logos y plantillas
          </li>
          <li>
            <Accent>Métricas en tiempo real</Accent> para conocer el rendimiento de cada código
          </li>
          <li>
            Códigos QR <Accent>estáticos y dinámicos</Accent>
          </li>
          <li>
            <Accent>Integración</Accent> con herramientas externas para eventos y pagos
          </li>
        </ul>
      </CaseSection>

      {/* Resultados */}
      <CaseSection label="Impacto" title="Resultados" reverse accentColor={ZENQR_PROJECT_COLOR}>
        <p>
          ZenQR es hoy una plataforma <Accent>eficiente y fácil de usar</Accent>, que responde tanto
          a las necesidades técnicas como a las expectativas de una experiencia ágil y moderna. A lo
          largo del proceso trabajamos en estrecha <Accent>colaboración</Accent> con el cliente,
          validando ideas, ajustando funcionalidades y construyendo cada parte del producto con una
          visión compartida.
        </p>
        <p>
          El resultado combina funcionalidad, claridad y diseño — y posiciona a ZenQR como una{' '}
          <Accent>alternativa innovadora</Accent> en el mercado de códigos QR.
        </p>
      </CaseSection>

      {/* Links again + back */}
      <section className="border-border bg-muted/30 border-t py-12 md:py-16">
        <CenterContainer>
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-foreground text-xl font-bold md:text-2xl">Prueba ZenQR</h2>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href={ZENQR_LINKS.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors hover:underline"
                style={{
                  color: ZENQR_PROJECT_COLOR,
                  backgroundColor: `${ZENQR_PROJECT_COLOR}14`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${ZENQR_PROJECT_COLOR}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `${ZENQR_PROJECT_COLOR}14`;
                }}
              >
                <FaLink className="size-4" />
                Sitio web
              </a>
            </div>
            <Link
              href={path('/nuestro-trabajo')}
              className="text-muted-foreground hover:text-foreground mt-4 inline-flex items-center gap-2 text-sm font-medium transition-colors"
            >
              <span aria-hidden>←</span> Volver a Nuestro trabajo
            </Link>
          </div>
        </CenterContainer>
      </section>
    </article>
  );
}
