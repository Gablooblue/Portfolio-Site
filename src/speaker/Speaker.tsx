import React from 'react'
import SpeakerHero from "./SpeakerHero"
import SpeakerAbout from "./SpeakerAbout"
import SpeakerBefore from "./SpeakerBefore"
import SpeakerTalk from "./SpeakerTalk"
import Contact from "../landing/Contact"

function Speaker() {
    return(
        <div className="bg-paper text-ink scroll-smooth font-sans min-h-screen">
            <SpeakerHero />
            <hr className="hairline" />
            <SpeakerAbout />
            <hr className="hairline" />
            <SpeakerBefore />
            <hr className="hairline" />
            <SpeakerTalk />
            <hr className="hairline" />
            <Contact />
        </div>
    )
}

export default Speaker
