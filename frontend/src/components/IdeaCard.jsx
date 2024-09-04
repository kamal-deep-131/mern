import React from 'react'
import { Link } from 'react-router-dom'

const IdeaCard = ({ ideas }) => {
    const isOwner = true
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
            {
                ideas.map((idea) => (
                    <div className='w-full flex flex-col gap-6 p-6 border border-black rounded-md shadow-lg'>
                        <Link to={`/idea/${idea.id}`} className='flex gap-2 flex-col'>
                            <h1 className='text-3xl font-bold'>{idea.title}</h1>
                            <p className='text-base text-gray-700 mb-2'>Posted By {idea.author}</p>
                            <p className='text-lg text-gray-800'>{idea.description}</p>

                        </Link>
                        {isOwner && (
                            <div className='flex gap-2 flex-wrap'>
                                <button className='w-full bg-gray-800 text-white font-medium rounded px-6 py-2 max-w-fit'>Edit</button>
                                <button className='w-full bg-gray-800 text-white font-medium rounded p-2 max-w-fit'>Delete</button>
                            </div>

                        )}
                    </div>
                ))

            }
        </div>
    )
}

export default IdeaCard