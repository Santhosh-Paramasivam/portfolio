import Skill from '../../Components/Skill'

function Languages() {
    return <div className='card mx-5 mt-3' data-bs-theme='dark' id='project-card' style={{ backgroundColor: '#211A43', alignSelf: 'center'}}>
        <div className="grid mt-3">
            <div className="row px-3">
                <Skill img={`${import.meta.env.BASE_URL}static/skills/java.png`} alt="Java" pad="3" level={5} />
                <Skill img={"https://ico.vercel.app/python/white"} alt="Python" pad="3" level={5} />
                <Skill img={"https://ico.vercel.app/html5/white"} alt="HTML5" pad="3" level={5}/>
                <Skill img={"https://ico.vercel.app/c++/white"} alt="C++" pad="3" level={4} />
                <Skill img={"https://ico.vercel.app/javascript/white"} alt="Javascript" pad="3" level={4}/>
                <Skill img={"https://ico.vercel.app/css/white"} alt="CSS" pad="3" level={3}/>
            </div>
        </div>
    </div>
}

export default Languages
