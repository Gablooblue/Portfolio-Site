import { motion } from 'framer-motion'
import GithubButton from './GithubButton'
import Button from './Button'

interface ProjectCardProps {
  title: string
  technologies: string[]
  description: string
  image?: string
  githubLink: string
  extraButton?: {
    link: string
    content: string
  }
  delay: number
}

const ProjectCard = ({ title, technologies, description, image, githubLink, extraButton, delay }: ProjectCardProps) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={{
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.4, delay: delay * 0.1 } }
    }}
    className="group relative bg-slate-800/30 rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-300 flex flex-col h-full"
  >
    <div className="flex-grow">
      <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-5">{title}</h3>
      <div className="mb-5 flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-4 py-2 bg-sky-400/10 text-sky-400 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-gray-400 text-md mb-6 whitespace-pre-line">
        {description}
      </p>
      {image && (
        <motion.div 
          className="my-6 relative w-full max-w-4xl mx-auto aspect-[16/9] overflow-hidden rounded-lg shadow-xl bg-slate-800/50"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <img 
            src={process.env.PUBLIC_URL + image} 
            className="absolute inset-0 w-full h-full object-contain"
            alt={`${title} preview`}
          />
        </motion.div>
      )}
    </div>
    <div className="flex gap-4 justify-center mt-auto pt-6">
      <GithubButton link={githubLink} content="View on Github" />
      {extraButton && (
        <Button link={extraButton.link} content={extraButton.content} />
      )}
    </div>
  </motion.div>
)

export default ProjectCard;