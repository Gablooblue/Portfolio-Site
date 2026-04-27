import { motion } from 'framer-motion';
import CollapsibleList from './CollapsibleList';

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  description: string;
  achievements: string[];
  delay: number;
}

const ExperienceCard = ({ title, company, date, description, achievements, delay }: ExperienceCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5, delay: delay * 0.04, ease: [0.25, 1, 0.5, 1] }}
    className="group grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-y-2 gap-x-8 py-6 md:py-8 transition-colors duration-150"
  >
    <div className="label-mono md:pt-2 group-hover:text-signal transition-colors duration-150">
      {date}
    </div>

    <div>
      <h3 className="text-ink font-medium leading-tight tracking-[-0.01em] mb-1"
          style={{ fontSize: 'clamp(1.375rem, 2.2vw, 1.75rem)' }}>
        {title}
        <span className="text-ink-muted font-normal">, {company}</span>
      </h3>

      <p className="text-ink-muted mb-4 max-w-[68ch]" style={{ fontSize: '1rem', lineHeight: 1.5 }}>
        {description}
      </p>

      <CollapsibleList items={achievements} />
    </div>
  </motion.article>
);

export default ExperienceCard;
