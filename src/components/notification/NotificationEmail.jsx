import React from 'react'
import gleafBg from '../../assets/img/leaf-4.png';


const NotificationEmail = ({ setShowNotificationEmail }) => {
    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div
                className="bg-white text-black rounded-lg p-4 w-[90%] max-w-xl shadow-xl relative">   
                {/* BUTTON - CLOSE */}
                <button
                    onClick={() => setShowNotificationEmail(false)}
                    className="absolute top-0 -right-3 text-white text-xl z-10"
                >
                    <i className='ri-close-large-line rounded-full p-4 bg-orange-400 hover:bg-orange-500 duration-300'></i>
                </button>
                
                <div className='flex justify-center flex-col items-center border-2 border-yellow-600 rounded-lg p-3 relative'>
                    <h2 className="text-2xl font-bold mb-3 text-center text-green-800">
                        Thank you! <br/> 
                        We will send you a special offer <span className='text-yellow-600'>to this email within 10 minutes.</span>
                    </h2>

                    <img src={gleafBg} alt="logo" className='absolute -top-6 -left-9 w-[100px] opacity-80' />
                    <img src={gleafBg} alt="logo" className='absolute -top-3 -right-5 w-[100px] opacity-80 rotate-90' />
                </div>
                
            </div>
        </div>
    )
}

export default NotificationEmail;
