import './Skill.css'

function Skill({ sm, md, xl, img, alt, pad, level }) {

    
    return <div className={`col-sm-3 col-md-2 d-flex flex-row justify-content-center align-items-center mb-3`} data-toggle="tooltip" data-placement="right" title={alt}>
        <div className={"card p-" + pad} style={{ width: '80px', height: '105px', backgroundColor: '#6F66FD' }}>
            <img src={img} alt={alt}></img>
            <div className={"row px-1 my-3"} style={{ width: '77px', height: '20px' }}>
                <div className={level >= 1 ? 'col px-0 py-0 my-0 skill-bars bg-white' : 'col px-0 py-0 my-0 skill-bars'}>
                </div>
                <div className={level >= 2 ? 'col px-0 mx-1 py-0 my-0 skill-bars bg-white' : 'col px-0 py-0 my-0 skill-bars'}>
                </div>
                <div className={level >= 3 ? 'col px-0 py-0 my-0 skill-bars bg-white' : 'col px-0 py-0 my-0 skill-bars'}>
                </div>
                <div className={level >= 4 ? 'col px-0 mx-1 py-0 my-0 skill-bars bg-white' : 'col px-0 py-0 my-0 skill-bars'}>
                </div>
                <div className={level >= 5 ? 'col px-0 py-0 my-0 skill-bars bg-white' : 'col px-0 py-0 my-0 skill-bars'}>
                </div>
            </div>
        </div>
    </div>
}

export default Skill