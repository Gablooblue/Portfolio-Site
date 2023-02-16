import React from 'react'
import SpeakerHero from "./SpeakerHero"
import SpeakerAbout from "./SpeakerAbout"

function Speaker() {
    return(
        <div className="bg-slate-900 text-white scroll-smooth">
            <SpeakerHero />
            <SpeakerAbout />
            
        </div>

    )

}

export default Speaker
