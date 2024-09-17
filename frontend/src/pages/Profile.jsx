import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ProfileCard } from '../components';

const Profile = () => {

    const [ideas, setIdeas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const userName = JSON.parse(localStorage.getItem('user'))?.name || "User"

    useEffect(() => {
        const fetchIdeas = async () => {
            try {
                // Get token from local storage
                const token = localStorage.getItem('token');


                const response = await axios.post('/api/v1/idea/profile', {
                    token: token,
                });

                setIdeas(response.data.ideas);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching ideas:', err);
                setError('Failed to fetch ideas');
                setLoading(false);
            }
        };

        fetchIdeas();
    }, []);

    return (
        <section className='flex flex-col items-start justify-start p-2 md:py-8 md:px-16 gap-5'>
            <h1 className='text-5xl font-bold'>Hi, {userName}</h1>
            <h2 className='text-xl text-gray-700 mb-2'>
                Welcome to your profile <br />
                Share your ideas, political opinions, and more with all around the globe.
            </h2>
            <Link className='py-2 px-4 bg-primary text-white font-medium rounded' to={'/idea/create'}>
                Write an Idea
            </Link>

            {/* Divider */}
            <div className="relative my-8 w-full">
                <hr className="border-t-2 border-gray-300" />
                <div className="absolute hidden md:block top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 bg-white text-gray-600 text-sm font-semibold">
                    Ideas you have posted
                </div>
            </div>

            {/* Cards View */}
            {loading ? (
                <h1>Loading ideas...</h1>
            ) : error ? (
                <h1>{error}</h1>
            ) : ideas.length === 0 ? (
                <h1>No Ideas to display</h1>
            ) : (
                <ProfileCard ideas={ideas} />
            )}
        </section>
    );
};

export default Profile;
