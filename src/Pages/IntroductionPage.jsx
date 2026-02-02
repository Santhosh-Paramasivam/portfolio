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

    return <div className='d-flex flex-row' style={{ backgroundColor: "#15102E" }}>
        <div className="d-flex flex-column justify-content-center px-5" style={{ width: "576px", height: "100vh", backgroundColor: "#15102E" }} onMouseOver={() => setAboutActive(true)} onMouseLeave={() => setAboutActive(false)}>
            <div className="flex-fill"></div>
            <Brand />

            <div id='about-card' className={aboutActive ? aboutCardClassNames + ' pt-3 pb-2 px-4 mb-0 mt-2 active' : aboutCardClassNames + ' invisible-text '}>
                <h3 style={{ fontFamily: 'imprima', color: 'white' }} className="py-0 my-0 fs-4">About</h3>
                <p style={{ fontFamily: 'imprima', color: 'white' }} className='mt-2 fs-5'>
                    I am a junior web developer focused on mastering end-to-end web development.
                    <br></br>
                    <br></br>
                    While I've worked with many tools across the stack, I do my best work with Java/Spring Boot and JavaScript/React.
                    <br></br>
                    <br></br>
                    I am an advocate for user-centric, goal-oriented design and principled software development.
                    <br></br>
                    <br></br>
                    I <i>actually</i> read books, documentation, and manual pages to understand <i>how</i> my tools work underneath the hood.
                    <br></br>
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
