import React from 'react'
import plant1 from '../assets/img/plant-1.png'
import plant2 from '../assets/img/plant-2.png'
import leaf3 from '../assets/img/leaf-3.png'
import { dataBigPlants } from '../data/dataBigPlants'
import { motion } from 'framer-motion'

const AboutUs = () => {

    return (
        <section id='about' className='relative overflow-hidden'>
            <div className='absolute -top-8 -right-12 opacity-50'>
                <img src={leaf3} alt="leaf_img" className='w-48 md:w-64 xl:w-96' />
            </div>

            <div className='flex flex-col items-center gap-3 text-center mb-10 md:mb-20'>
                <h2 className='title'>About Us</h2>
                <p className='max-w-2xl'>Follow instruction for more</p>
            </div>

            <div className='container space-y-10 xl:space-y-0'> 
                
                {dataBigPlants.map((item, index) => {
                    const variantsFromLeft = {
                        hidden: { opacity: 0, x: -100 }, 
                        visible: { opacity: 1, x: 0 }, 
                    };
                    const variantsFromRight = {
                        hidden: { opacity: 0, x: 100 },  
                        visible: { opacity: 1, x: 0 }, 
                    };
                    const layoutClass = item.reverseLayout ? 'lg:flex-row-reverse' : 'lg:flex-row';
                    const currentVariants = index % 2 === 0 ? variantsFromLeft : variantsFromRight;

                    return (
                        <motion.div 
                            key={index} 
                            className={`flex flex-col items-center ${layoutClass} gap-5`}
                            initial="hidden"
                            whileInView="visible" // Анімуємо, коли елемент з'являється у viewport
                            viewport={{ once: true, amount: 0.1 }} // Анімуємо один раз, коли 30% елемента видно
                            transition={{ duration: 0.8 }} // Тривалість анімації 0.8 секунди
                            variants={currentVariants}
                        >
                            {/* image */}
                            <div className='w-full lg:w-1/2'>
                                <img src={item.logo} alt="about-img" className='w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto' />
                            </div>

                            {/* content */}
                            <div className='w-full lg:w-1/2'>
                                <div className='space-y-5'>
                                <h3>
                                    {item.titlePart1}
                                    {item.logo === plant2 && <br />}
                                    <span className="text-yellow-500">{item.centralPart}</span>
                                    {item.logo === plant1 && <br />}
                                    {item.titlePart2}
                                </h3>
                                    <p className='text-slate-300 font-Lobster'>{item.descr}</p>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}

            </div>
        </section>
    )
}

export default AboutUs;
