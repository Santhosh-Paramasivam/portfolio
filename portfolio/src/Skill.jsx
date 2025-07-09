function Skill({sm,md,xl,img, alt, pad}) {
    return <div className={`col-sm-3 col-md-2 d-flex flex-row justify-content-center mb-3`} data-toggle="tooltip" data-placement="right" title="Tooltip on right">
        <div className={"card p-" + pad} style={{ width: '80px', height: '80px', backgroundColor: '#6F66FD ' }}>
            <img src={img} alt={alt}></img>
        </div>
    </div>
}

export default Skill