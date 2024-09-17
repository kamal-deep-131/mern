import React, { useState, useEffect } from 'react';
import { InputField, TextArea } from '../components';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditIdea = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isSaving, setIsSaving] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the single idea data by ID
        const fetchIdea = async () => {
            try {
                const response = await axios.get(`https://bright-side-backend.vercel.app/api/v1/idea/${id}`);
                setFormData({
                    title: response.data.idea.title,
                    description: response.data.idea.description,
                });
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch the idea');
                setLoading(false);
            }
        };

        fetchIdea();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.title === '') {
            toast.error('Please Enter Title');
        } else if (formData.description === '') {
            toast.error('Please Enter Description');
        } else {
            try {
                setIsSaving(true);

                const token = localStorage.getItem('token');

                const response = await axios.patch(`/api/v1/idea/edit/${id}`, {
                    title: formData.title,
                    description: formData.description,
                    token: token
                });


                toast.success('Idea updated successfully!');
                navigate(`/profile`);

            } catch (err) {
                toast.error(err?.response?.data?.message);
                setIsSaving(false);
            }
        }
    };

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

    return (
        <section className="w-full h-full">
            <div className="p-2 md:p-6 flex flex-col items-center justify-center gap-2 md:gap-4 w-full mx-auto md:w-3/4">
                <h1 className="text-2xl  md:text-3xl font-bold">Edit Idea</h1>
                <form className="flex flex-col items-center justify-center gap-2 md:gap-4 w-full" onSubmit={handleSubmit}>
                    <InputField
                        label="Title"
                        name="title"
                        value={formData.title}
                        placeholder="Title"
                        onChange={handleChange}
                        type="text"
                    />

                    <TextArea
                        label="Description"
                        name="description"
                        value={formData.description}
                        placeholder="Description"
                        onChange={handleChange}
                    />

                    <button
                        className={`w-full bg-primary text-white font-medium rounded p-2 ${isSaving ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isSaving}
                    >
                        {isSaving ? 'Saving...' : 'Save'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default EditIdea;
