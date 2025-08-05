import '../ProjectCarousel.css'
import '../../../Pages/Projects/ProjectTabs.css'

function HDP() {
    return <div className='card overflow-hidden project-card'>
        <img src='static/carousel/hdp.png' className='card-img-top'>
        </img>
        <div className='card-body px-4 py-3'>
            <h6 className='card-title fs-4' style={{ color: 'white' }}>Python Desktop Application to predict heart disease via 11 health metrics</h6>
        </div>
    </div>
}

export default HDP;