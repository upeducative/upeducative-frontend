import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'slate' | 'gradient' | 'none';
  padding?: 'sm' | 'md' | 'lg';
}

export default function SectionContainer({
  children,
  className = '',
  id,
  background = 'white',
  padding = 'lg',
}: SectionContainerProps) {
  const bgClasses = {
    white: 'bg-white',
    slate: 'bg-slate-50',
    gradient: 'bg-gradient-to-br from-slate-50 to-blue-50',
    none: '',
  };

  const paddingClasses = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-20 md:py-32',
  };

  return (
    <section
      id={id}
      className={`${bgClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      <div className="container">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      {subtitle && (
        <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}

interface CardGridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}

export function CardGrid({
  children,
  columns = 3,
  gap = 'md',
}: CardGridProps) {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  return (
    <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]}`}>
      {children}
    </div>
  );
}

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function PremiumCard({
  children,
  className = '',
  hover = true,
}: PremiumCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -4, boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)' } : {}}
      className={`bg-white rounded-lg border border-slate-200/50 p-6 shadow-sm transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
