import Skill from '../../Components/Skill'

function Frameworks() {
    return <div className='card mx-5 mt-3 align-self-center' data-bs-theme='dark' id='project-card' style={{ backgroundColor: '#211A43', maxWidth: 700}}>
        <div className="grid mt-3">
            <div className="row px-3 row-cols-xs-2 row-cols-sm-3 row-cols-md-6 row-cols-lg-6">
                <Skill img={`static/skills/ctk.png`} alt="Tkinter" pad="3" level={5}/>
                <Skill img={"https://ico.vercel.app/react/white"} alt="React" pad="3" level={4}/>
                <Skill img={"https://ico.vercel.app/express/white"} alt="Express.js" pad="3" level={4}/>
                <Skill img={"https://ico.vercel.app/springboot/white"} alt="SpringBoot" pad="3" level={4}/>
                <Skill img={"https://ico.vercel.app/flutter/white"} alt="Flutter" pad="3" level={3}/>
                <Skill img={"https://ico.vercel.app/flask/white"} alt="Flask" pad="3" level={2}/>
            </div>
        </div>
    </div>
}

export default Frameworks
