import React, { useEffect, useState } from 'react'
import { IdeaCard } from '../components'
import axios from "axios"

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [ideas, setIdeas] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchIdeas = async () => {
            try {
                setLoading(true)
                const response = await axios.get("https://bright-side-backend.vercel.app/api/v1/idea/display")
                setIdeas(response?.data?.ideas || [])
                setLoading(false)
            } catch (error) {
                console.error("Error in fetching ideas:", error)
                setError("Something went wrong while fetching ideas. Please try again.")
                setLoading(false)
            }
        }
        fetchIdeas()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <section className='w-full h-full p-2 md:p-6'>
            {ideas.length === 0 ? (
                <h1>No Ideas to display</h1>
            ) : (
                <IdeaCard ideas={ideas} />
            )}
        </section>
    )
}

export default Home
