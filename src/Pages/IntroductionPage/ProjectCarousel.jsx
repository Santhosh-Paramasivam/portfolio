import './ProjectCarousel.css'
import '../../Pages/Projects/ProjectTabs.css'
import CarouselCard from '../../Components/CarouselCard'

function ProjectCarousel() {
    return <div id="carouselExampleInterval" className='carousel slide' data-bs-ride='carousel' data-bs-theme='dark'>
        <div className='carousel-inner'>
            <div className='carousel-item active'>
                <CarouselCard caption='Python Desktop Application to predict heart disease via 11 health metrics' src="hdp.png"/>
            </div>
            <div className='carousel-item'>
                <CarouselCard caption='CampusFind : Flutter app to locate coworkers and teammates across large institutions' src="campusfind.png"/>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
}

export default ProjectCarousel

