import './ProjectTabs.css'
import { useState } from "react"
import FeaturedProjects from './FeaturedProjects'
import FunProjects from './FunProjects'
import IOTProjects from './IOTProjects'

function Projects() {
    const [currentlyActive, setCurrentlyActive] = useState('featured')

    function activate(newActive) {
        setCurrentlyActive(newActive)
    }

    return <div className='card mx-5 mt-4' data-bs-theme='dark' id='project-card'>
        <ul className="nav nav-tabs" style={{ "--bs-nav-link-padding-x": ".5rem" }} id='project-tabs'>
           <li className="nav-item">
                <button className={currentlyActive === 'featured' ? "nav-link active" : "nav-link"} onClick={() => activate('featured')}>Featured</button>
            </li>
            <li className="nav-item">
                <button className={currentlyActive === 'fun' ? "nav-link active" : "nav-link"} onClick={() => activate('fun')}>Fun</button>
            </li>
            <li className="nav-item">
                <button className={currentlyActive === 'iot' ? "nav-link active" : "nav-link"} onClick={() => activate('iot')}>IoT</button>
            </li>
        </ul>
        <div className="card-body">
            {currentlyActive === 'featured' && <FeaturedProjects />}
            {currentlyActive === 'fun' && <FunProjects />}
            {currentlyActive === 'iot' && <IOTProjects />}
        </div>
    </div>
}

export default Projects
