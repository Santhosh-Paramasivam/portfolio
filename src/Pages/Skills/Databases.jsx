import Skill from '../../Components/Skill'

function Databases() {
    return <div className='card mx-10 mt-3' data-bs-theme='dark' id='project-card' style={{ backgroundColor: '#211A43', maxWidth: 1200, alignSelf: 'center'}}>
        <div className="d-flex flex-row justify-content-center mt-3">
                <Skill img={"https://ico.vercel.app/postgresql/white"} alt="PostgreSQL" pad="3" level={5} extra_tags=" flex-fill ps-3"/>
                <Skill img={"https://ico.vercel.app/mysql/white"} alt="MySQL" pad="3" level={4} extra_tags=" flex-fill px-3"/>
                <Skill img={"https://ico.vercel.app/firebase/white"} alt="Firebase" pad="3" level={3} extra_tags= " flex-fill pe-3"/>
        </div>
    </div>
}

export default Databases
