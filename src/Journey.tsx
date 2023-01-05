import React from 'react'

function Journey() {
    return(
        <section className = "container mx-auto py-3 max-w-screen-xl">
            <h2 className = "mb-5 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl text-white text-center">My Journey</h2>
            <p className = "text-center text-gray-400 mb-12 text-xl">I am a founder, DevOps, and fullstack engineer. <br/>
            My core competitencies are <span className = "text-sky-400">Managing Engineering Teams</span>, DevOps (<span className= "text-sky-400"> Docker, AWS </span>), Backend (<span className= "text-sky-400">Rails, Flask, Django</span>) and Frontend (<span className= "text-sky-400">React</span>)</p>
            <div className = 'pl-2 mx-5 justify-center mx-auto'>

                <div className = "my-10 grid gap-4 grid-cols-5 mx-auto">
                    <div className= "col-span-0 md:col-span-1"> <img src={process.env.PUBLIC_URL + "medhyve logo.png"} className = "object-scale-down max-w-[100px] mx-auto hidden lg:block"/> </div>
                    <div className = "col-span-5 md:col-span-4">
                        <h3 className = "font-bold text-2xl md:text-3xl xl:text-4xl">CEO - MedHyve</h3>
                        <div><span className = "text-sky-400 font-light">July 2022 - Current </span></div>
                        <p className = "mb-3 text-gray-400">
                            MedHyve is a B2B e-commerce medical marketspace that connects hospitals
                            and clinics with medical suppliers
                        </p>
                        <ul className = "list-disc">
                            <li>Pitched and Raised over $500k in Funding from VCs and Angel Investors</li>
                            <li>Grew MRR by 70% and GMV by 50%</li>
                            <li>Launched projects for user retention and developed additional revenue streams.</li>
                            <li>Managed a team of 27 consisting of engineering, ops, sales, marketing, admin, etc.</li>
                            <li>Managed board members consisting of heads of top medical, pharma, and management consulting companies</li>
                            <li>Championed 3 Startup Pitch Competitions winning $20k and more in prizes (ARISE 2020, Seedstars Manila 2020, Merck Access to Health 2022)</li>
                        </ul>

                    </div>
                </div>

                <div className = "my-10 grid gap-4 grid-cols-5 mx-auto">
                    <div className= "col-span-0 md:col-span-1"> <img src={process.env.PUBLIC_URL + "medhyve logo.png"} className = "object-scale-down max-w-[100px] mx-auto hidden lg:block"/></div>
                    <div className = "col-span-5 md:col-span-4">
                        <h3 className = "font-bold text-2xl md:text-3xl xl:text-4xl">CTO - MedHyve</h3>
                        <div><span className = "text-sky-400 font-light">Dec 2017 - July 2022</span></div>
                        <p className = "mb-3 text-gray-400">
                            MedHyve is a B2B e-commerce medical marketspace that connects hospitals
                            and clinics with medical suppliers
                        </p>
                        <ul className = "list-disc">
                            <li>Gathered and researched on user needs, proposed an idea/system and
                                developed a B2B e-commerce platform from scratch using Ruby on
                                Rails and React and connected to various APIs such as PayPal,
                                Paymongo, Elasticsearch, etc.
                            </li>
                            <li>Led a 5-person engineering team, a 2-person product team, and
                                organized scrum sprint planning, estimation, and retrospective
                                meetings and acted as a scrum master and a product owner for the
                                team
                            </li>
                            <li>Dockerized the entire project with Redis, Elasticsearch, PostgresSQL
                                and deployed to AWS
                            </li>
                            <li>Handled the hiring and onboarding process for engg and product
                                teams
                            </li>
                            <li>Grew site conversions from 4%-&gt;8% and grew MAU from 1k-&gt;8k</li>
                        </ul>

                    </div>
                </div>

                <div className = "my-10 grid gap-4 grid-cols-5 mx-auto">
                    <div className= "col-span-0 md:col-span-1"><img src={process.env.PUBLIC_URL + "Funasia.png"} className = "object-scale-down max-w-[150px] mx-auto max-w-[100px] mx-auto hidden lg:block"/> </div>
                    <div className = "col-span-5 md:col-span-4">
                        <h3 className = "font-bold text-2xl md:text-3xl xl:text-4xl">Freelance Web & Mobile Dev - FunAsia</h3>
                        <div><span className = "text-sky-400 font-light">Nov 2018 - Jan 2021</span></div>
                        <p className = "mb-3 text-gray-400">Funasia is a software dev company that takes clients from various industries</p>
                        <ul className = "list-disc">
                            <li>Developed a social media app for priests and archdioceses in parishes
                                and dioceses in the Philippines with React Native & Firebase
                            </li>
                            <li>Developed a contest registration app with Ruby on Rails and MySQL.
                                And deployed it to Google Cloud
                            </li>
                            <li>Developed an insurance registration application with Ruby on Rails and
                                PostgresSQL</li>
                        </ul>

                    </div>
                </div>

                <div className = "my-10 grid gap-4 grid-cols-5 mx-auto">
                    <div className= "col-span-0 md:col-span-1"><img src={process.env.PUBLIC_URL + "sali logo.png"} className = "object-scale-down max-w-[100px] mx-auto hidden lg:block"/> </div>
                    <div className = "col-span-5 md:col-span-4">
                        <h3 className = "font-bold text-2xl md:text-3xl xl:text-4xl">Freelance Mobile Dev - Sali</h3>
                        <div><span className = "text-sky-400 font-light">Aug 2017 - Feb 2018 </span></div>
                        <p className = "mb-3 text-gray-400">Sali is an app that aims to teach users how to perform basic medical procedures such as CPR through the phone’s gyroscope and accelerometer</p>
                        <ul className = "list-disc">
                            <li>Created a React Native app with Firebase and created a system for watching
videos, tracking lesson progress, and user registration</li>
                        </ul>

                    </div>
                </div>

                <div className = "my-10 grid gap-4 grid-cols-5 mx-auto">
                    <div className= "col-span-0 md:col-span-1"> <img src={process.env.PUBLIC_URL + "UP.png"} className = "object-scale-down max-w-[100px] mx-auto hidden lg:block"/> </div>
                    <div className = "col-span-5 md:col-span-4">
                        <h3 className = "font-bold text-2xl md:text-3xl xl:text-4xl">BS Computer Science - University of the Philippines Diliman</h3>
                        <div><span className = "text-sky-400 font-light">Aug 2017 - Dec 2019</span></div>
                        <p className = "mb-3">UP Diliman is one of the top universities in the Philippines. <br/> I took BS Computer Science but I never really felt challenged by the curriculum so I spent most of my time attended hackathons and doing freelance projects. I dropped out during my sophomore year so I could pursue MedHyve full time.</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Journey
