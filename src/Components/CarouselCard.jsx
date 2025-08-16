function CarouselCard({src, caption}) {
    return <div className='card overflow-hidden project-card'>
        <img src={'static/carousel/' + src} className='card-img-top'>
        </img>
        <div className='card-body px-4 py-3'>
            <h6 className='card-title fs-5' style={{ color: 'white' }}>{caption}</h6>
        </div>
    </div>
}

export default CarouselCard;