import React from 'react'
import leafLeft from '../assets/img/leaf-4.png';
import { dataReviews } from '../data/dataReviews';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';


const Reviev = () => {
    return (
        <section id='review' className='relative mb-20 md:mb-28 overflow-hidden'>
            {/* leaf  */}
            <div className='absolute -top-8 -left-12 opacity-50'>
                <img src={leafLeft} alt="leaf_image" className='w-48 md:w-64 xl:w-96' />
            </div>
            <div className='absolute top-8 -right-3 opacity-50 rotate-90'>
                <img src={leafLeft} alt="leaf_image" className='w-48 md:w-64 xl:w-96' />
            </div>

            <div className='flex flex-col items-center gap-3 text-center mb-10 md:mb-20'>
                <h2 className='title'>Customer Review</h2>
                <p className='max-w-2xl'>Follow instruction for more</p>
            </div>

            <div 
                className='container'
                
            >
                <motion.div 
                    className='py-12'
                    initial={{ opacity: 0, y: 180 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.1 }}
                >

                    {/* SLIDER */}
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={30}
                        autoplay={{
                            delay: 3000, 
                            disableOnInteraction: false, 
                        }}
                        pagination={{ 
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3
                            },

                        }}
                        loop={true}
                        className="cursor-pointer pb-12" 
                    >
                        {dataReviews.map((review) => (
                            <SwiperSlide key={review.id}>
                                <div className='flex flex-col gap-5 bg-green-900 rounded-md p-6'>
                                    <p className='font-Lobster'> 
                                        {review.text}
                                    </p>

                                    <div className='flex items-center'>
                                        <img 
                                            src={review.image} 
                                            alt={`Review by ${review.name}`}
                                            className='w-12 h-12 rounded-full'
                                        />

                                        <div className='ml-2'>
                                            <p className='text-yellow-500'>{review.name}</p>
                                            <p>{review.title}</p>
                                        </div>

                                        <i className="ri-double-quotes-r text-4xl ml-auto"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </motion.div>
            </div>
        </section>
    )
}

export default Reviev;
