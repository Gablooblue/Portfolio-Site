import React from 'react'
import ExperienceCard from '../components/ExperienceCard'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

function Journey() {
  const experiences = [
    {
      logo: "clout-logo.jpeg",
      title: "Co-Founder / CTO",
      company: "Clout Kitchen",
      date: "Jan 2024 - Current",
      description: "Backseat AI turns your favorite streamers like Tyler1 and Emiru into real-time AI gaming buddies",
      achievements: [
        "Architected and scaled MLOps infrastructure on AWS and GCP that could handle 1000+ inference requests per second and 20,000 concurrent users",
        "Engineered a real-time chatbot leveraging Mistral and Gemini models to analyze in-game data to actionable coaching insights that enhanced player performance",
        "Built multi-agent LLM with RAG that made inference 96% cheaper and 54% faster",
        "Recruited and led a multidisciplinary team of 10 AI, App and Cloud Engineers",
        "Provided technical due diligence during fundraising, securing $4.5M in funding from Andreesen Horowitz, Peak XV, AppWorks",
        "Built predictive financial models to estimate costs per user, reducing cost-per-user by 60%"
      ]
    },
    {
      logo: "g2-logo.png",
      title: "Senior Software Engineer, AI Special Projects",
      company: "G2",
      date: "Mar 2023 - July 2024",
      description: "G2 is a peer-to-peer platform offering user-generated reviews for software and services",
      achievements: [
        "Develop, manage, and maintain a Business Intelligence dashboard using Ruby on Rails",
        "Engineered an advanced OpenAI chatbot with Pinecone for enhanced data indexing",
        "Developed Python data pipeline for analytics distribution to S3, SFTP and Snowflake",
        "Optimized app performance reducing load time from 5s to 2s",
        "Improved First Contentful Paint time by 45% through component optimization"
      ]
    },
    {
      logo: "medhyve logo.png",
      title: "Co-Founder / CEO",
      company: "MedHyve (Acquired)",
      date: "July 2022 - Feb 2023",
      description: "MedHyve is a B2B e-commerce medical marketspace that connects hospitals and clinics with medical suppliers",
      achievements: [
        "Acquired in 2023 by Pulse63 Healthcare Ventures",
        "Created pitches that raised over $500k in Funding from VCs and Angel Investors",
        "Managed a team of 27 consisting of engineering, ops, sales, marketing, admin",
        "Grew MRR by 70% and GMV by 50% through new revenue models",
        "Improved user retention from 1% to 8% monthly",
        "Worked with BCG to develop business financials for seed raise",
        "Won 3 Startup Pitch Competitions with $20k+ in prizes"
      ]
    },
    {
      logo: "medhyve logo.png",
      title: "Co-Founder / CTO",
      company: "MedHyve (Acquired)",
      date: "Dec 2017 - July 2022",
      description: "MedHyve is a B2B e-commerce medical marketspace that connects hospitals and clinics with medical suppliers",
      achievements: [
        "Built B2B platform reaching 2000 MAU & 200k GMV",
        "Led 8-person product team as scrum master and product owner",
        "Improved conversion by 40% with AI recommendation system",
        "Reduced page load time from 10s to 2s through architecture optimization",
        "Improved sprint velocity by 23% through DevOps improvements",
        "Achieved 80% test coverage and reduced failure rate from 20% to 5%",
        "Grew conversions from 4% to 8% and MAU from 1k to 8k"
      ]
    },
    {
      logo: "Funasia.png",
      title: "Software Engineer",
      company: "FunAsia",
      date: "Nov 2018 - Jan 2021",
      description: "Funasia is a software dev company that takes clients from various industries",
      achievements: [
        "Developed a social media app with React Native & Firebase",
        "Built contest registration app with Ruby on Rails and MySQL",
        "Created insurance registration system with Rails and PostgreSQL"
      ]
    },
    {
      logo: "sali logo.png",
      title: "Mobile Developer",
      company: "Sali",
      date: "Aug 2017 - Feb 2018",
      description: "Sali is an app that aims to teach users how to perform basic medical procedures such as CPR through the phone's gyroscope and accelerometer",
      achievements: [
        "Created a React Native app with Firebase and created a system for watching videos, tracking lesson progress, and user registration"
      ]
    },
    {
      logo: "UP.png",
      title: "BS Computer Science",
      company: "University of the Philippines Diliman",
      date: "Aug 2017 - Dec 2019",
      description: "UP Diliman is one of the top universities in the Philippines",
      achievements: [
        "Dropped out during sophomore year to pursue MedHyve full time",
        "Spent time attending hackathons and doing freelance projects"
      ]
    }
  ]

  return (
    <section className="container mx-auto py-16 max-w-screen-xl px-4">
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">My Journey</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <motion.span 
            className="px-4 py-2 bg-sky-400/10 text-sky-400 rounded-full backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >Engineering Leadership</motion.span>
          <motion.span 
            className="px-4 py-2 bg-sky-400/10 text-sky-400 rounded-full backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >DevOps</motion.span>
          <motion.span 
            className="px-4 py-2 bg-sky-400/10 text-sky-400 rounded-full backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >Fullstack</motion.span>
          <motion.span 
            className="px-4 py-2 bg-sky-400/10 text-sky-400 rounded-full backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >AI/ML</motion.span>
        </div>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard 
            key={`${experience.company}-${experience.title}`}
            {...experience}
            delay={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Journey
