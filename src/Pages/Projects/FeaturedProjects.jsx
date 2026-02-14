import ProjectCard from '../../Components/ProjectCard'

function FeaturedProjects() {
    return <div className="grid w-100" style={{ scrollbarColor: '#f1f1f1 #6F66FD '}}>
        <div className="row row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 px-4">
            <div className="col d-flex flex-row justify-content-around">
                <ProjectCard
                    title="CampusFind"
                    image="campusfind.jpg"
                    tools={['Flutter', 'Flask', 'Firebase', 'Arduino']}
                    description={<p>A cross-platform mobile app to locate particular individuals across large campuses.<br/><br/>Frustrated by spending hours searching for professors in my college, I created this app to locate persons of interest with a couple taps on a mobile device.</p>}
                    links={[ { type:"Github", title:"Github", link: "campusfind.git" }, { type: "Youtube", title: "Demo #2", link:"Pch4oz6hjPw" } ]}
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
                    links = {[{ type:'Github', link:"campusfind-admin-frontend", title:"Frontend" }, { type: 'Github', link:"campusfind-admin-backend.git", title: "Backend" }]}
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
