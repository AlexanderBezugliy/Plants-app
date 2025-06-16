import React from 'react'
import { dataPopularPlants } from '../data/dataPopularPlants';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './redux/cartSlice';


const Popular = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <section id='popular' className='bg-green-900'>
            <div className='flex flex-col items-center gap-3 text-center mb-40'>
                <h2 className='title'>Your Choice Plant</h2>
                <p className='max-w-2xl'>Follow instruction for more</p>
            </div>

            <div className='container w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {/* cards */}
                {dataPopularPlants.map((item, i) => {
                    const isInCart = cartItems.some((cartItem) => cartItem.id === item.id)

                    return (
                        <div key={i} className='popular__card flex flex-col justify-between bg-green-950 p-10 pt-24 rounded-md relative'>
                            <img 
                                src={item.logo} 
                                alt="popular_img" 
                                className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500' />
                            <p className='italic'>{item.descr}</p>
                            <h3>{item.title}</h3>

                            <div className='text-yellow-500 text-xs py-3'>
                                {item.stars.map((star, i) => (
                                    <i key={i} className={star}></i>
                                ))}
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='text-xl'>${item.price}</p>

                                <button 
                                    onClick={() => dispatch(addToCart(item))}
                                    disabled={isInCart}
                                    className='bg-yellow-500 px-2 py-1 rounded-sm text-xl hover:bg-yellow-600 duration-300'
                                >
                                    { isInCart ? <i className="ri-shield-check-line text-green-800"></i> : <i className="ri-shopping-cart-fill"></i> }
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Popular;
