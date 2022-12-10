import imgURL from "./404.png"
import './NotFoundPage.css'

function ErrorPage() {
    return (
        <div className="NotFoundPage">
            <h2 className="m-3">404 - Page Not Found</h2>
            <img src={imgURL} alt="404 error" />
        </div>
    )
}

export default ErrorPage