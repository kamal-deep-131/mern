import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <section className='w-full h-full'>
            <div className='flex flex-col items-center justify-center gap-2 md:gap-4 mx-auto my-7'>
                <h6 className="text-2xl md:text-4xl font-semibold">404</h6>
                <h2 className='text-3xl md:text-6xl font-bold text-primary'>Page Not Found</h2>

                <p className='text-lg'>The page you are looking for does not exist.</p>
                <Link to="/" className="py-2 px-4 bg-primary text-white font-medium rounded">Back to Home</Link>
            </div>
        </section>
    )
}

export default PageNotFound