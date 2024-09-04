import React from 'react'
import { InputField } from '../components'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <section className='w-full h-full'>
            <div className='w-full  md:w-2/4 mx-auto my-8  p-2 md:p-6  rounded flex flex-col items-center justify-center gap-6 md:shadow-lg bg-white md:border md:border-gray-600'>
                <h1 className='text-2xl  md:text-3xl font-bold'>Register</h1>
                <form className='w-full flex flex-col gap-4 md;gap-6' >
                    <InputField
                        label="Name"
                        name="name"
                        placeholder={"Kamal Deep"}
                        type="text" />
                    <InputField
                        label="Email"
                        name="email"
                        placeholder={"example@gmail.com"}
                        type="email" />
                    <InputField
                        label="Password"
                        name="password"
                        placeholder={"**********"}
                        type="password" />
                    <button className='w-full bg-primary text-white text-sm font-medium rounded p-2'>Login</button>
                    <div className='w-full text-sm md:text-base'>
                        <p className='text-center'>Already have an account? <Link to="/login" className='text-primary font-medium'>Login</Link></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Register