import ProjectCard from './ProjectCard'

function FeaturedProjects() {
    return <div className="grid w-100" style={{height: '550px',overflowY: "scroll", scrollbarColor: '#f1f1f1 #6F66FD ', overflowX: 'clip' }}>
        <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-6 d-flex flex-row justify-content-center">
                <ProjectCard
                    title="CampusFind"
                    image="campusfind.png"
                    tools={['Flutter', 'Flask', 'Firebase', 'Arduino']}
                    description={"Quickly locate coworkers and teammates within large campuses with this mobile app"}
                />
            </div>
            <div className="col sm-12 md-6 d-flex flex-row justify-content-center">
                <ProjectCard
                    title="CampusFind"
                    image="campusfind.png"
                    tools={['Flutter', 'Flask', 'Firebase', 'Arduino']}
                    description={"Quickly locate coworkers and teammates within large campuses with this mobile app"}
                />
            </div>
            <div className="col sm-12 md-6 d-flex flex-row justify-content-center">
                <ProjectCard
                    title="CampusFind"
                    image="campusfind.png"
                    tools={['Flutter', 'Flask', 'Firebase', 'Arduino']}
                    description={"Quickly locate coworkers and teammates within large campuses with this mobile app"}
                />
            </div>

        </div>
    </div>
}

export default FeaturedProjects