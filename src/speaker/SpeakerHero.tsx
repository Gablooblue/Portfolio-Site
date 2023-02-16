import React from 'react'
import SocialLinks from "../components/SocialLinks"

function SpeakerHero() {
    return(
        <section className = "flex h-screen bg-slate-900">
            <div className="grid max-w-screen-xl px-4 py-8 m-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Gabriel Henry Lopez Speaker Rider</h1>
                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-300">I love speaking at events! Especially if they fit my focus on helping young people in the tech community. As someone who's been attending startup events since I was 15, it's something I'm incredibly passionate about. 

                        <br /> <br />
                        I'm open to accepting invites from students as well. I find it very fulfilling to give talks in student-led organizations and events.</p>
                    <SocialLinks />
                    <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  border rounded-lg focus:ring-4  text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
                        Contact Me  
                    </a> 
                </div>
            </div>

        </section>
    )

}

export default SpeakerHero
