import React from 'react'
import homeImg from '../assets/img/home.png';
import { motion } from 'framer-motion';


const Home = () => {
    return (
        <section id='home' className='relative'>
            <div className='container'>
                {/* blob 1 */}
                <div className='w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                </div>
                {/* blob 2 */}
                <div className='w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute right-0 bottom-0'>
                </div>


                <div className='flex flex-col items-center gap-5 lg:flex-row'>
                    {/* HOME-CONTENT */}
                    <motion.div 
                        className='w-full space-y-5 lg:w-1/2'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        {/* HOME-TITLE & DESCR*/}
                        <h1>
                            <span className="text-yellow-500">Plants</span> make a <br/> positive 
                            <span className="text-yellow-500"> impact</span> on <br/> your environment
                        </h1>

                        <p className='text-slate-300 font-Lobster'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio fugiat eveniet, reprehenderit veritatis aut explicabo voluptatum ullam itaque tenetur numquam!
                        </p>

                        {/* HOME BUTTON-GROUP */}
                        <div className='flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-5 xl:pt-10'>
                            <a href="#popular" className='btn'>
                                <span>Shop Now</span>
                                <i className='ri-leaf-line'></i>
                            </a>

                            <a href='#about' className='btn btn_outline'>
                                <span>Know More</span>
                                <i className="ri-leaf-line"></i>
                            </a>
                        </div>

                        <p className='text-xs font-Lobster text-slate-300'>You will get 30-days free trial.</p>

                        <div className='flex items-center gap-5 text-lg lg:pt-10'>
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
                    </motion.div>

                    {/* HOME_IMAGE */}
                    <motion.div 
                        className='w-full relative lg:w-1/2'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <img src={homeImg} alt="home-img" />

                        {/* leaf */}
                        <div className='absolute -top-10 right-0 opacity-30 xl:top-5 animate-movingY'>
                            <i className="ri-leaf-line text-6xl text-yellow-500"></i>
                        </div>
                        {/* flower */}
                        <div className='absolute bottom-0 left-0 opacity-30 xl:bottom-12 animate-rotating'>
                            <i className="ri-flower-line text-6xl text-yellow-500"></i>
                        </div>
                        {/* plant */}
                        <div className='hidden absolute -top-8 -left-5 opacity-30 lg:block animate-scalingUp'>
                            <i className="ri-plant-line text-6xl text-yellow-500"></i>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Home;
