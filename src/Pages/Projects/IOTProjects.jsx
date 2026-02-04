import ProjectCard from '../../Components/ProjectCard'

function IOTProjects() {
    return <div className="grid w-100" style={{ scrollbarColor: '#f1f1f1 #6F66FD ' }}>
        <div className="row row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 px-4">
            <div className="col d-flex flex-row justify-content-around">
                <ProjectCard
                    title="CampusFind RFID Backend"
                    image="campusfind.jpg"
                    tools={['Python', 'Flask']}
                    description={"A REST API server that allows CampusFind database to be updated by the RFID system"}
                    link="campusfind-checkin-backend.git"
                />
            </div>
            <div className="col d-flex flex-row justify-content-around">
                <ProjectCard
                    title="CampusFind RFID Check-In System"
                    image="campusfind-rfid.jpg"
                    tools={['Arduino C/C++']}
                    description={"Allows users to check into rooms via RFID-cards"}
                    link="CampusFind-RFIDStation.git"
                />
            </div>
        </div>
    </div>
}

export default IOTProjects
