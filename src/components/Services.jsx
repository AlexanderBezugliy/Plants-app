import React from 'react'
import { dataCarts } from '../data/dataCarts';
import { motion } from 'framer-motion';

const Services = () => {

    return (
        <section className='bg-white text-green-900 py-20'>
            <motion.div 
                className='container w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1,
                        },
                    },
                }}
                initial="hidden"            
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                
            >
                {/* Carts */}
                {dataCarts.map((item, index) => {
                    return (
                        <motion.div 
                            key={index} 
                            className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5'
                            variants={{
                                hidden: { opacity: 0, x: -50 }, 
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <div className='flex items-center gap-5'>
                                <i className={`${item.logo} text-3xl md:text-4xl xl:text-5xl`}></i>
                                <p className='md:text-lg font-bold'>{item.title}</p>
                            </div>

                            <p className='font-Lobster'>{item.descr}</p>
                        </motion.div>
                    )
                })}
            </motion.div>
        </section>
    )
}

export default Services;
