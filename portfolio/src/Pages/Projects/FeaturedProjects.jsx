import ProjectCard from '../../Components/ProjectCard'

function FeaturedProjects() {
    return <div className="grid w-100" style={{ height: '550px', overflowY: "scroll", scrollbarColor: '#f1f1f1 #6F66FD ', overflowX: 'clip' }}>
        <div className="row">
            <div className="col-xl-4 col-lg-6 col-sm-12 col-md-6 d-flex flex-row justify-content-center">
                <ProjectCard
                    title="CampusFind"
                    image="campusfind.jpg"
                    tools={['Flutter', 'Flask', 'Firebase', 'Arduino']}
                    description={"Quickly locate coworkers and teammates within large campuses with this mobile app"}
                    link="CampusFind.git"
                />
            </div>
            <div className="col sm-12 md-6 d-flex flex-row justify-content-center">
                <ProjectCard
                    title="FeedFirst"
                    image="feedfirst_card.png"
                    tools={['Python', 'Tkinter', 'MySQL']}
                    description={"Intuitive management system to bridge the gap between food banks and food insecure folks"}
                    link="FeedFirst.git"
                />
            </div>
            <div className="col sm-12 md-6 d-flex flex-row justify-content-center">
                <ProjectCard
                    title="CampusFind Admin"
                    image="campusfind_admin.jpeg"
                    tools={['React', 'Spring Boot', 'Firebase']}
                    description={"A full-stack website to register your organization and manage its presence on CampusFind"}
                    link="FeedFist.git"
                />
            </div>
        </div>
    </div>
}

export default FeaturedProjects