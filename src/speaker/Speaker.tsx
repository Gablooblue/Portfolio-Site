import React from 'react'
import SpeakerHero from "./SpeakerHero"
import SpeakerAbout from "./SpeakerAbout"
import SpeakerBefore from "./SpeakerBefore"
import SpeakerTalk from "./SpeakerTalk"
import Contact from "../landing/Contact"

function Speaker() {
    return(
        <div className="bg-slate-900 text-white scroll-smooth">
            <SpeakerHero />
            <SpeakerAbout />
            <SpeakerBefore />
            <SpeakerTalk />
            <Contact />
            
        </div>

    )

}

export default Speaker
