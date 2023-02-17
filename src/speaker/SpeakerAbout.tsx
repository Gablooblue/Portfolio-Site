import React from 'react'
import {PhotoProvider, PhotoView} from "react-photo-view"
import 'react-photo-view/dist/react-photo-view.css';


function SpeakerAbout() {
    return(
        <section className = "container mx-auto py-3 max-w-screen-xl px-4">
            <h2 className = "mb-5 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl text-white">About Me</h2>
            <p className = "mb-3 text-gray-300 font-light md:text-lg lg:text-sl">
                Gabriel Henry Lopez is the co-founder and CEO of MedHyve, an international award-winning startup that's simplifying medical procurement for provincial hospitals.
            </p>
            <p className = "mb-3 text-gray-300 font-light md:text-lg lg:text-sl">

                He's a former student partner at Microsoft and a CS Dropout from UP Diliman that started as a freelance developer when he was 16. He co-founded MedHyve when he was 17.
            </p>
            <p className = "mb-3 text-gray-300 font-light md:text-lg lg:text-sl">
                As an avid speaker, Gab has championed multiple international pitch competitions including Seedstars Manila 2020, ARISE 2020, Merck Access to Health 2021, and more. He has given talks for startup and university events nationwide, judged numerous hackathons, and mentored young founders across the country
            </p>
            <div>
                <h4 className = "mt-12 mb-5 font-bold leading-none text-xl md:text-2xl xl:text-3xl">Photos</h4>
                <PhotoProvider>
                    <PhotoView src="Gab.JPG">
                        <img src="/Gab.JPG" alt="Gab Standing Photo" className="w-24 md:w-32 l:w-56 xl:w-60 mx-2 inline cursor-pointer" />
                    </PhotoView>
                    <PhotoView src="Gab Sitting.JPG">
                        <img src="/Gab Sitting.JPG" alt="Gab Sitting Photo" className="w-24 md:w-32 l:w-56 xl:w-60 mx-2 inline cursor-pointer" />
                    </PhotoView>
                </PhotoProvider>
            </div>
        </section>

    )

}

export default SpeakerAbout
