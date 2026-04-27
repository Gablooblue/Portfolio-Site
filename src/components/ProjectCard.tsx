import { motion } from 'framer-motion'

interface ProjectCardProps {
  index: number
  title: string
  technologies: string[]
  description: string
  githubLink: string
  extraButton?: {
    link: string
    content: string
  }
  delay: number
}

const ProjectCard = ({ index, title, technologies, description, githubLink, extraButton, delay }: ProjectCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.45, delay: delay * 0.04, ease: [0.25, 1, 0.5, 1] }}
    className="grid grid-cols-1 md:grid-cols-[3rem_1fr_auto] gap-y-3 gap-x-8 py-7 md:py-9 group hover:bg-paper-deep transition-colors duration-200 px-2 -mx-2"
  >
    <span className="label-mono md:pt-2 group-hover:text-signal transition-colors duration-150">
      {String(index).padStart(2, '0')}
    </span>

    <div className="max-w-[60ch]">
      <h3
        className="text-ink font-medium tracking-[-0.01em] leading-tight mb-2"
        style={{ fontSize: 'clamp(1.375rem, 2.4vw, 1.875rem)' }}
      >
        {title}
      </h3>
      <p className="text-ink-muted whitespace-pre-line mb-3" style={{ fontSize: '1rem', lineHeight: 1.5 }}>
        {description}
      </p>
      <p className="label-mono text-ink-muted">
        [ {technologies.map((t) => t.toLowerCase()).join(' · ')} ]
      </p>
    </div>

    <div className="flex md:flex-col gap-x-5 gap-y-2 md:items-end md:pt-2 md:text-right">
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="link-reveal label-mono"
      >
        code →
      </a>
      {extraButton && (
        <a
          href={extraButton.link}
          target="_blank"
          rel="noopener noreferrer"
          className="link-reveal label-mono"
        >
          {extraButton.content.toLowerCase()} →
        </a>
      )}
    </div>
  </motion.article>
)

export default ProjectCard
