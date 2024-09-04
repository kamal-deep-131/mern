import React from 'react'
import { IdeaCard } from '../components'
import ideas from '../data.json'

const Home = () => {
    return (
        <section className='w-full h-full p-2 md:p-6'>
            <IdeaCard ideas={ideas} />
        </section>
    )
}

export default Home