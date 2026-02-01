import './Links.css'

function Links() {
    return (
        <div className="d-flex flex-column">
        <>
            <a id="resume-link" style={{textDecoration: 'none', }} href={`static/resume/resume.pdf`} download><button id="resume-button" className="btn mt-3" >Resume</button></a> <div className="d-flex flex-row mt-3">
                <a
                    href="https://github.com/Santhosh-Paramasivam"
                    className="mx-2"
                >
                    <img
                        src={`static/github.png`}
                        alt="GitHub Icon"
                        width="35px"
                        className="icon"
                    ></img>
                </a>
                <a href="https://www.linkedin.com/in/santhosh-paramasivam-2a430a267/">
                    <img
                        src={`static/linkedin.png`}
                        alt="LinkedIn"
                        width="38px"
                        className="icon"
                    ></img>
                </a>
                <a
                    href="mailto:santhoshparamasivam78@gmail.com"
                    className="mx-2"
                >
                    <img
                        src={`static/email.png`}
                        alt="Email"
                        width="38px" className="icon"
                    ></img> </a>
            </div>
        </>
        </div>
    );
}

export default Links;
