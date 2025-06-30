import './ProjectTabs.css'
import { useState } from "react"
import ProjectTimeline from "./ProjectTimeline"

function Projects() {
    const [currentlyActive, setCurrentlyActive] = useState('timeline')

    function activate(newActive) {
        setCurrentlyActive(newActive)
    }

    return <div className='card mx-5 mt-4' data-bs-theme='dark' id='project-card'>
        <ul className="nav nav-tabs" style={{"--bs-nav-link-padding-x": ".5rem"}} id='project-tabs'>
            <li className="nav-item">
                <button className={currentlyActive === 'timeline' ? "nav-link active" : "nav-link"} onClick={() => activate('timeline')}>Timeline</button>
            </li>
            <li className="nav-item">
                <button className={currentlyActive === 'link' ? "nav-link active" : "nav-link"} onClick={() => activate('link')}>Link</button>
            </li>
        </ul>
        <div className="card-body">
            {currentlyActive === 'timeline' && <ProjectTimeline/>}
        </div>
    </div>
}

export default Projects