import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = ({ ideas, onDelete, onUpdate }) => {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {ideas.map((idea) => (
                <article key={idea._id} className='w-full flex flex-col gap-4 p-6 border border-gray-400 rounded-md shadow-lg bg-white hover:shadow-xl transition-shadow duration-200'>

                    <h1 className='text-2xl font-bold text-gray-900'>{idea.title || 'Untitled Idea'}</h1>
                    <p className='text-base text-gray-800 line-clamp-3'>
                        {idea.description || 'No description available.'}
                    </p>

                    <div className='flex gap-2'>
                        {/* Update Button */}
                        <Link
                            to={`/idea/edit/${idea._id}`}
                            className='py-1 px-3 bg-blue-500 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150'
                        >
                            Edit
                        </Link>
                        {/* Delete Button */}
                        <button
                            onClick={() => onDelete(idea._id)}
                            className='py-1 px-3 bg-red-500 text-white text-sm font-medium rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150'
                        >
                            Delete
                        </button>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default ProfileCard;
