import React, { useState } from 'react';
import { useParams, useNavigate, redirect } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const DeleteIdea = () => {
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(true);
    const navigate = useNavigate();

    // Handle Delete Idea
    const handleDelete = async () => {
        try {
            // Send DELETE request
            setLoading(true);
            const token = localStorage.getItem('token');
            console.log(token);
            const response = await axios.post(`https://bright-side-backend.vercel.app/api/v1/idea/delete/${id}`, { token: token });
            console.log(response);
            toast.success('Idea deleted successfully');
            setLoading(false);
            setShowModal(false);
            navigate('/profile');
        } catch (error) {
            setLoading(true);
            toast.error(error?.response?.data?.message);
            console.error('Error deleting idea:', error);
            setLoading(false);
            navigate('/profile');
        }
    };



    return (
        <>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
                        <p className="mb-4">Are you sure you want to delete this idea?</p>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => navigate(-1)}
                                className="py-2 px-4 bg-gray-300 text-black rounded-md"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="py-2 px-4 bg-red-500 text-white rounded-md"
                            >
                                {loading ? 'Deleting...' : 'Delete'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeleteIdea;
