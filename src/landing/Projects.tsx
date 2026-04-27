import React from "react"
import socials from "../assets/socials"
import { motion } from 'framer-motion'
import ProjectCard from "../components/ProjectCard"

function Projects() {
  const projects = [
    {
      title: "AI Daily Digest",
      technologies: ["Python", "GenAI", "GitHub Actions", "Sendgrid"],
      description: "An AI-generated daily digest of AI news. Pulls from a few sources, summarizes with Deepseek R1, sends an email.",
      githubLink: "https://github.com/Gablooblue/AI-Digest",
      extraButton: {
        link: "https://cdn.forms-content-1.sg-form.com/fff47bc1-df76-11ef-ab27-8e2d707af7d1",
        content: "subscribe"
      }
    },
    {
      title: "Sayfe",
      technologies: ["Rails", "React", "React Native", "Mapbox"],
      description: "A social-style app for employers to track team status and location during natural disasters. Rails API, React web, RN mobile. Realtime geo, news API, user-to-user messaging.",
      githubLink: "https://github.com/Gablooblue/Sayfe"
    },
    {
      title: "Go, Tom",
      technologies: ["Chatbot", "Messenger"],
      description: "A Messenger chatbot that finds nearby restaurants for what you're craving. It deliberately surfaces less-known places with decent ratings, not the top hits.",
      githubLink: "https://github.com/Gablooblue/Tom-Chatbot"
    },
    {
      title: "Kwizler",
      technologies: ["Chrome Extension"],
      description: "A Chrome extension that asks a math question before you can open a social site. Most blocker extensions get deleted because they're too strict; this one just adds friction. Side benefit: mental math.",
      githubLink: "https://github.com/Gablooblue/Kwizler"
    },
    {
      title: "Sophists",
      technologies: ["Laravel", "Bootstrap"],
      description: "Built freshman year: a site to rate professors, like / dislike instead of 1-5 stars so you'd get an honest percentage out of it.",
      githubLink: "https://github.com/Gablooblue/Sophists"
    },
    {
      title: "Steering Behaviors",
      technologies: ["p5.js", "Autonomous Agents"],
      description: "A p5.js demo: text rendered as particles that react to the cursor. Toy for working out the steering-behaviors logic for autonomous agents.",
      githubLink: "https://github.com/Gablooblue/Steering-behaviors"
    }
  ]

  return (
    <div className="px-[6vw] md:px-[9vw] py-20 md:py-28">
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-x-8 gap-y-4"
      >
        <p className="label-mono md:pt-3">02 · Builds</p>
        <div>
          <h2 className="text-ink font-medium tracking-[-0.02em] leading-[0.95]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}>
            Side things that taught me the work.
          </h2>
          <p className="mt-4 text-ink-muted max-w-[60ch]">
            Hackathon weekends, scratch-an-itch tools, agency leftovers. Loose
            collection. The good ones taught me more than school did.
          </p>
        </div>
      </motion.header>

      <div className="divide-y divide-hairline">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            index={index + 1}
            {...project}
            delay={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-x-8"
      >
        <div className="hidden md:block" />
        <p className="text-ink-muted max-w-[60ch]">
          More on{' '}
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="link">
            github.com/Gablooblue
          </a>
          .
        </p>
      </motion.div>
    </div>
  )
}

export default Projects
