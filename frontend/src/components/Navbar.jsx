import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
    const [login, setLogin] = useState(true)

    return (
        <header className='flex items-center justify-between p-2 md:py-2 md:px-4 shadow-md bg-white'>
            <Link to={"/"} className='flex items-center justify-center gap-2'>
                <img src="/favicon.svg" className='w-6 md:w-8' alt="Bright side Logo" />
                <span className='hidden md:inline font-bold text-xl'>Bright Side</span>
            </Link>
            <div>
                {login ?
                    (
                        <Link className='py-1 px-2 md:py-2 md:px-4 bg-primary text-sm md:text-base text-white font-medium rounded' to="/profile">Profile</Link>
                    )
                    : (
                        <Link className='py-2 px-4 bg-primary text-white font-medium rounded' to="/login">Login</Link>
                    )}
            </div>
        </header>
    )
}

export default Navbar