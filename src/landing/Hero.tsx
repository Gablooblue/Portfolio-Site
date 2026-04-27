import React from 'react';
import { motion } from 'framer-motion';
import socials from '../assets/socials';

const reveal = {
    initial: { opacity: 0, y: 16 },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] },
    }),
};

function Hero() {
    return (
        <header className="relative px-[6vw] md:px-[9vw] pt-24 md:pt-32 pb-16 md:pb-24 min-h-[88vh] flex flex-col justify-between">
            <motion.div
                initial="initial"
                animate="animate"
            >
                <motion.p
                    custom={0}
                    variants={reveal}
                    className="label-mono mb-10"
                >
                    00 &nbsp;·&nbsp; gabriel henry lopez &nbsp;·&nbsp; portfolio
                </motion.p>

                <motion.h1
                    custom={1}
                    variants={reveal}
                    className="font-sans text-ink leading-[0.92] tracking-[-0.03em] font-semibold"
                    style={{ fontSize: 'clamp(3.25rem, 9.5vw, 8.25rem)', fontStretch: '95%' }}
                >
                    Gabriel
                    <br />
                    Lopez<span className="text-signal">.</span>
                </motion.h1>

                <motion.p
                    custom={2}
                    variants={reveal}
                    className="mt-10 text-ink"
                    style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)', lineHeight: 1.35, fontWeight: 400 }}
                >
                    2&times; founder. 0&rarr;1 builder. Full-stack and AI engineer.
                </motion.p>
            </motion.div>

            <motion.div
                custom={4}
                initial="initial"
                animate="animate"
                variants={reveal}
                className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-[max-content_1fr] gap-x-10 gap-y-3 max-w-3xl"
            >
                <span className="label-mono pt-1">currently</span>
                <p className="text-ink">
                    Engineering Lead at{' '}
                    <a
                        href="https://onprofit.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                    >
                        OnProfit
                    </a>
                    , building voice-first AI sales agents that call dead leads and
                    run upsells. LLM-as-a-judge analytics, eval harnesses, agentic
                    dev workflows.
                </p>

                <span className="label-mono pt-1">previously</span>
                <p className="text-ink-muted">
                    Co-founded <span className="text-ink">Backseat AI</span>:
                    real-time AI gaming coaches with Tyler1 and Emiru. Raised $4.5M
                    from{' '}
                    <a
                        href="https://appworks.tw/why-we-invested-justin-marcel-gabriel-the-trio-of-gamer-engineer-and-founder-of-clout-kitchen/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                    >
                        a16z, Peak XV, AppWorks
                    </a>
                    . Wound down after 9 months when growth outpaced unit economics.
                    Before that, founded <span className="text-ink">MedHyve</span>{' '}
                    (B2B medical marketplace, acquired by Pulse63 in 2023). Senior
                    engineer at G2 on Market Intelligence.
                </p>

                <span className="label-mono pt-1">based</span>
                <p className="text-ink-muted">Austin, with frequent stops in Manila.</p>

                <span className="label-mono pt-1">reach</span>
                <p className="flex flex-wrap gap-x-5 gap-y-1">
                    <a className="link-reveal" href={`mailto:${socials.email}`}>email</a>
                    <a className="link-reveal" href={socials.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a>
                    <a className="link-reveal" href={socials.github} target="_blank" rel="noopener noreferrer">github</a>
                    <a className="link-reveal" href={socials.twitter} target="_blank" rel="noopener noreferrer">twitter</a>
                </p>
            </motion.div>

            <motion.p
                custom={6}
                initial="initial"
                animate="animate"
                variants={reveal}
                className="label-mono mt-16 md:mt-20 flex flex-wrap gap-x-1.5 gap-y-1 items-center"
            >
                <span aria-hidden>↓</span>
                <span>scroll</span>
                <span aria-hidden>·</span>
                <span>or jump:</span>
                <a href="#journey" className="link-reveal">work</a>
                <span aria-hidden>,</span>
                <a href="#projects" className="link-reveal">builds</a>
                <span aria-hidden>,</span>
                <a href="#recognition" className="link-reveal">press</a>
                <span aria-hidden>,</span>
                <a href="#contact" className="link-reveal">reach</a>
            </motion.p>
        </header>
    );
}

export default Hero;
