import React from "react"
import socials from "../assets/socials"
import GithubButton from "../components/GithubButton"
import Button from "../components/Button"
import { motion } from 'framer-motion'
import ProjectCard from "../components/ProjectCard"

function Projects() {
  const projects = [
    {
      title: "AI Daily Digest",
      technologies: ["Python", "Generative AI", "Github Actions", "Sendgrid"],
      description: "AI-generated daily digest of AI news and updates. Pulls daily news from different news sources and uses Deepseek R1 to generate a summary into an email.",
      image: "AI-Digest.png",
      githubLink: "https://github.com/Gablooblue/AI-Digest",
      extraButton: {
        link: "https://cdn.forms-content-1.sg-form.com/fff47bc1-df76-11ef-ab27-8e2d707af7d1",
        content: "Subscribe to Newsletter"
      }
    },
    {
      title: "Sayfe",
      technologies: [
        "Ruby on Rails",
        "React",
        "React Native",
        "Realtime Geolocation",
        "MapBox"
      ],
      description: "Sayfe is a social media app that employers can use to track employee status and locations during natural disasters.\n\nThis app used a Rails API backend, with a React frontend, and a React Native mobile app. Features included News API Integration, Realtime Geolocation, and user-to-user messaging",
      image: "Sayfe.png",
      githubLink: "https://github.com/Gablooblue/Sayfe"
    },
    {
      title: "Go, Tom",
      technologies: ["Chatbot", "Facebook Messenger"],
      description: "A chatbot that helps you find new restaurants based on your cravings. It focuses on recommending restaurants that aren't well known but are also nearby and have decent ratings on Google",
      image: "GoTom.png",
      githubLink: "https://github.com/Gablooblue/Tom-Chatbot"
    },
    {
      title: "Kwizler",
      technologies: ["Chrome Extension"],
      description: "A Chrome extension that will ask you a math question before you enter a social media site.\n\nI didn't like that most extensions targetted towards helping you cut out social would just block them out entirely. This often would not work well and people would just delete the extension.\n\nThe idea for Kwizler was not to block them, but to make it slightly harder. This also came with the added benefit of improving the user's mental math skills",
      image: "kwizler.jpg",
      githubLink: "https://github.com/Gablooblue/Kwizler"
    },
    {
      title: "Sophists",
      technologies: ["Laravel", "Bootstrap"],
      description: "During my freshman year, I was given the idea when my friends were talking about a system in which we can rate professors, so I took it upon myself to implement and create a working website.\n\nI used a binary \"like\" and \"dislike\" rating for professors instead of having a 5 star rating to prevent people to create a more natural percentage score",
      githubLink: "https://github.com/Gablooblue/Sophists"
    },
    {
      title: "Steering Behaviors",
      technologies: ["Interactive", "p5.js", "Autonomous Agents"],
      description: "A demonstration of using p5.js to render text as particles that react to the mouse. Demonstrating logic of steering behaviors for autonomous agents.",
      image: "steering.gif",
      githubLink: "https://github.com/Gablooblue/Steering-behaviors"
    }
  ]

  return (
    <section className="container mx-auto py-16 max-w-screen-xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
      </motion.div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.title}
            {...project}
            delay={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <p className="text-gray-400 text-md md:text-lg xl:text-lg mb-8">
          These are just a small subset of the projects I've done. If you want to see more of my projects, check out my GitHub
        </p>
        <GithubButton link={socials.github} content="View More Projects" />
      </motion.div>
    </section>
  )
}

export default Projects
