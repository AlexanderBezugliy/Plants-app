import React from 'react'



const Registration = () => {


    return (
        <form className="flex flex-col gap-4">
            <input type="text" placeholder="First Name" className="p-2 border rounded" />
            <input type="text" placeholder="Last Name" className="p-2 border rounded" />
            <input type="tel" placeholder="Phone Number" className="p-2 border rounded" />

            <button type="submit" className="bg-yellow-600 py-2 text-white rounded hover:bg-yellow-700 duration-300">
                Register
            </button>
        </form>
    )
}

export default Registration;