import Skill from '../../Components/Skill'

function Frameworks() {
    return <div className='card mx-5 mt-3' data-bs-theme='dark' id='project-card' style={{ backgroundColor: '#211A43' }}>
        <div className="grid mt-3">
            <div className="row px-3">
                <Skill img={"https://ico.vercel.app/springboot/white"} alt="SpringBoot" pad="3" />
                <Skill img={"https://ico.vercel.app/flask/white"} alt="Flask" pad="3" />
                <Skill img={"https://ico.vercel.app/express/white"} alt="Flask" pad="3" />
                <Skill img={"https://ico.vercel.app/flutter/white"} alt="Flutter" pad="3" />
                <Skill img={"static/skills/ctk.png"} alt="Tkinter" pad="3" />
            </div>
        </div>
    </div>
}

export default Frameworks