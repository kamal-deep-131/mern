import React, { useState, useContext } from 'react'
import { InputField } from '../components'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-hot-toast"
import axios from 'axios'
import { authContext } from '../context/context'

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { setLogin } = useContext(authContext)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.email == "") {
            toast.error("Please Enter email")
        }
        else if (formData.password == "") {
            toast.error("Please Enter password")
        }
        if (formData.email && formData.password) {
            try {
                setLoading(true)
                const response = await axios.post("https://bright-side-backend.vercel.app/api/v1/user/login", formData)
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("user", JSON.stringify(response.data.user))
                toast.success("Login Successfully")
                setLoading(false)
                setLogin(true)
                navigate("/profile")
                setFormData({ email: "", password: "" })
            } catch (error) {
                setLoading(true)
                toast.error(error.response.data.message)
                setLoading(false)
            }
        }

    }

    return (
        <section className='w-full h-full'>
            <div className='w-full  md:w-2/4 mx-auto my-8 p-6  rounded flex flex-col items-center justify-center gap-4 md:shadow-lg bg-white md:border md:border-gray-600'>
                <h1 className='text-4xl font-bold'>Login</h1>
                <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit}>
                    <InputField
                        label="Email"
                        name="email"
                        placeholder={"example@gmail.com"}
                        onChange={handleChange}
                        type="email" />
                    <InputField
                        label="Password"
                        name="password"
                        placeholder={"**********"}
                        onChange={handleChange}
                        type="password" />

                    <button className='w-full bg-primary text-white font-medium text-lg rounded p-2'>{
                        loading ? "Saving.." : "Login"
                    }</button>
                    <div className='w-full text-base'>
                        <p className='text-center'>Don't have an account? <Link to="/register" className='text-primary font-medium'>Register</Link></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login