import { Link } from 'wouter';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export type FeatureCardPanelButton = {
  label: string;
  href: string;
  variant?: 'default' | 'outline';
};

type BasePanelProps = {
  iconSrc: string;
  iconAlt: string;
  className?: string;
};

type SubPanelProps = BasePanelProps & {
  variant: 'sub';
  description: string;
};

type MainPanelProps = BasePanelProps & {
  variant: 'main';
  preHeading?: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  primaryButton: FeatureCardPanelButton;
  secondaryButton: FeatureCardPanelButton;
};

export type FeatureCardPanelProps = SubPanelProps | MainPanelProps;

const panelBaseClasses =
  'flex flex-col rounded-2xl bg-primary/5 px-6 py-6 text-[#19314c] md:px-8 md:py-8';

export function FeatureCardPanel(props: FeatureCardPanelProps) {
  const { iconSrc, iconAlt, className } = props;

  if (props.variant === 'sub') {
    return (
      <div className={cn(panelBaseClasses, 'gap-4', className)}>
        <div className="flex h-14 shrink-0 items-center justify-center md:h-16">
          <img
            src={iconSrc}
            alt={iconAlt}
            className="size-10 object-contain text-primary md:size-12"
            aria-hidden
          />
        </div>
        <p className="text-sm leading-relaxed text-[#19314c] md:text-base">
          {props.description}
        </p>
      </div>
    );
  }

  const {
    preHeading,
    titlePart1,
    titlePart2,
    description,
    primaryButton,
    secondaryButton,
  } = props;

  return (
    <div className={cn(panelBaseClasses, 'gap-4', className)}>
      <div className="flex h-14 shrink-0 items-center justify-center md:h-16">
        <img
          src={iconSrc}
          alt={iconAlt}
          className="size-12 object-contain text-primary md:size-14"
          aria-hidden
        />
      </div>
      {preHeading && (
        <p className="shrink-0 text-xs font-medium uppercase tracking-wider text-[#19314c]/80 md:text-sm">
          {preHeading}
        </p>
      )}
      <h2 className="shrink-0 text-2xl font-bold leading-tight text-[#19314c] md:text-3xl">
        <span>{titlePart1} </span>
        <span className="text-primary">{titlePart2}</span>
      </h2>
      <p className="min-h-0 flex-1 text-base leading-relaxed text-[#19314c] md:text-lg">
        {description}
      </p>
      <div className="mt-2 flex shrink-0 flex-col gap-3 sm:flex-row">
        <Button
          variant="outline"
          className="w-full border-primary text-primary sm:w-auto"
          asChild
        >
          <Link href={secondaryButton.href}>{secondaryButton.label}</Link>
        </Button>
        <Button className="w-full sm:w-auto" asChild>
          <Link href={primaryButton.href}>{primaryButton.label}</Link>
        </Button>
      </div>
    </div>
  );
}
