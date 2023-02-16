import React from 'react'
import recogPhotos from '../assets/recog-photos.js'

function Recognition() {
    return (

        <section className = "">
            <div className = "container mx-auto py-8">
                <h2 className = "mb-5 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl text-white text-center">Recognition</h2>
                <div className = "grid grid-cols-2 my-10 bg-slate-800">
                    <div className = "col-span-2 md:col-span-1">
                        <div className = "my-4">
                            <div className = "flex flex-wrap mx-auto justify-center">
                                {recogPhotos.map( (e) => (
                                    <div className = "w-1/2 md:w-1/3 p-1">
                                        <img className="block object-scale-down w-full h-auto " src= { process.env.PUBLIC_URL + e} />
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className = "col-span-2 md:col-span-1 my-4 bg-slate-800 p-12">
                        <h5 className = "text-lg md:text-xl xl:text-2xl font-medium pb-2">Honors & Awards</h5>
                        <div className="table table-auto w-full font-light mb-12">

                            <div className = "table-row-group text-md md:text-lg xl:text-xl">
                                <a href = "https://www.merckgroup.com/en/sustainability/health-for-all/access-to-health/health-pitch-competition.html" className = "border-t pb-2 table-row hover:bg-slate-700" target="_blank">
                                    <div className = "px-3 py-2 table-cell">2022</div>
                                    <div className = "px-3 py-2 table-cell">Merck Access To Health Pitch Competition</div>
                                    <div className = "px-3 py-2 table-cell">Champion</div>
                                </a > 
                                <a href = "https://www.esquiremag.ph/money/industry/arise-startup-pitch-challenge-2020-winners-a00289-20201125"className = "border-t pb-2 table-row hover:bg-slate-700" target="_blank">
                                    <div className = "px-3 py-2 table-cell">2020</div>
                                    <div className = "px-3 py-2 table-cell">ARISE Startup Pitch Challenge</div>
                                    <div className = "px-3 py-2 table-cell">Champion</div>
                                </a>
                                <a href = "https://www.rappler.com/technology/innovations/medical-marketplace-startup-medhyve-represent-philippines-seedstars-world-2020/" className = "border-t pb-2 table-row hover:bg-slate-700" target="_blank">
                                    <div className = "px-3 py-2 table-cell">2020</div> 
                                    <div className = "px-3 py-2 table-cell">Seedstars Manila Competition</div>
                                    <div className = "px-3 py-2 table-cell">Champion</div>
                                </a>
                                <a href = "https://www.facebook.com/TechtonicSummit/posts/pfbid02qjsXnd6MJ9bDh1KaQuugqFjkQmREudgebmBMUAVqhXUTvoBbwbHBoeBUbZm5z5dLl" className = "border-t pb-2 table-row hover:bg-slate-700" target="_blank">
                                    <div className = "px-3 py-2 table-cell">2019</div>
                                    <div className = "px-3 py-2 table-cell">Techtonic Most innovative Startup</div>
                                    <div className = "px-3 py-2 table-cell">2nd Place</div>
                                </a>
                                <a href = "https://www.facebook.com/photo/?fbid=10155409844716547&set=pcb.10155409611911547" className = "border-t pb-2 table-row hover:bg-slate-700" target="_blank">
                                    <div className = "px-3 py-2 table-cell">2018</div>
                                    <div className = "px-3 py-2 table-cell">
                                        AIM DeTechTive Hackathon
                                    </div>
                                    <div className = "px-3 py-2 table-cell">3rd Place</div>
                                </a>
                            </div>
                            </div>
                            <h5 className = "text-lg md:text-xl xl:text-2xl font-medium pb-2">Features</h5>
                            <div className="table table-auto w-full font-light">

                                <div className = "table-row-group text-md md:text-lg xl:text-xl">
                                    <a href = "https://asiatechpodcast.com/2022/08/10/ep-223-gabriel-lopez-co-founder-and-cto-at-medhyve-we-were-eventually-able-to-let-the-platform-speak-for-itself/ "className = "border-t pb-2 table-row hover:bg-slate-700">
                                        <div className = "px-3 py-2 table-cell">2022</div>
                                        <div className = "px-3 py-2 table-cell">Asia Tech Podcast - Gabriel Lopez at MedHyve</div>
                                    </a>
                                    <a href = "https://www.hustleshare.com/episodes/interview-nigelliriogabriellopez-medhyve" className = "border-t pb-2 table-row hover:bg-slate-700">
                                        <div className = "px-3 py-2 table-cell">2022</div>
                                        <div className = "px-3 py-2 table-cell">Hustleshare - The Hustle Behind MedHyve</div>
                                    </a > 
                                    <a href = "https://e27.co/medhyve-raises-pre-seed-round-pegasus-tech-ventures-foxmont-20220131/" className = "border-t pb-2 table-row hover:bg-slate-700">
                                        <div className = "px-3 py-2 table-cell">2022</div>
                                        <div className = "px-3 py-2 table-cell">e27: MedHyve Raises Pre-Seed Round to make medical procurement easy for small hospitals</div>
                                    </a>
                                    <a href = "https://www.rappler.com/technology/innovations/medical-marketplace-startup-medhyve-represent-philippines-seedstars-world-2020/ " className = "border-t pb-2 table-row hover:bg-slate-700">
                                        <div className = "px-3 py-2 table-cell">2020</div>
                                        <div className = "px-3 py-2 table-cell">Rappler: Medical marketplace startup MedHyve to represent PH in global competition
                                        </div>
                                    </a>
                                    <a href = "https://www.techshake.asia/stories/founder-spotlight-gabriel-lopez-of-medhyve-the-most-efficient-way-to-get-your-medical-product-needs" className = "border-t pb-2 table-row hover:bg-slate-700">
                                        <div className = "px-3 py-2 table-cell">2019</div> 
                                        <div className = "px-3 py-2 table-cell">Techshake Founder Spotlight: Gabriel Lopez of MedHyve</div>
                                    </a>
                                </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Recognition
