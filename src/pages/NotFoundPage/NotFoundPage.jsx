const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/404.gif"

function ErrorPage() {
    return (
        <div className="d-flex justify-content-center">
            <img src={imgURL} alt="404 error gif" className="page-img" />
        </div>
    )
}

export default ErrorPage