import React, { useEffect, useState } from 'react'
import leaf1 from '../assets/img/leaf-1.png';
import leaf2 from '../assets/img/leaf-2.png';
import headerLogo from '../assets/img/header-logo.png';
import { motion } from 'framer-motion';
import BasketModal from './BasketModal';
import Form from './registration/Form';
import { useSelector } from 'react-redux';
import NotificationBasket from './notification/NotificationBasket';



const dataCategory = [
    { href: "#home", catProps: 'home', catTitle: 'Home' },
    { href: "#about", catProps: 'about', catTitle: 'About' },
    { href: "#popular", catProps: 'popular', catTitle: 'Popular' },
    { href: "#review", catProps: 'review', catTitle: 'Review' },
    { href: "#registration", catProps: 'registration', catTitle: 'Registration' },
    { href: "#login", catProps: 'login', catTitle: 'Log-in' },
]

const Header = () => {
    const [active, setActive] = useState('home');

    const [openModal, setOpenModal] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const [modalType, setModalType] = useState(null);// 'registration' | 'login' | null
    const [hasScrolled, setHasScrolled] = useState(false);

    const cartItems = useSelector((state) => state.cart.items);

    useEffect(() => {
        const headerLine = () => {
            window.scrollY > 50 ? setHasScrolled(true) : setHasScrolled(false);
        };
        window.addEventListener('scroll', headerLine);

        return () => removeEventListener('scroll', headerLine);
    }, []);

    const handleClick = (section) => {
        setActive(section);
    };

    return (
        <header
            id='#navbar'
            className={`fixed bg-green-950
                        ${hasScrolled ? 'border-b-2 border-yellow-500' : ''} 
                        w-full top-0 left-0 z-50`}
        >
            <nav className='container flex items-center justify-between h-16 sm:h-20'>
                {/* NAV-LOGO */}
                <div className='flex items-center xl:border-2 xl:border-yellow-400 xl:rounded-full xl:px-3'>
                    <img src={headerLogo} alt="header-logo" className='w-12 h-12' />
                    <p className='font-Lobster text-yellow-500 sm:text-2xl'>
                        Plants .
                    </p>
                </div>
                

                {/* NAV-MENU */}
                <div id='nav-menu' className={`${openModal ? 'left-0' : '-left-[100%]'} 
                            absolute top-0 min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm 
                            flex items-center justify-center duration-300 overflow-hidden
                            lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}>
                    <ul className='flex flex-col items-center gap-5 lg:flex-row'>

                        {dataCategory.map((cat, i) => (
                            <li key={i}>
                                <a
                                    href={cat.href}
                                    onClick={() => {
                                        if (cat.catProps === 'registration') {
                                            setModalType('registration');
                                        } else if (cat.catProps === 'login') {
                                            setModalType('login');
                                        } else {
                                            handleClick(cat.catProps);
                                        }
                                        setOpenModal(false);
                                    }}
                                    className={`nav-link lg:text-sm xl:text-xl  ${active === (cat.catProps) ? 'active' : ''}`}
                                >
                                    {cat.catTitle}
                                </a>
                            </li>
                        ))}

                        {/* BASKET */}
                        <div
                            onClick={() => setShowCart(true)}
                            className='relative cursor-pointer'
                        >
                            <i className="ri-shopping-cart-line text-3xl hover:text-yellow-500"></i>

                            {cartItems.length > 0 && (
                                <span className="absolute -top-0 -right-0 bg-yellow-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center z-30">
                                    {cartItems.length}
                                </span>
                            )}

                        </div>
                    </ul>

                    {/* nav plants-img */}
                    <div className='absolute bottom-0 -right-10 opacity-90 lg:hidden'>
                        <img src={leaf1} className='w-32' alt="leaf-img" />
                    </div>

                    <div className='absolute -top-5 left-0 rotate-90 opacity-90 lg:hidden'>
                        <img src={leaf2} className='w-32' alt="leaf-img" />
                    </div>
                </div>

                {/* MODAL ICON(mobile responsive)*/}
                <div
                    onClick={() => setOpenModal(!openModal)}
                    className='text-xl sm:text-3xl cursor-pointer z-50 hover:text-yellow-500 duration-300 lg:hidden'
                >
                    <i className={openModal ? 'ri-close-large-line' : 'ri-menu-4-line'}></i>
                </div>
            </nav>


            {/* MODAL (REG... / LOG...) */}
            { modalType && <Form modalType={modalType} setModalType={setModalType} />}

            {/*  MODAL (BASKET) */}
            { showCart && <BasketModal setShowCart={setShowCart} setShowNotification={setShowNotification} />}

            {/* NOTIFICATION MODAL */}
            { showNotification && <NotificationBasket setShowNotification={setShowNotification} /> }
        </header>
    )
}

export default Header;
