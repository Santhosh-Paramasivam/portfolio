import Skill from '../../Components/Skill'

function Databases() {
    return <div className='card mx-5 mt-3' data-bs-theme='dark' id='project-card' style={{ backgroundColor: '#211A43' }}>
        <div className="grid mt-3">
            <div className="row px-3">
                <Skill img={"https://ico.vercel.app/firebase/white"} alt="SpringBoot" pad="3" />
                <Skill img={"https://ico.vercel.app/postgresql/white"} alt="SpringBoot" pad="3" />
                <Skill img={"https://ico.vercel.app/mysql/white"} alt="SpringBoot" pad="3" />
            </div>
        </div>
    </div>
}

export default Databases