import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div>
            <h2>Opps!!!</h2>
            <p>{error.statusText || error.message}</p>
            <p>{error.status === 404 && "Page Not Found"}</p>
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;