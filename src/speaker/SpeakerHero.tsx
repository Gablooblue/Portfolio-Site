import React from 'react'
import { motion } from 'framer-motion'
import SocialLinks from "../components/SocialLinks"

function SpeakerHero() {
    return (
        <header className="px-[6vw] md:px-[9vw] pt-24 md:pt-32 pb-16 md:pb-24 min-h-[80vh] flex flex-col justify-between">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            >
                <p className="label-mono mb-10">00 &nbsp;·&nbsp; gabriel lopez &nbsp;·&nbsp; speaker rider</p>
                <h1
                    className="text-ink leading-[0.92] tracking-[-0.03em] font-semibold"
                    style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontStretch: '95%' }}
                >
                    Speaker
                    <br />
                    rider<span className="text-signal">.</span>
                </h1>

                <p className="mt-10 max-w-[60ch] text-ink" style={{ fontSize: 'clamp(1.0625rem, 1.6vw, 1.25rem)', lineHeight: 1.55 }}>
                    I love speaking at events, especially ones aimed at young people in
                    tech. I&apos;ve been at startup events since I was 15, and I find it
                    genuinely worthwhile to give back. I happily take invites from
                    student-led organizations.
                </p>
            </motion.div>

            <div className="mt-16 md:mt-24">
                <SocialLinks />
                <a href="#contact" className="link label-mono">book me →</a>
            </div>
        </header>
    )
}

export default SpeakerHero
