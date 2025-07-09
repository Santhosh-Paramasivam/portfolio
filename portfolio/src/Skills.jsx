import Skill from './Skill'

function Skills() {
    return <div className='card mx-5 mt-3' data-bs-theme='dark' id='project-card' style={{ backgroundColor: '#211A43' }}>
        <div className="grid mt-3">
            <div className="row px-3">
                <Skill img="static/skills/java.png" alt="Java" pad="2"/>
                <Skill img={"https://ico.vercel.app/python/white"} alt="Python" pad="3"/>
                <Skill img={"https://ico.vercel.app/c++/white"} alt="C++" pad="3"/>
                <Skill img={"https://ico.vercel.app/dart/white"} alt="Dart" pad="3" />
                <Skill img={"https://ico.vercel.app/html5/white"} alt="HTML5" pad="3"/>
                <Skill img={"https://ico.vercel.app/css/white"} alt="CSS" pad="3"/>
                <Skill img={"https://ico.vercel.app/javascript/white"} alt="Javascript" pad="3"/>
                <Skill img={"https://ico.vercel.app/react/white"} alt="React" pad="3"/>
            </div>
        </div>
    </div>
}

export default Skills