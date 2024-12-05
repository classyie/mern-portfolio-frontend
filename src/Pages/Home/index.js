import React from 'react'
import Header from '../../Components/Header';
import Intro from './Intro';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';

function Home() {
    return (
        <div className=''>
            <Header />
            <div className='bg-primary px-40 sm:px-5'>
                <Intro />
                <About />
                <Experiences />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}

export default Home;
