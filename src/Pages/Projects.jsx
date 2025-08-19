import Projects from "./Projects/Projects";

function ProjectsPage() {
    return <div className="d-flex flex-column pt-4 pb-5" style={{ backgroundColor: "#211A43" }}>
        <h3 style={{ fontFamily: 'imprima', color: '#96DEFF' }} className="mx-2 py-0 my-0 fs-1 px-5 align-self-center">Projects</h3>
        <Projects />
    </div>
}

export default ProjectsPage