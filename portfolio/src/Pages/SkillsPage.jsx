import Databases from './Skills/Databases'
import Frameworks from './Skills/Frameworks'
import Languages from './Skills/Languages'

function SkillsPage() {
    return <div className="d-flex flex-column pt-4" style={{ height: "100vh", backgroundColor: "#15102E" }}>
        <h3 style={{ fontFamily: 'imprima', color: '#96DEFF' }} className="mx-2 py-0 my-0 fs-1 px-5 align-self-center">Languages</h3>
        <Languages />
        <h3 style={{ fontFamily: 'imprima', color: '#96DEFF' }} className="mx-2 py-0 my-0 fs-1 px-5 align-self-center mt-3">Frameworks</h3>
        <Frameworks />
        <h3 style={{ fontFamily: 'imprima', color: '#96DEFF' }} className="mx-2 py-0 my-0 fs-1 px-5 align-self-center mt-3">Databases</h3>
        <Databases />
    </div>
}

export default SkillsPage