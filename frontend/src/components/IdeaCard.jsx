import React from 'react';
import { Link } from 'react-router-dom';

const IdeaCard = ({ ideas }) => {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {ideas.map((idea) => (
                <article key={idea._id} className='w-full flex flex-col gap-4 p-6 border border-gray-400 rounded-md shadow-lg bg-white hover:shadow-xl transition-shadow duration-200'>
                    <Link to={`/idea/${idea._id}`} className='flex flex-col gap-3'>
                        <h1 className='text-2xl font-bold text-gray-900'>{idea.title || 'Untitled Idea'}</h1>
                        <p className='text-black bg-[#ffddb8] text-sm font-semibold max-w-fit px-1 rounded'>
                            Posted By {idea.author?.name || 'Anonymous'}
                        </p>
                        <p className='text-base text-gray-800 line-clamp-3'>
                            {idea.description || 'No description available.'}
                        </p>
                    </Link>
                </article>
            ))}
        </div>
    );
}

export default IdeaCard;
