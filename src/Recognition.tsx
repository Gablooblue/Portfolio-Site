import React from 'react'

function Recognition() {
    return (
        
        <section className = "bg-slate-300">
            <div className = "container mx-auto py-8">
            <h2 className = "mb-5 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl text-white text-center">Recognition</h2>
            <div className = "grid grid-cols-2 my-10">
                <div className = "col-md-1">
                    <div className = "my-4">
                        <img className = "mx-auto" src= "https://via.placeholder.com/750"/>
                    </div>
                </div>

                <div className = "col-md-1 bg-sky-400 p-12">
                    <h5 className = "text-lg md:text-xl xl:text-2xl font-medium pb-2">Honors & Awards</h5>
                    <div className="table table-auto w-full font-light">
                        
                        <div className = "table-row-group text-md md:text-lg xl:text-xl">
                            <a href = "#" className = "border-t pb-2 table-row hover:bg-sky-500">
                                <div className = "px-3 py-2 table-cell">2022</div>
                                <div className = "px-3 py-2 table-cell">Merck Access To Health Pitch Competition</div>
                                <div className = "px-3 py-2 table-cell">Champion</div>
                            </a > 
                            <a href = "# "className = "border-t pb-2 table-row">
                                <div className = "px-3 py-2 table-cell">2020</div>
                                <div className = "px-3 py-2 table-cell">ARISE Startup Pitch Challenge</div>
                                <div className = "px-3 py-2 table-cell">Champion</div>
                            </a>
                            <a href = "# " className = "border-t pb-2 table-row">
                                <div className = "px-3 py-2 table-cell">2020</div> 
                                <div className = "px-3 py-2 table-cell">Seedstars Manila Competition</div>
                                <div className = "px-3 py-2 table-cell">Champion</div>
                            </a>
                            <a href = "# " className = "border-t pb-2 table-row">
                                <div className = "px-3 py-2 table-cell">2019</div>
                                <div className = "px-3 py-2 table-cell">Techtonic Most innovative Startup</div>
                                <div className = "px-3 py-2 table-cell">2nd Place</div>
                            </a>
                            <a href = "# " className = "border-t pb-2 table-row">
                                <div className = "px-3 py-2 table-cell">2018</div>
                                <div className = "px-3 py-2 table-cell">
                                AIM DeTechTive Hackathon
                                </div>
                                <div className = "px-3 py-2 table-cell">3rd Place</div>
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
