function ProjectCarousel() {
    return <div id="carouselExampleInterval" className='carousel slide' data-bs-ride='carousel' data-bs-theme='dark'>
        <div className='carousel-inner'>
            <div className='carousel-item active '>
                <img src='static/hdp.jpg' className="d-block w-100"></img>
            </div>
            <div className='carousel-item'>
                <img src='static/hdp.jpg' className="d-block w-100"></img>
            </div>
            <div className='carousel-item'>
                <img src='static/hdp.jpg' className="d-block w-100"></img>
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