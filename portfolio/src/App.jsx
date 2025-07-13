import './index.css'
import Links from './Links'
import ProjectCarousel from './ProjectCarousel'
import Brand from './Brand'
import Projects from './Projects'
import Frameworks from './Pages/Skills/Frameworks'
import Databases from './Pages/Skills/Databases'
import Languages from './Pages/Skills/Languages'

function App() {
    return <div className='d-flex flex-column'>
        <div className='d-flex flex-row'>
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
        <div className="d-flex flex-column pt-4" style={{ height: "100vh", backgroundColor: "#211A43" }}>
            <h3 style={{ fontFamily: 'imprima', color: '#96DEFF' }} className="mx-2 py-0 my-0 fs-1 px-5 align-self-center">Projects</h3>
            <Projects />
        </div>
        <div className="d-flex flex-column pt-4" style={{ height: "100vh", backgroundColor: "#15102E" }}>
            <h3 style={{ fontFamily: 'imprima', color: '#96DEFF' }} className="mx-2 py-0 my-0 fs-1 px-5 align-self-center">Languages</h3>
            <Languages />
            <h3 style={{ fontFamily: 'imprima', color: '#96DEFF' }} className="mx-2 py-0 my-0 fs-1 px-5 align-self-center mt-3">Frameworks</h3>
            <Frameworks />
            <h3 style={{ fontFamily: 'imprima', color: '#96DEFF' }} className="mx-2 py-0 my-0 fs-1 px-5 align-self-center mt-3">Databases</h3>
            <Databases />
        </div>
    </div>
}
export default App
