import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
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
                    During my academic journey, I had the opportunity to delve into the world of computer science research 
                    as a Research Intern at the CSE Enrichment Program. Collaborating closely with Professor Joanna Silvia, 
                    I contributed significantly to the development of a Named Entity Recognition (NER) model, showcasing my 
                    proficiency in Python. My ability to analyze complex problems and craft innovative solutions is at the core 
                    of my approach to technology.
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