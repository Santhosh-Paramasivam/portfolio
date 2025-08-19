function CarouselCard({src, caption}) {
    return <div className='card project-card mx-3 my-3'>
        <div className='card-body px-3 pt-3 pb-2'>
            <h6 className='card-title fs-5 py-0' style={{ color: 'white' }}>{caption}</h6>
        </div>
        <img src={`${import.meta.env.BASE_URL}static/carousel/` + src} className='card-img-bottom'>
        </img>
    </div>
}

export default CarouselCard;