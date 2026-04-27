import React from 'react'

function SpeakerTalk() {
    const topics = [
        'Startups and the experience of building one.',
        'Being a young person in tech and startups.',
        "Delivering pitches and talks that don't bore the room.",
        "The tech industry and where it's heading.",
        'Backend, cloud, and DevOps engineering.',
    ]

    const structure = [
        'Talks run 15 minutes max. Shorter is usually better; attention drops fast past 15.',
        'I like a real Q&A. Leave time for it.',
    ]

    return (
        <div className="px-[6vw] md:px-[9vw] py-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-x-8 gap-y-4">
                <p className="label-mono md:pt-3">03 · Talk</p>

                <div className="max-w-[68ch]">
                    <h2
                        className="text-ink font-medium tracking-[-0.02em] leading-[0.95]"
                        style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
                    >
                        What I bring.
                    </h2>

                    <h3 className="mt-10 mb-4 text-ink font-medium tracking-[-0.01em]" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}>
                        Topics
                    </h3>
                    <ul className="space-y-2.5">
                        {topics.map((item) => (
                            <li key={item} className="grid grid-cols-[1rem_1fr] gap-3 items-start" style={{ fontSize: '1rem', lineHeight: 1.55 }}>
                                <span aria-hidden className="mt-[0.55em] block w-[6px] h-[6px] bg-signal" />
                                <span className="text-ink">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <h3 className="mt-12 mb-4 text-ink font-medium tracking-[-0.01em]" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}>
                        Format
                    </h3>
                    <ul className="space-y-2.5">
                        {structure.map((item) => (
                            <li key={item} className="grid grid-cols-[1rem_1fr] gap-3 items-start" style={{ fontSize: '1rem', lineHeight: 1.55 }}>
                                <span aria-hidden className="mt-[0.55em] block w-[6px] h-[6px] bg-signal" />
                                <span className="text-ink">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SpeakerTalk
