import React, { useEffect, useState } from 'react'
import footerImg from '../assets/img/floral-1.png';
import { dataFooter } from '../data/dataFooter';
import NotificationEmail from './notification/NotificationEmail';


const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showNotificationEmail, setShowNotificationEmail] = useState(false);
    const [email, setEmail] = useState("");

    useEffect(() => {
        const toggleVisibility = () => {
            window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
        };
        window.addEventListener('scroll', toggleVisibility);
        
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === "") return;
        setShowNotificationEmail(true);
        setEmail('');
    };

    return (
        <footer className='bg-yellow-100 text-green-950 pt-20 pb-10 mb:pt-28 relative'>
            {/* NEWSLETTER */}
            <div className='container w-2/3 text-white absolute top-0 right-0 left-0 -translate-y-1/2'>
                <div className='bg-green-900 px-10 pt-5 pb-10 space-y-5 rounded-md'>
                    <h3>
                        <span className="text-yellow-500">Subscribe</span> to our newsletter
                    </h3>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className='flex flex-col md:flex-row gap-1'>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Your Email Address'
                            className='w-full px-5 py-3 text-green-900 rounded-md outline-none'
                        />
                        <button
                            type="submit"
                            className='flex items-center justify-center gap-1 bg-green-950 px-5 py-3 rounded-md hover:opacity-60 duration-300 text-white'
                        >
                            <span>Subscribe</span>
                            <i className='ri-send-plane-2-fill'></i>
                        </button>
                    </form>
                </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className='container mt-16 mb-10'>
                <div className='border-b border-green-500 relative'>
                    <div className='absolute top-0 transform -translate-y-1/2 left-0 right-0 max-w-36 mx-auto'>
                        <div className='bg-yellow-100 text-lg text-center space-x-3'>
                            <a 
                                href="https://t.me/bright_sunset_92" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-yellow-500 duration-300 cursor-pointer" 
                            >
                                <i className="ri-telegram-line"></i>
                            </a>
                            <a 
                                href="https://www.instagram.com/bright_sunset_92/"
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-yellow-500 duration-300 cursor-pointer" 
                            >
                                <i className="ri-instagram-line hover:text-yellow-500 duration-300 cursor-pointer"></i>
                            </a>
                            <a 
                                href="https://github.com/AlexanderBezugliy"
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-yellow-500 duration-300 cursor-pointer" 
                            >
                                <i className="ri-github-fill hover:text-yellow-500 duration-300 cursor-pointer"></i>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/alexander-bezugliy/"
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-yellow-500 duration-300 cursor-pointer"
                            >
                                <i className="ri-linkedin-fill hover:text-yellow-500 duration-300 cursor-pointer"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start'>
                {/* logo */}
                <div className='text-7xl text-green-700 text-center inline-block'> 
                    <div>
                        <i className="ri-leaf-fill"></i>
                        <p className='font-Lobster text-xl sm:text-2xl'>Plants .</p>
                    </div>
                </div>

                {/* links */}
                {dataFooter.map((item) => (
                    <div key={item.id}>
                        <p className='mb-5 font-bold text-xl'>{item.title}</p>
                        <div className='flex flex-col gap-1'>
                            {item.links.map((link, i) => (
                                <a key={i} href={item.href[i]}>{link}</a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* footer-img */}
            <div className='absolute bottom-0 left-0 opacity-40 pointer-events-none'>
                <img src={footerImg} alt="footer_img" className='w-full lg:w-1/2' />
            </div>

            {/* SCROLL UP */}
            <a 
                id='scroll-up'
                href="#" 
                alt="scroll-up" 
                className={`fixed right-4 ${isVisible ? 'bottom-6' : '-bottom-1/2'} bg-yellow-500 shadow-sm inline-block px-3 py-1 md:px-4 md:py-2 rounded-md text-lg z-50 hover:-translate-y-1 duration-300`}
            >
                <i className="ri-arrow-up-line"></i>
            </a>


            {showNotificationEmail && <NotificationEmail setShowNotificationEmail={setShowNotificationEmail} />}
        </footer>
    )
}

export default Footer;
