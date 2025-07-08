import './ProjectCard.css'

function ProjectCard({ title, image, classes, tools, description, img_height, card_width }) {
    return <div className={classes ? "card project-card mb-2" + classes : "card project-card mb-3"} style={{ width: "18rem", height: "26rem" }}>
        <img className="card-img-top" src={"static/" + image} height="190px" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p>{description}</p>
            <a href="https://github.com/Santhosh-Paramasivam" className='link-light link-underline-opacity-0'>
                <img src='static/github.png' alt="GitHub Icon" width="20px" className='icon mx-2 mb-1' />
                Github
            </a>
        </div>

        {tools && <div className='card-footer d-flex flex-row justify-content-end g-5 px-1'>
            {tools.map((value) => {
                return <h6 key={value} className='my-0 px-1'><span className='badge bg-white text-dark rounded-1 p-2'>{value}</span></h6>
            })}
        </div>}
    </div>
}

export default ProjectCard