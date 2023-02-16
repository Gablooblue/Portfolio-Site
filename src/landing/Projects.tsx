import React from "react"
import socials from "../assets/socials"
import GithubButton from "../components/GithubButton"

function Projects() {
    return(
        <section className = "container mx-auto py-3 text-center max-w-screen-xl px-4">
            <h2 className = "mb-7 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl text-white text-center">Featured Projects</h2>
            
            <h3 className = "mt-12 mb-5 font-bold leading-none text-2xl md:text-3xl xl:text-4xl">Sayfe</h3>
            <div className = "mb-5 leading-loose">
                <span className = "p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block  inline-block">Ruby on Rails</span>
                <span className="p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block">React </span>
                <span className="p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block">React Native</span>
                <span className="p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block">Realtime Geolocation</span>
                <span className="p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block">MapBox</span>
            </div>
            <p className = "my-5 text-md md:text-lg xl:text-xl text-gray-400">
                Sayfe is a social media app that employers can use to track employee status and locations during natural disasters. <br/> <br/> This app used a Rails API backend, with a React frontend, and a React Native mobile app. Features included News API Integration, Realtime Geolocation, and user-to-user messaging 
            </p>
            <div className = "my-4">
                <img className = "mx-auto" src={process.env.PUBLIC_URL + "Sayfe.png"}/>
            </div>

            <GithubButton link="https://github.com/Gablooblue/Sayfe" content = "View on Github" />

            <h3 className = "mt-12 mb-5 font-bold leading-none text-2xl md:text-3xl xl:text-4xl">Go, Tom</h3>
            <div className = "mb-5">
                <span className = "p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block">Chatbot</span>
                <span className="p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block">Facebook Messenger</span>
            </div>
            <p className = "my-5 text-md md:text-lg xl:text-xl text-gray-400">
                A chatbot that helps you find new restaurants based on your cravings. It focuses on recommending restaurants that aren't well known but are also nearby and have decent ratings on Google 
            </p>
            <div className = "my-4">
                <img className = "mx-auto" src={process.env.PUBLIC_URL + "GoTom.png"}/>
            </div>

            <GithubButton link="https://github.com/Gablooblue/Tom-Chatbot" content = "View on Github" />

            <h3 className = "mt-12 mb-5 font-bold leading-none text-2xl md:text-3xl xl:text-4xl">Kwizler</h3>
            <div className = "mb-5">
                <span className = "p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block">Chrome Extension</span>
            </div>
            <p className = "my-5 text-md md:text-lg xl:text-xl text-gray-400">
                A Chrome extension that will ask you a math question before you enter a social media site. 
            </p>
            <p className = "my-5 text-md md:text-lg xl:text-xl text-gray-400"> I didn't like that most extensions targetted towards helping you cut out social would just block them out entirely. This often would not work well and people would just delete the extension. 

            </p>
                <p className = "my-5 text-md md:text-lg xl:text-xl text-gray-400">
                    The idea for Kwizler was not to block them, but to make it slightly harder. This also came with the added benefit of improving the user's mental math skills
            </p>
            <div className = "my-4">
                <img className = "mx-auto" src={process.env.PUBLIC_URL + "kwizler.jpg"}/>
            </div>

            
            <GithubButton link="https://github.com/Gablooblue/Kwizler" content = "View on Github" />
            <h3 className = "mt-10 mb-5 font-bold leading-none text-2xl md:text-3xl xl:text-4xl">Sophists</h3>
            <div className = "mb-5">
                <span className = "p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block">Laravel</span>
                <span className="p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block">Bootstrap</span>
            </div>
            <p className = "my-5 text-md md:text-lg xl:text-xl text-gray-400">
                During my freshman year, I was given the idea when my friends were talking about a system in which we can rate professors, so I took it upon myself to implement and create a working website.

                I used a binary "like" and "dislike" rating for professors instead of having a 5 star rating to prevent people to create a more natural percentage score

                
            </p>
            {/* <div className = "my-4"> */}
            {/*     <img className = "mx-auto" src= "https://via.placeholder.com/750"/> */}
            {/* </div> */}

            <GithubButton link="https://github.com/Gablooblue/Sophists" content= "View on Github"/>


            <h3 className = "mt-12 mb-5 font-bold leading-none text-2xl md:text-3xl xl:text-4xl">Steering Behaviors</h3>
            <div className = "mb-5">
                <span className = "p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block">Interactive</span>
                <span className = "p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block">p5.js</span>
                <span className="p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block">Autonomous Agents</span>
            </div>
            <p className = "my-5 text-md md:text-lg xl:text-xl text-gray-400">A demonstration of using p5.js to render text as particles that react to the mouse. Demonstrating logic of steering behaviors for autonomous agents.</p>
            <div className = "my-4">
                <img className = "mx-auto" src={process.env.PUBLIC_URL + "steering.gif"}/>
            </div>

            <GithubButton link="https://github.com/Gablooblue/Steering-behaviors" content= "View on Github"/>

            <div className = "text-center my-8">
                <p className = " mb-4 text-gray-400 text-md md:text-lg xl:text-xl">These are just a small subset of the projects I've done. If you want to see more of my projects, check out my GitHub </p>
            </div>

            <GithubButton link={ socials.github } content = "View More Projects" />
            
        </section>
            

    )
}

export default Projects;
