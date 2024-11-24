import React from 'react'
import Header from '../../Components/Header';
import Intro from './Intro';
import About from './About';

function Home() {
    return (
        <div className=''>
            <Header />
            <div className='bg-primary px-40 sm:px-5'>
                <Intro />
                <About />
            </div>
        </div>
    )
}

export default Home;
