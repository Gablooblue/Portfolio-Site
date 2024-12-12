import React from 'react'

function Journey() {
    return(
        <section className = "container mx-auto py-3 max-w-screen-xl px-4">
            <h2 className = "mb-5 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl text-white text-center">My Journey</h2>
            <p className = "text-center text-gray-400 mb-12 text-xl">I am a founder, DevOps, and fullstack engineer. <br/>
            My core competitencies are <span className = "text-sky-400">Managing Engineering Teams</span>, DevOps/MLOps (<span className= "text-sky-400"> Docker, AWS </span>), FullStack (<span className= "text-sky-400">Rails, Flask, Django</span>) and AI (<span className= "text-sky-400">Generative AI, Machine Learning</span>)</p>
            <div className = 'pl-2 mx-5 justify-center mx-auto'>

                <div className = "my-10 grid gap-4 grid-cols-5 mx-auto">
                    <div className= "col-span-0 md:col-span-1"> <img src={process.env.PUBLIC_URL + "clout-logo.jpeg"} className = "object-scale-down max-w-[100px] mx-auto hidden lg:block"/> </div>
                    <div className = "col-span-5 md:col-span-4">
                        <h3 className = "font-bold text-2xl md:text-3xl xl:text-4xl">Co-Founder / CTO - Clout Kitchen</h3>
                        <div><span className = "text-sky-400 font-light">Jan 2024 - Current </span></div>
                        <p className = "mb-3 text-gray-400">
                            Backseat AI turns your favorite streamers like Tyler1 and Emiru  into real-time AI gaming buddies
                        </p>
                        <ul className = "list-disc">
                            <li>Architected and scaled MLOps infrastructure on AWS and GCP that could handle 1000+ inference requests per second and 20,000 concurrent users</li>
                            <li>Engineered a real-time chatbot leveraging Mistral and Gemini models to analyze in-game data to  actionable coaching insights that enhanced player performance</li>
                            <li>Built multi-agent LLM with RAG that made inference 96% cheaper and 54% faster</li>
                            <li>Recruited and led a multidisciplinary team of 10 AI, App  and Cloud Engineers, spearheading the development of scalable LLM/Machine Learning models and desktop applications</li>
                            <li>Provided technical due diligence and roadmap insights during fundraising, securing $4.5M in funding from Andreesen Horowitz, Peak XV, AppWorks  etc</li>
                            <li>Built predictive financial models to estimate costs per user, incorporating infrastructure expenses, server scaling patterns, and usage trends to support accurate cost forecasting and pricing strategies. Reduced cost-per-user by 60%</li>
                        </ul>

                    </div>
                </div>

                <div className = "my-10 grid gap-4 grid-cols-5 mx-auto">
                    <div className= "col-span-0 md:col-span-1"> <img src={process.env.PUBLIC_URL + "g2-logo.png"} className = "object-scale-down max-w-[100px] mx-auto hidden lg:block"/> </div>
                    <div className = "col-span-5 md:col-span-4">
                        <h3 className = "font-bold text-2xl md:text-3xl xl:text-4xl">Senior Software Engineer, AI Special Projects - G2</h3>
                        <div><span className = "text-sky-400 font-light">Mar 2023 - July 2024</span></div>
                        <p className = "mb-3 text-gray-400">
                            G2 is a peer-to-peer platform offering user-generated reviews for software and services
                        </p>
                        <ul className = "list-disc">
                            <li>Develop, manage, and maintain a Business Intelligence dashboard using Ruby on Rails</li>
                            <li>Engineered an advanced OpenAI chatbot, integrating OpenAI's vector embeddings with Pinecone for enhanced data indexing, and implemented a Python script to condense qualitative data, boosting performance and cost-efficiency.</li>
                            <li>Developed a Python data pipeline cron job for data processing and distribution of database data and calculated  analytics to S3, SFTP and  Snowflake.</li>
                            <li>Optimized the app by refactoring code into ViewComponents and transitioning database calls to Elasticsearch, achieving a remarkable improvement in page load time from 5s  to  2s.</li>
                            <li>Refactored heavy ChartJS components to Lazy Load with Turbo & Stimulus to reduce First Contentful Paint time  by 45%</li>
                        </ul>

                    </div>
                </div>

                <div className = "my-10 grid gap-4 grid-cols-5 mx-auto">
                    <div className= "col-span-0 md:col-span-1"> <img src={process.env.PUBLIC_URL + "medhyve logo.png"} className = "object-scale-down max-w-[100px] mx-auto hidden lg:block"/></div>
                    <div className = "col-span-5 md:col-span-4">
                        <h3 className = "font-bold text-2xl md:text-3xl xl:text-4xl">Co-Founder / CEO - MedHyve (Acquired)</h3>
                        <div><span className = "text-sky-400 font-light">July 2022 - Feb 2023</span></div>
                        <p className = "mb-3 text-gray-400">
                            MedHyve is a B2B e-commerce medical marketspace that connects hospitals
                            and clinics with medical suppliers
                        </p>
                        <ul className = "list-disc">
                          <li>Acquired in 2023 by Pulse63 Healthcare Ventures</li>
                          <li>Created pitches that raised over $500k in Funding from VCs and Angel Investors</li>
                          <li>Managed a team of 27 consisting of engineering, ops, sales, marketing, admin</li>
                          <li>Launched commission and trade financing revenue models in collaboration with biz dev and legal teams that grew MRR by 70% and GMV by 50%</li>
                          <li>Launched projects including reorder promos, reward points,  and various other incentives to improve user retention and a grew retention from 1% to 8%/mo</li>
                          <li>Worked with BCG to develop business financials and projections for our seed raise.</li>
                          <li>Pitched and championed 3 Startup Pitch Competitions winning $20k and more in prizes (ARISE 2020, Seedstars Manila 2020, Merck Access to Health 2022)</li>
                        </ul>

                    </div>
                </div>

                <div className = "my-10 grid gap-4 grid-cols-5 mx-auto">
                    <div className= "col-span-0 md:col-span-1"> <img src={process.env.PUBLIC_URL + "medhyve logo.png"} className = "object-scale-down max-w-[100px] mx-auto hidden lg:block"/></div>
                    <div className = "col-span-5 md:col-span-4">
                        <h3 className = "font-bold text-2xl md:text-3xl xl:text-4xl">Co-Founder / CTO - MedHyve (Acquired)</h3>
                        <div><span className = "text-sky-400 font-light">Dec 2017 - July 2022</span></div>
                        <p className = "mb-3 text-gray-400">
                            MedHyve is a B2B e-commerce medical marketspace that connects hospitals
                            and clinics with medical suppliers
                        </p>
                        <ul className = "list-disc">
                          <li>Developed a B2B e-commerce platform using Ruby on Rails and React and connected to APIs such as PayPal, 3PL, Elasticsearch, etc. and grew it to 2000 MAU & 200k GMV</li>
                          <li>Managed an 8-person product and engg team and acted as a scrum master and  product owner</li>
                          <li>Engineered an AI hybrid product recommendation model that improved conversion by 40%</li>
                          <li>Led the migrating and scaling of our RoR app by converting it into React NextJS frontend with a Rails API + Redis. Reducing avg page load time from 10s to 2s</li>
                          <li>Improved developer productivity by dockerizing the project, implementing Gitlab CI/CD, and deploying staging and dev env. This improved sprint velocity by 23%</li>
                          <li>Deployed project to AWS ECS, S3, RDS, and Vercel and optimized setup to reduce deployment and testing time from 20 mins to 8 mins.</li>
                          <li>Created pitches that raised over $500k in Funding from VCs and Angel Investors</li>
                          <li>Built 80% test coverage with Rspec and Jest. Led the team through our transition to being TDD.  Reducing user failure rate from 20% to 5%</li>
                          <li>Launched landing pages, integrated analytics for targetted mktg campaigns, and revamped user flows. Growing conversions from 4% to 8% and MAU from 1k to 8k</li>
                        </ul>

                    </div>
                </div>

                <div className = "my-10 grid gap-4 grid-cols-5 mx-auto">
                    <div className= "col-span-0 md:col-span-1"><img src={process.env.PUBLIC_URL + "Funasia.png"} className = "object-scale-down max-w-[150px] mx-auto max-w-[100px] mx-auto hidden lg:block"/> </div>
                    <div className = "col-span-5 md:col-span-4">
                        <h3 className = "font-bold text-2xl md:text-3xl xl:text-4xl">Software Engineer - FunAsia</h3>
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
                        <h3 className = "font-bold text-2xl md:text-3xl xl:text-4xl">Mobile Developer - Sali</h3>
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
