import React from 'react';
import SocialLinks from './SocialLinks'

function Hero() {
    return(
        <section className="flex h-screen bg-slate-900">
            <div className="grid max-w-screen-xl px-4 py-8 m-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Hi I'm <span className='text-sky-400'>Gab Lopez</span></h1>
                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">I'm a futurist, an engineer, and an entrepreneur <br/> Dedicated to building world-changing tech, creating world-class teams, and developing strong business models</p>
                    <SocialLinks />
                    <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  border rounded-lg focus:ring-4  text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
                        Contact Me  
                    </a> 
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
                </div>                
            </div>
        </section>
    )
}

export default Hero;
