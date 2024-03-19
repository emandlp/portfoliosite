// import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'

const Home = () => {
    // const [letterClass, setLetterClass] = useState('text-animate');
    // const nameArray = [' ', 'E', 'm', 'm', 'a', 'n', 'u', 'e', 'l'];

    // useEffect(() => {
    //     const timeoutId = setTimeout(() => {
    //         setLetterClass('text-animate-hover');
    //     }, 4000);

    //     // Cleanup function to clear the timeout
    //     return () => clearTimeout(timeoutId);
    // }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        {/* <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <br /> 
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span> */}

                        {/* <AnimatedLetters
                            letterClass={letterClass} 
                            strArray={nameArray}
                            idx={15}
                        /> */}

                        <br />
                        <h1>Hi</h1>
                        <h1>I'm Emmanuel</h1>
                        <h3> CS student @ Notre Dame</h3>
                    </h1>
                    <h2>Versed in Python, C, Shell, and git</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    );
}

export default Home;
