import { motion } from 'framer-motion';
import React from 'react'
import Login from './Login';
import Registration from './Registration';


const Form = ({ modalType, setModalType }) => {

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
            onClick={() => setModalType(null)}
        >
            <motion.div
                className="bg-green-900 text-black rounded-lg p-6 w-full sm:max-w-[310px] md:max-w-md shadow-xl relative"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.1 }}
            >
                <h2 className="text-2xl font-bold  text-yellow-500 mb-4 text-center">
                    {modalType === 'registration' ? 'Registration' : 'Log In'}
                </h2>

                <button
                    onClick={() => setModalType(null)}
                    className="absolute top-0 -right-3 text-white text-xl"
                >
                    <i className='ri-close-large-line rounded-full p-4 bg-orange-400 hover:bg-orange-500 duration-300'></i>
                </button>

                {modalType === 'registration'
                    ? <Registration />
                    : <Login />}
            </motion.div>
        </div>
    )
}

export default Form;