import ProjectCard from '../../Components/ProjectCard'

function IOTProjects() {
    return <div className="grid w-100" style={{ scrollbarColor: '#f1f1f1 #6F66FD ' }}>
        <div className="row row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 px-4">
            <div className="col d-flex flex-row justify-content-around">
                <ProjectCard
                    title="CampusFind RFID Check-In System"
                    image="campusfind-rfid.jpg"
                    tools={['Arduino C/C++']}
                    description={"Allows users to check into rooms via RFID-cards"}
                    links={[
                        { type:'Github', link: 'campusfind-rfid-backend.git', title: 'Flask Backend' }, 
                        { type:'Github', link: 'campusfind-rfid-station.git', title: 'RFID Station' }, 
                    ]}
                />
            </div>
        </div>
    </div>
}

export default IOTProjects
