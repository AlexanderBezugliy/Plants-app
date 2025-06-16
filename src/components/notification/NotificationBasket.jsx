import React from 'react'
import headerLogo from '../../assets/img/header-logo.png';


const NotificationBasket = ({ setShowNotification }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div
                className="bg-white text-black rounded-lg p-6 w-[90%] max-w-xl shadow-xl relative">   
                {/* BUTTON - CLOSE */}
                <button
                    onClick={() => setShowNotification(false)}
                    className="absolute top-0 -right-3 text-white text-xl"
                >
                    <i className='ri-close-large-line rounded-full p-4 bg-orange-400 hover:bg-orange-500 duration-300'></i>
                </button>
                
                <div className='flex justify-center flex-col items-center'>
                    <h2 className="text-2xl font-bold mb-3 text-center text-green-800 border-t-2 border-green-700 pt-4">
                        Thank you very much! <br/> 
                        <span className='text-yellow-600'>Your order is being processed...</span> <br/>  
                        Our manager will contact you.
                    </h2>

                    <img src={headerLogo} alt="logo" className='w-15 h-15' />
                </div>
                
            </div>
        </div>
    )
}

export default NotificationBasket;
