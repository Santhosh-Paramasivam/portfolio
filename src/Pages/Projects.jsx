import Projects from "./Projects/Projects";

function ProjectsPage() {
    return <div className="d-flex flex-column pt-4 pb-5" style={{ backgroundColor: "#211A43" }}>
        <h3 style={{ fontFamily: 'imprima', color: '#96DEFF' }} className="mx-2 py-0 mt-0 mb-2 fs-1 px-5 align-self-center">Projects</h3>
        <h4 style={{ fontFamily: 'imprima', color: 'white' }} className="mx-2 py-0 mb-0 mt-2 fs-3 px-5 align-self-center">Featured</h4>
        <h4 style={{ fontFamily: 'imprima', color: 'white' }} className="mx-2 py-0 mb-0 mt-2 fs-3 px-5 align-self-center">Fun</h4>
        <h4 style={{ fontFamily: 'imprima', color: 'white' }} className="mx-2 py-0 mb-0 mt-2 fs-3 px-5 align-self-center">Internet of Things</h4>
        <Projects />
    </div>
}

export default ProjectsPage
