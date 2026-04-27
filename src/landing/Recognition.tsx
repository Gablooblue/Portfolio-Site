import React from 'react'
import { motion } from 'framer-motion'

interface Entry {
    year: string
    title: string
    detail?: string
    href: string
}

const awards: Entry[] = [
    { year: '2022', title: 'Merck Access To Health Pitch Competition', detail: 'Champion', href: 'https://www.merckgroup.com/en/sustainability/health-for-all/access-to-health/health-pitch-competition.html' },
    { year: '2020', title: 'ARISE Startup Pitch Challenge', detail: 'Champion', href: 'https://www.esquiremag.ph/money/industry/arise-startup-pitch-challenge-2020-winners-a00289-20201125' },
    { year: '2020', title: 'Seedstars Manila', detail: 'Champion', href: 'https://www.rappler.com/technology/innovations/medical-marketplace-startup-medhyve-represent-philippines-seedstars-world-2020/' },
    { year: '2019', title: 'Techtonic Most Innovative Startup', detail: '2nd', href: 'https://www.facebook.com/TechtonicSummit/posts/pfbid02qjsXnd6MJ9bDh1KaQuugqFjkQmREudgebmBMUAVqhXUTvoBbwbHBoeBUbZm5z5dLl' },
    { year: '2018', title: 'AIM DeTechTive Hackathon', detail: '3rd', href: 'https://www.facebook.com/photo/?fbid=10155409844716547&set=pcb.10155409611911547' },
]

const press: Entry[] = [
    { year: '2024', title: 'AppWorks: Why we invested in the trio behind Clout Kitchen', href: 'https://appworks.tw/why-we-invested-justin-marcel-gabriel-the-trio-of-gamer-engineer-and-founder-of-clout-kitchen/' },
    { year: '2022', title: 'Asia Tech Podcast: Gabriel Lopez at MedHyve', href: 'https://asiatechpodcast.com/2022/08/10/ep-223-gabriel-lopez-co-founder-and-cto-at-medhyve-we-were-eventually-able-to-let-the-platform-speak-for-itself/' },
    { year: '2022', title: 'Hustleshare: The hustle behind MedHyve', href: 'https://www.hustleshare.com/episodes/interview-nigelliriogabriellopez-medhyve' },
    { year: '2022', title: 'e27: MedHyve raises pre-seed for medical procurement', href: 'https://e27.co/medhyve-raises-pre-seed-round-pegasus-tech-ventures-foxmont-20220131/' },
    { year: '2020', title: 'Rappler: MedHyve to represent PH in global competition', href: 'https://www.rappler.com/technology/innovations/medical-marketplace-startup-medhyve-represent-philippines-seedstars-world-2020/' },
    { year: '2019', title: 'Techshake Founder Spotlight: Gabriel Lopez', href: 'https://www.techshake.asia/stories/founder-spotlight-gabriel-lopez-of-medhyve-the-most-efficient-way-to-get-your-medical-product-needs' },
]

function EntryRow({ entry }: { entry: Entry }) {
    return (
        <a
            href={entry.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-[3.5rem_1fr_auto] gap-x-4 py-3 border-b border-hairline last:border-0 hover:bg-paper-deep transition-colors duration-150 px-2 -mx-2"
        >
            <span className="label-mono group-hover:text-signal transition-colors duration-150">
                {entry.year}
            </span>
            <span className="text-ink leading-snug">
                {entry.title}
            </span>
            {entry.detail ? (
                <span className="label-mono self-center text-ink-muted group-hover:text-signal transition-colors duration-150">
                    {entry.detail.toLowerCase()}
                </span>
            ) : (
                <span className="label-mono self-center text-ink-muted opacity-60 group-hover:opacity-100 group-hover:text-signal transition-colors duration-150">
                    ↗
                </span>
            )}
        </a>
    )
}

function Recognition() {
    return (
        <div className="px-[6vw] md:px-[9vw] py-20 md:py-28">
            <motion.header
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-x-8 gap-y-4"
            >
                <p className="label-mono md:pt-3">03 · Press</p>
                <div>
                    <h2 className="text-ink font-medium tracking-[-0.02em] leading-[0.95]"
                        style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}>
                        Trophies and quotes.
                    </h2>
                    <p className="mt-4 text-ink-muted max-w-[60ch]">
                        Pitch competitions and a few features. Mostly from the
                        MedHyve and Clout Kitchen years.
                    </p>
                </div>
            </motion.header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                <div>
                    <p className="label-mono mb-4">Awards</p>
                    <div>
                        {awards.map((e) => (
                            <EntryRow key={e.title} entry={e} />
                        ))}
                    </div>
                </div>
                <div>
                    <p className="label-mono mb-4">Features</p>
                    <div>
                        {press.map((e) => (
                            <EntryRow key={e.title} entry={e} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recognition
