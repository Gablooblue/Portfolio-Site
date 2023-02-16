import React from 'react'

function SpeakerBefore() {
    return(
        <section className = "container mx-auto py-3 max-w-screen-xl px-4">
            <h2 className = "mb-5 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl text-white">Before Inviting Me</h2>
            <h4 className = "mt-12 mb-5 font-bold leading-none text-xl md:text-2xl xl:text-3xl">Understanding The Event</h4>
            <h3></h3>
            <p className = "mb-3 text-gray-300 font-light md:text-lg lg:text-sl">
                Before inviting me to talk at your event, I require a couple of things to help me craft the perfect talk
            </p>

            <ul className = "ml-5 list-disc text-gray-300 font-light md:text-lg lg:text-sl">
                <li>A description of the event</li>
                <li>What kind of participants are joining the event? The more specific the better</li>
                <li>A brief description of the type of talk you expect me to give. Doesn't have to be too specific but I don't want it to be something as vague as "entrepreneurship"</li>
                <li>A primer of the organization handling the event</li>
                <li>If the event is a panel or fireside chat, please send over the questions beforehand</li>
            </ul>
            <div>
                <h4 className = "mt-12 mb-5 font-bold leading-none text-xl md:text-2xl xl:text-3xl">Speaker Honorarium</h4>
                <p className = "mb-3 text-gray-300 font-light md:text-lg lg:text-sl">
                    I would prefer if the event gave some sort of token. It can be a speaker fee, or it can be something simple like sending over food or gifts. I want to normalize people getting tokens for speaking because remember that they're taking time out of their week to give a talk for your event!
                </p>

                <p className = "mb-3 text-gray-300 font-light md:text-lg lg:text-sl">
                    I understand that some events don't have the budget to give speaker tokens, and I'll address this on a case-by-case basis
                </p>
            </div>
        </section>

    )

}

export default SpeakerBefore
