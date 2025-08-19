function Brand() {
    return <div className="container">
        <div className="d-flex flex-row mb-2">
            <img src={`${import.meta.env.BASE_URL}static/santhosh_github.png`} width="85px" height="85px" className="my-1"></img>
            <div className="d-flex flex-column mx-3">
                <h3 style={{ fontFamily: 'imprima', color: '#96DEFF' }} className="mx-2 py-0 my-0 fs-1">Santhosh</h3>
                <h3 style={{ fontFamily: 'imprima', color: '#96DEFF' }} className="mx-2 py-0 my-0 fs-1">Paramasivam</h3>
            </div>
        </div>
        <h4 style={{ fontFamily: 'imprima', color: '#96DEFF' }}>Software Engineer</h4>
    </div>
}

export default Brand