import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearBasket, decreaseQuantity, increaseQuantity, removeCart } from './redux/cartSlice';



const BasketModal = ({ setShowCart, setShowNotification }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
    
    const handleSubmit = () => {
        setShowCart(false);
        setShowNotification(true);
        dispatch(clearBasket());
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setShowCart(false)}
        >
            <div
                className="bg-white text-black rounded-lg p-6 w-[90%] max-w-xl shadow-xl relative"
                onClick={(e) => e.stopPropagation()}
            >   
                {/* BUTTON - CLOSE */}
                <button
                    onClick={() => setShowCart(false)}
                    className="absolute top-0 -right-3 text-white text-xl"
                >
                    <i className='ri-close-large-line rounded-full p-4 bg-orange-400 hover:bg-orange-500 duration-300'></i>
                </button>
                
                <h2 className="text-2xl font-Lobster font-bold mb-6 text-center text-green-800 border-b-2 border-green-700 pb-4">
                    Your Cart
                </h2>

                <div className="space-y-4 max-h-[400px] overflow-y-auto">
                    {cartItems.length === 0 ? (
                        <p className="text-center text-gray-500 font-bold border-b-2 border-green-700 pb-5">Your cart is empty.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.title} className="flex items-center justify-between space-x-1 border-b border-green-600 pb-4">
                                <img src={item.logo} alt={item.title} className="w-16 h-16 object-cover rounded" />

                                <div className="flex gap-2">
                                    <div className='text-yellow-500 text-xs py-3 w-28 sm:hidden md:block'>
                                        <h3 className="font-semibold text-base text-black">{item.title}</h3>
                                        {item.stars.map((star, i) => (
                                            <i key={i} className={star}></i>
                                        ))}
                                    </div>

                                    <div className="flex items-center">
                                        {/* DEC "-" */}
                                        <button
                                            onClick={() => dispatch(decreaseQuantity(item.id))}
                                            className="px-2 py-1 bg-gray-200 rounded-full border-2 border-gray-300 cursor-pointer hover:bg-gray-300 duration-300"
                                        >
                                            <i className="ri-subtract-line"></i>
                                        </button>
                                        {/* QUANTITY */}
                                        <span className="mx-3">{item.quantity}</span>
                                        {/* INC "+" */}
                                        <button
                                            onClick={() => dispatch(increaseQuantity(item.id))}
                                            className="px-2 py-1 bg-gray-200 rounded-full border-2 border-gray-300 cursor-pointer hover:bg-gray-300 duration-300"
                                        >
                                            <i className="ri-add-line"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="font-semibold text-green-700">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>

                                <div
                                    onClick={() => dispatch(removeCart(item.id))} 
                                    className='flex justify-center items-center text-3xl border-2 bg-gray-300 text-red-500 rounded-md w-10 h-10 cursor-pointer hover:bg-red-300 duration-300' >
                                    <i className="ri-delete-bin-2-line "></i>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* TOTAL */}
                <div className="mt-3 text-end text-xl">
                    <p className="">Total items: <strong className="text-green-600">{totalItems}</strong></p> 
                    <p>Total price: <strong className="text-green-600">${totalPrice.toFixed(2)}</strong></p>

                    {/* BUTTON - SUBMIT */}
                    <button
                        onClick={handleSubmit}
                        className="btn mt-3 text-white space-x-2 text-xl hover:bg-yellow-600"
                    >
                        <span>Submit</span>
                        <i className='ri-leaf-line'></i>
                    </button>
                </div>
            </div>
        </div>   
    )
}

export default BasketModal