import React from 'react'
import ExperienceCard from '../components/ExperienceCard'
import { motion } from 'framer-motion'

function Journey() {
  const experiences = [
    {
      title: "Engineering Lead",
      company: "OnProfit",
      date: "Mar 2025 → Apr 2026",
      description: "Voice-first AI sales agents that call dead leads and run upsells.",
      achievements: [
        "Built an LLM-as-a-judge analytics service scoring calls on voicemail handling, audio naturalness, and script adherence.",
        "Shipped an LLM eval harness that replays call scenarios head-to-head across prompts and models.",
        "Built the FastAPI realtime layer streaming transcripts, variables, and call state to the client.",
        "Built a multi-agent post-call hook that extracts structured data from conversations.",
        "Designed agentic workflows automating the full dev lifecycle: PRD, TDD, code, and review.",
      ],
    },
    {
      title: "CTO & Co-Founder",
      company: "Backseat AI",
      date: "Jan 2024 → Jan 2025",
      description: "Real-time AI gaming coaches in collaboration with streamers like Tyler1 and Emiru. Raised $4.5M seed from a16z, Peak XV, AppWorks.",
      achievements: [
        "Launched to 30k paid users on day 1; rebuilt core infra in 72 hours after the launch crash.",
        "Scaled to 70k concurrent users on AWS (ECS, EB, SageMaker) and GCP (Kubernetes).",
        "Cut cost per user from $50 to $10 via Supabase-to-AWS migration, Redis caching, GPU sharding, and provider negotiation.",
        "Built a multi-agent LLM + RAG coaching pipeline on Mistral and Gemini: 96% cheaper, 54% faster.",
        "Shipped a NextJS + Electron desktop companion and creator marketplace on Vercel Edge, Supabase Realtime, and Redis.",
        "Led a 12-person product and engineering team; owned roadmap, scrum, and investor updates.",
        "Wound the company down after 9 months when growth outpaced unit economics.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "G2",
      date: "Mar 2023 → Jul 2024",
      description: "Peer-to-peer software review platform.",
      achievements: [
        "Shipped a Rails + React Market Intelligence dashboard and a GPT-4 + Pinecone RAG chatbot over its data.",
        "Cut page load from 5s to 2s with ViewComponents and Elasticsearch; cut First Contentful Paint 45% by lazy-loading ChartJS with Hotwire Turbo and Stimulus.",
        "Built a Python pipeline distributing Market Intelligence data to S3, SFTP, and Snowflake.",
      ],
    },
    {
      title: "CTO & Co-Founder",
      company: "MedHyve",
      date: "Dec 2017 → Feb 2023",
      description: "B2B medical marketplace connecting Philippine hospitals with suppliers. Acquired by Pulse63 in 2023. Raised $500k+. 3× pitch champion (Seedstars, ARISE, Merck). 8k MAU and $200k GMV at exit.",
      achievements: [
        "Walked supplier shops to log products and prices ourselves before we could sign suppliers to the platform.",
        "Hand-delivered orders across the country for 2 years until a logistics partner existed.",
        "Sourced supplies from Singapore, Malaysia, and Indonesia during the pandemic to keep hospitals stocked.",
        "Hosted group buys so small hospitals could access enterprise-tier pricing.",
        "Built the Rails + NextJS platform end-to-end: payments, shipping, inventory, and an AI hybrid recommender (+40% conversion).",
        "Migrated to NextJS + Rails API + Redis (page load 8s to 2s); built CI/CD on AWS ECS, S3, RDS, and Vercel (deploys 20 to 8 min).",
        "Built 80% test coverage with Rspec and Jest; cut user failure rate from 20% to 5%.",
        "Grew conversions from 4% to 8% and MAU from 1k to 8k; managed a board of medical executives and BCG country leads.",
      ],
    },
    {
      title: "BS Computer Science",
      company: "University of the Philippines, Diliman",
      date: "2017 → 2019",
      description: "Top CS program in the country. Former Microsoft Student Partner. Left to ship MedHyve full-time.",
      achievements: [
        "Spent the time on hackathons and freelance work instead.",
      ],
    },
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
        <p className="label-mono md:pt-3">01 · Work</p>
        <div>
          <h2 className="text-ink font-medium tracking-[-0.02em] leading-[0.95]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}>
            Where I&apos;ve shipped.
          </h2>
          <p className="mt-4 text-ink-muted max-w-[60ch]">
            Roughly chronological, most recent first. Numbers are the ones I&apos;d
            still defend in a room.
          </p>
        </div>
      </motion.header>

      <div className="divide-y divide-hairline">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company}-${experience.title}`}
            {...experience}
            delay={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Journey
