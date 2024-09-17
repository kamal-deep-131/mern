import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


const SingleIdea = () => {
    const { id } = useParams();
    const [idea, setIdea] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the single idea data by ID
        const fetchIdea = async () => {
            try {
                const response = await axios.get(`https://bright-side-backend.vercel.app/api/v1/idea/${id}`);
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


                <div className="p-8 flex flex-col gap-4">
                    <h1 className="text-4xl font-bold text-gray-900 p-4 border-l-8 border-primary bg-[#ffddb8]">{idea.title || 'Untitled Idea'}</h1>
                    <p className='text-black  text-sm font-semibold italic rounded'>
                        - by {idea.author?.name || 'Anonymous'}
                    </p>

                    <p className="text-lg text-gray-700  leading-relaxed mb-4">
                        {idea.description || 'No description available.'}
                    </p>

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
