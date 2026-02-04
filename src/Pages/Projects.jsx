import FeaturedProjects from "./Projects/FeaturedProjects";
import FunProjects from "./Projects/FunProjects";
import IOTProjects from "./Projects/IOTProjects";

function ProjectsPage() {
    return <div className="d-flex flex-column pt-2 pb-5" style={{ backgroundColor: "#15102E" }}>
        <h3 style={{ fontFamily: 'imprima', color: '#96DEFF' }} className="mx-2 py-0 mt-0 mb-2 fs-1 px-5 align-self-center">Projects</h3>
        <h4 style={{ fontFamily: 'imprima', color: 'white' }} className="mx-2 py-0 mb-3 mt-2 fs-3 px-5 align-self-center">Featured</h4>
        <FeaturedProjects/>
        <h4 style={{ fontFamily: 'imprima', color: 'white' }} className="mx-2 py-0 mb-3 mt-2 fs-3 px-5 align-self-center">Fun</h4>
        <FunProjects/>
        <h4 style={{ fontFamily: 'imprima', color: 'white' }} className="mx-2 py-0 mb-3 mt-2 fs-3 px-5 align-self-center">Internet of Things</h4>
        <IOTProjects/>
    </div>
}

export default ProjectsPage
