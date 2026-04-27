import React from 'react'
import socials from "../assets/socials"
import { motion } from 'framer-motion'

function Contact() {
    return (
        <div className="px-[6vw] md:px-[9vw] py-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-x-8 gap-y-4">
                <p className="label-mono md:pt-3">04 · Reach</p>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                >
                    <h2
                        className="text-ink font-medium tracking-[-0.02em] leading-[0.95]"
                        style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
                    >
                        Say hi.
                    </h2>

                    <p className="mt-6 text-ink max-w-[60ch]"
                       style={{ fontSize: 'clamp(1.0625rem, 1.6vw, 1.25rem)', lineHeight: 1.55 }}>
                        Open to founder intros, advisory work in AI infra, and
                        loud opinions about LLM evals. Best on{' '}
                        <a className="link" href={`mailto:${socials.email}`}>
                            email
                        </a>
                        ; also{' '}
                        <a className="link" href={socials.twitter} target="_blank" rel="noopener noreferrer">
                            twitter
                        </a>
                        ,{' '}
                        <a className="link" href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                            linkedin
                        </a>
                        , and{' '}
                        <a className="link" href={socials.github} target="_blank" rel="noopener noreferrer">
                            github
                        </a>
                        .
                    </p>

                </motion.div>
            </div>
        </div>
    )
}

export default Contact
