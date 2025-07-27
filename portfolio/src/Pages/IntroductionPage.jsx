import Brand from './IntroductionPage/Brand'
import Links from './IntroductionPage/Links'
import ProjectCarousel from './IntroductionPage/ProjectCarousel'

function IntroductionPage() {
    return <div className='d-flex flex-row'>
        <div className="d-flex flex-column justify-content-center px-5" style={{ width: "576px", height: "100vh", backgroundColor: "#15102E" }}>
            <div className="flex-fill"></div>
            <Brand />
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