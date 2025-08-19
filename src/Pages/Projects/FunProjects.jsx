import ProjectCard from '../../Components/ProjectCard'

function FunProjects() {
    return <div className="grid w-100" style={{ height: '550px', overflowY: "scroll", scrollbarColor: '#f1f1f1 #6F66FD ', overflowX: 'clip' }}>
        <div className="row">
            <div className="col-xl-4 col-lg-6 col-sm-12 col-md-6 d-flex flex-row justify-content-center">
                <ProjectCard
                    title="Contact Management System"
                    image="cms.png"
                    tools={['JavaScript','Node.js', 'Boostrap', 'HTML']}
                    description={"A contact management system utilising a custom HTTP server and a custom text-based database"}
                    link="contact-ms.git"
                />
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12 col-md-6 d-flex flex-row justify-content-center">
                <ProjectCard
                    title="CLI Maze"
                    image="cli-maze.png"
                    tools={['C']}
                    description={"My first ever project : A GUI maze app that runs in the terminal"}
                    link="cli-maze.git"
                />
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12 col-md-6 d-flex flex-row justify-content-center">
                <ProjectCard
                    title="WisdomBot"
                    image="wb.jpg"
                    tools={['Python', 'SQLite', 'Flask']}
                    description={"WisdomBot is a Discord bot that posts random inspirational quotes on demand"}
                    link="WisdomBot.git"
                />
            </div>


        </div>
    </div>
}

export default FunProjects