import React from 'react';
import SocialLinks from '../components/SocialLinks'
import { motion } from 'framer-motion'

function Hero() {
    return (
        <section className="relative flex min-h-screen overflow-hidden">
            <div className="relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                            Hi I'm <motion.span 
                                className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                Gab Lopez
                            </motion.span>
                        </h1>
                    </motion.div>

                    <motion.p 
                        className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        I'm a futurist, an engineer, and an entrepreneur <br/> 
                        Dedicated to building world-changing tech, creating world-class teams, and developing strong business models
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <SocialLinks />
                        <motion.a 
                            href="#contact" 
                            className="inline-flex items-center justify-center px-6 py-3 mt-4 text-base font-medium text-white bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 rounded-lg hover:from-sky-600 hover:via-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>
                </div>

                <motion.div 
                    className="hidden lg:mt-0 lg:col-span-5 lg:flex"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <div className="relative">
                        {/* Add your image here */}
                        {/* <img className="relative z-10 object-cover rounded-lg shadow-2xl" src={process.env.PUBLIC_URL + "Gab.png"} alt="Gab Lopez" /> */}
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-purple-500/20 rounded-lg blur-md" />
                        <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-purple-500/20 rounded-lg blur-md" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero;
