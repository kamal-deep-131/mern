import React from 'react'
import { Link } from 'react-router-dom'

const IdeaCard = ({ ideas }) => {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {ideas.map((idea) => (
                <article key={idea._id} className='w-full flex flex-col gap-6 p-6 border border-black rounded-md shadow-lg'>
                    <Link to={`/idea/${idea._id}`} className='flex gap-2 flex-col'>
                        <h1 className='text-3xl font-bold'>{idea.title || 'Untitled Idea'}</h1>
                        <p className='text-base text-gray-700 mb-2'>
                            Posted By {idea.author?.name || 'Anonymous'}
                        </p>
                        <p className='text-lg text-gray-800'>{idea.description || 'No description available.'}</p>
                    </Link>
                </article>
            ))}
        </div>
    )
}

export default IdeaCard
