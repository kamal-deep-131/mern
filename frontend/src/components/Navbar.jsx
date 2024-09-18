import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { authContext } from '../context/context'

const Navbar = () => {
    const { login } = useContext(authContext)

    return (
        <header className='flex items-center justify-between  px-4 py-4 md:px-8 shadow-md bg-white sticky top-0 z-10'>
            <Link to={"/"} className='flex items-center justify-center gap-2'>
                <img src="/favicon.svg" className='w-8 md:w-10' alt="Bright side Logo" />
                <span className='font-bold text-2xl'>Bright Side</span>
            </Link>
            <div>
                {login ?
                    (
                        <Link className='py-1 px-2 md:py-2 md:px-4 bg-primary text-lg  text-white font-medium rounded' to="/profile">Profile</Link>
                    )
                    : (
                        <Link className='py-1 px-2 md:py-2 md:px-4 bg-primary text-lg text-white font-medium rounded' to="/login">Login</Link>
                    )}
            </div>
        </header>
    )
}

export default Navbar