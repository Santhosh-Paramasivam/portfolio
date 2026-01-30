import Skill from '../../Components/Skill'

function Databases() {
    return <div className='card mx-10 mt-3' data-bs-theme='dark' id='project-card' style={{ backgroundColor: '#211A43', maxWidth: 1200, alignSelf: 'center'}}>
        <div className="d-flex flex-row justify-content-center mt-3" style={{ marginBottom: -10 }}>
            {/* <div className="row px-3 w-100"> */}
                <Skill img={"https://ico.vercel.app/postgresql/white"} alt="PostgreSQL" pad="3" level={5} extra=" flex-fill ps-3"/>
                <Skill img={"https://ico.vercel.app/mysql/white"} alt="MySQL" pad="3" level={4} extra=" flex-fill px-3"/>
                <Skill img={"https://ico.vercel.app/firebase/white"} alt="Firebase" pad="3" level={3} extra= " flex-fill pe-3"/>
            {/* </div> */}
        </div>
    </div>
}

export default Databases
