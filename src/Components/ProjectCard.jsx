import './ProjectCard.css'

function ProjectCard({ title, image, classes, tools, description, img_height, card_width, link, links}) {
    return <div className={classes ? "card project-card mb-2" + classes : "card project-card mb-3"} style={{ width: "100%", maxWidth: 400, minWidth:300 }}>
        <img className="card-img-top" src={`static/` + image} />
        <div className="card-body">
            <h5 className="card-title" style={{ color: 'white' }}>{title}</h5>
            <p style={{ color: 'white' }}>{description}</p>
            { link && <a href={"https://github.com/Santhosh-Paramasivam/" + link} className='link-light link-underline-opacity-0'>
                <img src={`static/github.png`} alt="GitHub Icon" width="20px" className='icon mx-2 mb-1' />
                Github
            </a>
            }
            { links && 
                links.map((_) => {
                    if(_.type === 'Github') return <><div className="mt-2"><a href={"https://github.com/Santhosh-Paramasivam/" + _.link} className='link-light link-underline-opacity-0'>
                    <img src={`static/github.png`} alt="GitHub Icon" width="20px" className='icon mx-2 mb-1' />
                    {_.title}
                    </a>
                    </div>
                    </>
                    if(_.type === 'Youtube') return <><div className="mt-2"><a href={"https://www.youtube.com/watch?v=" + _.link} className='link-light link-underline-opacity-0'>
                    <img src={`https://cdn.simpleicons.org/youtube/white`} alt="Youtube Icon" width="20px" className='icon mx-2 mb-1' />
                    {_.title}
                    </a>
                    </div>
                    </>
                })    
            }
        </div>

        {tools && <div className='card-footer d-flex flex-row justify-content-end g-5 px-1'>
            {tools.map((value) => {
                return <h6 key={value} className='my-0 px-1'><span className='badge rounded-2 p-1 technologies-used'>{value}</span></h6>
            })}
        </div>}
    </div>
}

export default ProjectCard
