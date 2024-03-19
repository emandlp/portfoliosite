import './index.scss'
// import { useState, useEffect } from 'react'
import Loader from 'react-loaders'

const About = () => {

    return (
            <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    About me
                </h1>

                <p>
                    I'm Emmanuel De La Paz, a first-generation Hispanic/Latino college student from the Eustis, FL,
                     who is passionate about technology and diversity. I am currently a Computer Science student pursuing my 
                     Bachelor of Science degree at the University of Notre Dame from which I have developed a strong foundation 
                     in computer science principles and a deep love for technology innovation.
                </p>
                <p>
                    aa
                </p>
                <p>
                    I am eager to leverage my skills and experiences in a dynamic and innovative environment, 
                    contributing to meaningful projects and collaborating with like-minded professionals. I am 
                    particularly interested in software engineering and have a genuine passion for exploring emerging 
                    technologies.
                </p>
            </div>
        </div> 
        <Loader type="ball-pulse-sync" />
        </>
    )
}

export default About