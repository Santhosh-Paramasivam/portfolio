import ProjectCard from '../../Components/ProjectCard'

function FeaturedProjects() {
    return <div className="grid w-100" style={{ scrollbarColor: '#f1f1f1 #6F66FD '}}>
        <div className="row row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 px-4">
            <div className="col d-flex flex-row justify-content-around">
                <ProjectCard
                    title="CampusFind"
                    image="campusfind.jpg"
                    tools={['Flutter', 'Flask', 'Firebase', 'Arduino']}
                    description={"Quickly locate coworkers and teammates within large campuses with this mobile app"}
                    link="CampusFind.git"
                />
            </div>
            <div className="col d-flex flex-row justify-content-around">
                <ProjectCard
                    title="FeedFirst Web"
                    image="feedfirst_card.png"
                    tools={['React', 'Express', 'PostgreSQL']}
                    description={"Intuitive management system to bridge the gap between food banks and food insecure folks"}
                    link="FeedFirst2.git"
                />
            </div>
            <div className="col d-flex flex-row justify-content-around">
                <ProjectCard
                    title="CampusFind Admin"
                    image="campusfind_admin.jpeg"
                    tools={['React', 'Spring Boot', 'Firebase']}
                    description={"A full-stack website to register your organization and manage its presence on CampusFind"}
                    link="CampusFind-Admin_Backend.git"
                />
            </div>
           <div className="col d-flex flex-row justify-content-around">
                <ProjectCard
                    title="FeedFirst"
                    image="feedfirst_card.png"
                    tools={['Python', 'Tkinter', 'MySQL']}
                    description={"Intuitive management system to bridge the gap between food banks and food insecure folks"}
                    link="FeedFirst.git"
                />
            </div>
           <div className="col d-flex flex-row justify-content-around">
                <ProjectCard
                    title="Heart Disease Prediction"
                    image="heart-disease-prediction.png"
                    tools={['Numpy','Pandas','Scikit-learn', 'Tkinter']}
                    description={"Intuitive management system to bridge the gap between food banks and food insecure folks"}
                    link="Heart_Disease_Prediction.git"
                />
            </div>
 
        </div>
   </div>
}

export default FeaturedProjects
