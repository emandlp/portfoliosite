import './index.scss';
import Loader from 'react-loaders';
// import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef } from 'react';
import emailjs from 'emailjs-com'; // Change the import to use emailjs-com instead of @emailjs/browser

const Contact = () => {
    // const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    // useEffect(() => {
    //     const timeoutId = setTimeout(() => {
    //         setLetterClass('text-animate-hover');
    //     }, 3000);

    //     return () => clearTimeout(timeoutId);
    // }, []);

    useEffect(() => {
        // Bind the submit event to the form after component mounts
        const currentRefForm = refForm.current;
        if (currentRefForm) {
            currentRefForm.addEventListener('submit', sendEmail);
        }
        // Cleanup function to remove event listener when component unmounts
        return () => {
            if (currentRefForm) {
                currentRefForm.removeEventListener('submit', sendEmail);
            }
        };
    }, []); // Empty dependency array to run effect only once
    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0tud7c4', 'template_zys1c3n', e.target, '_mvVi98LH21tgLtxc')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                alert('Email sent successfully'); // Notify user about successful email sending
                e.target.reset(); // Reset form fields after successful submission
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
                alert('Email sending failed'); // Notify user about email sending failure
            });
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        Contact me
                    </h1>

                    <p>If you have any requests or questions, feel free to contact me using the form below</p>
                    <p>or send me an email at <a href="mailto:edelapaz@nd.edu" className="email-link">edelapaz@nd.edu</a></p>
                    <div className="contact-form">
                        <form ref={refForm}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="Send" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    );
};

export default Contact;
