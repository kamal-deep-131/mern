import React from 'react'
import { InputField, TextArea } from '../components'

const CreateIdea = () => {
    return (
        <section section className='w-full h-full'>
            <div className='p-2 md:p-6 flex flex-col items-center justify-center gap-2 md:gap-4 w-full mx-auto md:w-3/4'>
                <h1 className='text-2xl  md:text-3xl font-bold'>Write Idea</h1>
                <InputField
                    label="Title"
                    name="title"
                    placeholder={"Title"}
                    type="text" />

                <TextArea
                    label="Description"
                    name="description"
                    placeholder={"Description"}
                    type="text"
                />

                <button className='w-full bg-primary text-white font-medium rounded p-2 '>Publish</button>

            </div>

        </section>
    )
}

export default CreateIdea