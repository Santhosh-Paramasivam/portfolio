import './ProjectTabs.css'
import { useState } from "react"
import ProjectTimeline from "../../ProjectTimeline"
import FeaturedProjects from './FeaturedProjects'

function Projects() {
    const [currentlyActive, setCurrentlyActive] = useState('featured')

    function activate(newActive) {
        setCurrentlyActive(newActive)
    }

    return <div className='card mx-5 mt-4' data-bs-theme='dark' id='project-card'>
        <ul className="nav nav-tabs" style={{ "--bs-nav-link-padding-x": ".5rem" }} id='project-tabs'>
            <li className="nav-item">
                <button className={currentlyActive === 'timeline' ? "nav-link active" : "nav-link"} onClick={() => activate('timeline')}>Timeline</button>
            </li>
            <li className="nav-item">
                <button className={currentlyActive === 'featured' ? "nav-link active" : "nav-link"} onClick={() => activate('featured')}>Featured</button>
            </li>
        </ul>
        <div className="card-body">
            {currentlyActive === 'timeline' && <ProjectTimeline />}
            {currentlyActive === 'featured' && <FeaturedProjects />}
        </div>
    </div>
}

export default Projects