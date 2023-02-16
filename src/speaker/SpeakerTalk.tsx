import React from 'react'

function SpeakerTalk() {
    return(
        <section className = "container mx-auto py-3 max-w-screen-xl px-4">
            <h2 className = "mb-5 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl text-white">What you can expect from my talks</h2>
            <h4 className = "mt-12 mb-5 font-bold leading-none text-xl md:text-2xl xl:text-3xl">What I talk about</h4>
            <h3></h3>
            <p className = "mb-3 text-gray-300 font-light md:text-lg lg:text-sl">
                I can talk for hours about many different topics, but generally, I give really good talks about the following topics
            </p>

            <ul className = "ml-5 list-disc text-gray-300 font-light md:text-lg lg:text-sl">
                <li>Startups and my experience in building one</li>
                <li>Being a young person in the startup and tech industry</li>
                <li>Delivering great pitches and talks</li>
                <li>The tech industry and general trends</li>
                <li>Backend, Cloud, and DevOps engineering</li>
            </ul>
            <h4 className = "mt-12 mb-5 font-bold leading-none text-xl md:text-2xl xl:text-3xl">My talk structure</h4>
            <ul className = "ml-5 list-disc text-gray-300 font-light md:text-lg lg:text-sl">
                <li>My talks will last no longer than 15 minutes, but I prefer to keep it shorter than this. This is because after 15 mins, most participants just stop listening </li>
                <li>I like to do a lot of Q&A, so leave time at the end for that</li>
            </ul>
        </section>

    )

}

export default SpeakerTalk
