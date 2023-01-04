import React from "react"
import socials from "./socials"

function Projects() {
    return(
        <section className = "container mx-auto py-3 text-center max-w-screen-xl">
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
                <img className = "mx-auto" src= "https://via.placeholder.com/750"/>
            </div>

            <h3 className = "mt-12 mb-5 font-bold leading-none text-2xl md:text-3xl xl:text-4xl">GoTom</h3>
            <div className = "mb-5">
                <span className = "p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block">Chatbot</span>
                <span className="p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block">Facebook Messenger</span>
            </div>
            <p className = "my-5 text-md md:text-lg xl:text-xl text-gray-400">
                A chatbot that helps you find new restaurants based on your cravings. It focuses on recommending restaurants that aren't well known but are also nearby and have decent ratings on Google 
            </p>
            <div className = "my-4">
                <img className = "mx-auto" src= "https://via.placeholder.com/750"/>
            </div>

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
                <img className = "mx-auto" src= "https://via.placeholder.com/750"/>
            </div>

            <h3 className = "mt-10 mb-5 font-bold leading-none text-2xl md:text-3xl xl:text-4xl">Sophists</h3>
            <div className = "mb-5">
                <span className = "p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block">Laravel</span>
                <span className="p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block">Bootstrap</span>
            </div>
            <p className = "my-5 text-md md:text-lg xl:text-xl text-gray-400">
                During my freshman year, I was given the idea when my friends were talking about a system in which we can rate professors, so I took it upon myself to implement and create a working website.

                I used a binary "like" and "dislike" rating for professors instead of having a 5 star rating to prevent people to create a more natural percentage score

                
            </p>
            <div className = "my-4">
                <img className = "mx-auto" src= "https://via.placeholder.com/750"/>
            </div>


            <h3 className = "mt-12 mb-5 font-bold leading-none text-2xl md:text-3xl xl:text-4xl">Steering Behaviors</h3>
            <div className = "mb-5">
                <span className = "p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block">Interactive</span>
                <span className = "p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block">p5.js</span>
                <span className="p-2 m-2 rounded border-2 border-sky-400 font-semibold inline-block">Autonomous Agents</span>
            </div>
            <p className = "my-5 text-md md:text-lg xl:text-xl text-gray-400">A demonstration of using p5.js to render text as particles that react to the mouse. Demonstrating logic of steering behaviors for autonomous agents.</p>
            <div className = "my-4">
                <img className = "mx-auto" src= "https://via.placeholder.com/750"/>
            </div>

            <div className = "text-center my-8">
                <p className = " mb-4 text-gray-400 text-md md:text-lg xl:text-xl">These are just a small subset of the projects I've done. If you want to see more of my projects, check out my GitHub </p>
                <a href={ socials.github } target="_blank" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  border rounded-lg focus:ring-4  text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-5 h-5 mr-3"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg> View More Projects
                </a> 
            </div>
            
        </section>
            

    )
}

export default Projects;
