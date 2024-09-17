import React, { useState } from 'react'
import { InputField, TextArea } from '../components'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateIdea = () => {
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const publishBlog = async (formData) => {
        try {
            setLoading(true)
            const response = await axios.post('https://bright-side-backend.vercel.app/api/v1/idea/create', {
                title: formData.title,
                description: formData.description,
                token
            })
            toast.success(response?.data?.message)
            setFormData({
                title: "",
                description: ""
            })
            navigate("/profile")
            setLoading(false)
        }
        catch (error) {
            setLoading(true)
            toast.error(error?.response?.data?.message)
            setLoading(false)
        }
    }

    const [formData, setFormData] = useState({
        title: "",
        description: "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.title == "") {
            toast.error("Please Enter Title")
        } else if (formData.description == "") {
            toast.error("Please Enter Description")
        }
        if (formData.title && formData.description) {
            console.log("Idea Data: ", formData)
            publishBlog(formData)
        }
    }

    return (
        <section className='w-full h-full'>
            <div className='p-2 md:p-6 flex flex-col items-center justify-center gap-2 md:gap-4 w-full mx-auto md:w-3/4'>
                <h1 className='text-2xl  md:text-3xl font-bold'>Write Idea</h1>
                <form className='flex flex-col items-center justify-center gap-2 md:gap-4 w-full' onSubmit={handleSubmit}>
                    <InputField
                        label="Title"
                        name="title"
                        placeholder={"Title"}
                        onChange={handleChange}
                        type="text" />

                    <TextArea
                        label="Description"
                        name="description"
                        placeholder={"Description"}
                        onChange={handleChange}
                        type="text"
                    />
                    <button className='w-full bg-primary text-white font-medium rounded p-2 '>{
                        loading ? "Loading..." : "Publish"
                    }</button>
                </form>


            </div>

        </section>
    )
}

export default CreateIdea