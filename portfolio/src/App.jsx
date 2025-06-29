import './index.css'
import Links from './Links'
import ProjectCarousel from './ProjectCarousel'
import Brand from './Brand'

function App() {
    return <div className='d-flex flex-column'>
        <div className='d-flex flex-row'>
            <div className="d-flex flex-column justify-content-center px-5" style={{ border: "solid 1px black", width: "576px", height: "100vh", backgroundColor: "#15102E" }}>
                <div className="flex-fill"></div>
                <Brand />
                <Links />
                <div className="flex-fill"></div>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='flex-fill'></div>
                <ProjectCarousel />
                <div className='flex-fill'></div>
            </div>
        </div>
        <div className='d-flex flex-row'>
            <div className="bg-body-primary" style={{ border: "solid 1px black", width: "400px", height: "100vh" }}>
                <h1>Hello</h1>
            </div>
        </div>
    </div>
}
export default App
