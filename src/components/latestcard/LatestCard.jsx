

function LatestCard() {
    return(
        <>
            <MDBRow className="gx-5 border-bottom pb-4 mb-5">
                <MDBCol md="6" className="mb-4">
                <MDBRipple
                    className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                    rippleTag="div"
                    rippleColor="light"
                >
                    <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/080.webp"
                    className="w-100"
                    alt="feed image"
                    />
                    <a href="#!">
                    <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                    </a>
                </MDBRipple>
                </MDBCol>
                <MDBCol md="6" className="mb-4">
                <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                    News of the day
                </span>
                <h4>
                    <strong>Facilis consequatur eligendi</strong>
                </h4>
                <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                    consequatur eligendi quisquam doloremque vero ex debitis veritatis
                    placeat unde animi laborum sapiente illo possimus, commodi
                    dignissimos obcaecati illum maiores corporis.
                </p>
                <MDBBtn>Read More</MDBBtn>
                </MDBCol>
            </MDBRow>
        </>
    )
}

export default LatestCard