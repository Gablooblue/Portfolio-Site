import React from 'react'
import { PhotoProvider, PhotoView } from "react-photo-view"
import 'react-photo-view/dist/react-photo-view.css'

function SpeakerAbout() {
    return (
        <div className="px-[6vw] md:px-[9vw] py-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-x-8 gap-y-4">
                <p className="label-mono md:pt-3">01 · About</p>

                <div className="max-w-[68ch]">
                    <h2
                        className="text-ink font-medium tracking-[-0.02em] leading-[0.95]"
                        style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
                    >
                        Who&apos;s on stage.
                    </h2>

                    <div className="mt-6 space-y-5 text-ink" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
                        <p>
                            Gabriel Lopez is a 2&times; founder and engineer. Currently
                            Engineering Lead at <span className="text-ink">OnProfit</span>,
                            building voice-first AI sales agents.
                        </p>
                        <p>
                            Previously co-founded <span className="text-ink">Backseat AI</span>,
                            real-time AI gaming coaches with streamers like Tyler1 and Emiru;
                            raised $4.5M seed from a16z, Peak XV, and AppWorks. Before that,
                            founded <span className="text-ink">MedHyve</span>, a B2B medical
                            marketplace that scaled to 8k MAU and was acquired by Pulse63 in 2023.
                        </p>
                        <p>
                            Former Microsoft Student Partner. Studied CS at UP Diliman before
                            leaving to build MedHyve full-time. Started freelancing at 16,
                            co-founded MedHyve at 17.
                        </p>
                        <p>
                            Champion at Seedstars Manila 2020, ARISE 2020, Merck Access to
                            Health 2022, and a few others. Has given talks at startup and
                            university events nationwide, judged hackathons, and mentored
                            young founders.
                        </p>
                    </div>

                    <div className="mt-12">
                        <p className="label-mono mb-4">Photos</p>
                        <PhotoProvider>
                            <div className="flex flex-wrap gap-3">
                                <PhotoView src="/Gab.JPG">
                                    <img src="/Gab.JPG" alt="Gab standing" className="w-32 md:w-44 cursor-pointer" />
                                </PhotoView>
                                <PhotoView src="/Gab Sitting.JPG">
                                    <img src="/Gab Sitting.JPG" alt="Gab sitting" className="w-32 md:w-44 cursor-pointer" />
                                </PhotoView>
                            </div>
                        </PhotoProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpeakerAbout
