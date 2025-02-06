import React from 'react'
import socials from "../assets/socials"
import { motion } from 'framer-motion'

function Contact() {
    return(
        <section className="py-16 text-center container mx-auto max-w-screen-xl px-4" id="contact">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Let's Connect
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Feel free to reach out through any of these channels. I'm always open to discussing new opportunities and ideas.
                </p>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-3 max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <a href={`mailto:${socials.email}`} 
                        className="group flex flex-col items-center p-6 bg-slate-800/30 rounded-2xl hover:bg-slate-800/50 transition-all duration-300"
                    >
                        <div className="p-4 bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-purple-500/10 rounded-xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-sky-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Email</h3>
                        <p className="text-gray-400 text-sm group-hover:text-sky-400 transition-colors">Send me a message</p>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <a href={socials.twitter} target="_blank" rel="noopener noreferrer"
                        className="group flex flex-col items-center p-6 bg-slate-800/30 rounded-2xl hover:bg-slate-800/50 transition-all duration-300"
                    >
                        <div className="p-4 bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-purple-500/10 rounded-xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 h-8 text-sky-400">
                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Twitter</h3>
                        <p className="text-gray-400 text-sm group-hover:text-sky-400 transition-colors">DM me on Twitter</p>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"
                        className="group flex flex-col items-center p-6 bg-slate-800/30 rounded-2xl hover:bg-slate-800/50 transition-all duration-300"
                    >
                        <div className="p-4 bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-purple-500/10 rounded-xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8 text-sky-400">
                                <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                        <p className="text-gray-400 text-sm group-hover:text-sky-400 transition-colors">Connect with me</p>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
