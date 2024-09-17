import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

// Helper function to get user initials
const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : 'U'; // Default 'U' for unknown
};

// Helper function to format the date from MongoDB timestamp




const SingleIdea = () => {
    const { id } = useParams(); // Get the idea ID from the route parameters
    const [idea, setIdea] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the single idea data by ID
        const fetchIdea = async () => {
            try {
                const response = await axios.get(`/api/v1/idea/${id}`);
                setIdea(response.data.idea);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch the idea');
                setLoading(false);
            }
        };

        fetchIdea();
    }, [id]);

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

    return (
        <section className="max-w-4xl mx-auto p-4 md:py-12">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                {/* Header with gradient */}

                {/* Content Area */}
                <div className="p-8 flex flex-col gap-4">
                    <h1 className="text-4xl font-bold text-gray-900 p-4 border-l-8 border-primary bg-[#ffddb8]">{idea.title || 'Untitled Idea'}</h1>
                    <p className='text-black  text-sm font-semibold italic rounded'>
                        - by {idea.author?.name || 'Anonymous'}
                    </p>

                    <p className="text-lg text-gray-700  leading-relaxed mb-4">
                        {idea.description || 'No description available.'}
                    </p>



                    {/* Tags */}
                    {idea.tags && idea.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {idea.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Back to all ideas button */}
                    <div >
                        <Link
                            to="/"
                            className="inline-block py-2 px-4 bg-primary text-white font-medium rounded-md shadow-sm"
                        >
                            Back to home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleIdea;
