import Brand from './IntroductionPage/Brand'
import Links from './IntroductionPage/Links'
import ProjectCarousel from './IntroductionPage/ProjectCarousel'

import './IntroductionPage/AboutCard.css'
import { useEffect, useState } from 'react'

function IntroductionPage() {
    const [aboutActive, setAboutActive] = useState(false)

    const aboutCardClassNames = 'card name'

    useEffect(() => {
        setTimeout(() => {
            setAboutActive(true)
        }, 1500)
    }, [])

    return <div className='d-flex flex-row'>
        <div className="d-flex flex-column justify-content-center px-5" style={{ width: "576px", height: "100vh", backgroundColor: "#15102E" }} onMouseOver={() => setAboutActive(true)} onMouseLeave={() => setAboutActive(false)}>
            <div className="flex-fill"></div>
            <Brand />

            <div id='about-card' className={aboutActive ? aboutCardClassNames + ' py-3 px-4 mb-1 mt-2 active' : aboutCardClassNames + ' invisible-text '}>
                <h3 style={{ fontFamily: 'imprima', color: 'white' }} className="py-0 my-0 fs-4">About</h3>
                <p style={{ fontFamily: 'imprima', color: 'white' }} className='mt-2'>
                    I'm a software engineer currently mastering end-to-end web-development.
                    <br></br>
                    <br></br>
                    I've worked with a variety of technologies but am most skilled with Java, JavaScript, React and SpringBoot
                    <br></br>
                    <br></br>
                    Advocate of AI-less programming and in-depth knowledge
                    <br></br>

                    <br></br>
                    Transparent and reliable, that's me!
                </p>
            </div>

            <Links />
            <div className="flex-fill"></div>
        </div>
        <div className='container px-0 d-flex flex-column' style={{ backgroundColor: "#15102E" }}>
            <div className='flex-fill'></div>
            <ProjectCarousel />
            <div className='flex-fill'></div>
        </div>
    </div>
}

export default IntroductionPage