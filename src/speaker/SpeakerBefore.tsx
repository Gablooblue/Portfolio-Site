import React from 'react'

function SpeakerBefore() {
    return (
        <div className="px-[6vw] md:px-[9vw] py-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-x-8 gap-y-4">
                <p className="label-mono md:pt-3">02 · Before</p>

                <div className="max-w-[68ch]">
                    <h2
                        className="text-ink font-medium tracking-[-0.02em] leading-[0.95]"
                        style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
                    >
                        Before you invite.
                    </h2>

                    <p className="mt-6 text-ink" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
                        A few things I need from you so I can make the talk worth your
                        audience&apos;s time:
                    </p>

                    <ul className="mt-5 space-y-2.5">
                        {[
                            'A description of the event.',
                            "Who's in the room. The more specific, the better.",
                            'A brief on the talk you want. Not as vague as "entrepreneurship", please.',
                            'A primer on the org running the event.',
                            "If it's a panel or fireside, send the questions ahead of time.",
                        ].map((item) => (
                            <li key={item} className="grid grid-cols-[1rem_1fr] gap-3 items-start" style={{ fontSize: '1rem', lineHeight: 1.55 }}>
                                <span aria-hidden className="mt-[0.55em] block w-[6px] h-[6px] bg-signal" />
                                <span className="text-ink">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <h3 className="mt-12 mb-4 text-ink font-medium tracking-[-0.01em]" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}>
                        On honorariums
                    </h3>
                    <p className="text-ink" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
                        I prefer when events offer some kind of token. A speaker fee, a
                        dinner, a thoughtful gift. I want to normalize this because speakers
                        are giving up real time. If your budget doesn&apos;t allow it, tell me
                        and we&apos;ll figure it out.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SpeakerBefore
