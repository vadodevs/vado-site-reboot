import { motion } from 'motion/react';
import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimatedSectionProps = {
  children: ReactNode;
  /** Delay en segundos para efecto escalonado */
  delay?: number;
  /** Clase adicional para el contenedor */
  className?: string;
  /** Cantidad del viewport que debe ser visible para disparar (0-1). Default 0.15 */
  viewportAmount?: number;
};

export function AnimatedSection({
  children,
  delay = 0,
  className,
  viewportAmount = 0.15,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
