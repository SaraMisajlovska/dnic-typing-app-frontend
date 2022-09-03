import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="container lighter">
            <div className="row p-3">
                <div className="d-flex justify-content-center "><h3>Please log in to continue!</h3></div>
            </div>
            <div className="row p-3">
                <div className="d-flex justify-content-center"><Link to={"/home"} className='btn btn-primary float-end'>Log In</Link></div>
            </div>
        </div>
    );
}

export default Login;