import { motion } from 'framer-motion'
import CollapsibleList from './CollapsibleList'

interface ExperienceCardProps {
  logo: string
  title: string
  company: string
  date: string
  description: string
  achievements: string[]
  delay: number
}

const ExperienceCard = ({ logo, title, company, date, description, achievements, delay }: ExperienceCardProps) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={{
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: delay * 0.2 } }
    }}
    className="group relative bg-slate-800/30 rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-300"
  >
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-shrink-0">
        <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-700/50">
          <img 
            src={process.env.PUBLIC_URL + logo}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            alt={`${company} logo`}
          />
        </div>
      </div>
      
      <div className="flex-grow">
        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
          <h3 className="text-2xl font-bold text-white">{title} - {company}</h3>
          <span className="px-3 py-1 bg-sky-400/10 text-sky-400 rounded-full text-sm whitespace-nowrap">
            {date}
          </span>
        </div>
        <p className="text-gray-400 mb-4">{description}</p>
        <CollapsibleList 
          items={achievements}
          className="space-y-2 text-gray-300"
        />
      </div>
    </div>
  </motion.div>
)

export default ExperienceCard;