import React from 'react'


const Login = () => {
    return (
        <div>
            <form className="flex flex-col gap-4">
                <input type="email" placeholder="Email" className="p-2 border rounded" />
                <input type="password" placeholder="Password" className="p-2 border rounded" />

                <button type="submit" className="bg-yellow-600 py-2 text-white rounded hover:bg-yellow-700 duration-300">
                    Log In
                </button>
            </form>
        </div>
    )
}

export default Login