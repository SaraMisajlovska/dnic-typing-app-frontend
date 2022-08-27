import React from "react";
import { Link } from "react-router-dom";

const footer = (props) => {
    return (
    <div className={"mt-auto"}>

        <footer>
            <ul className={"nav justify-content-center border-bottom pb-3 mb-3"}>
                <li className={"nav-item"}><Link to="/home" className={"nav-link px-2 text-muted"}>Home</Link></li>
                <li className={"nav-item"}><Link to="/courses" className={"nav-link px-2 text-muted"}>Courses</Link></li>
                <li className={"nav-item"}><Link to="/profile" className={"nav-link px-2 text-muted"}>My Profile</Link></li>
                <li className={"nav-item"}><Link to="faqs" className={"nav-link px-2 text-muted"}>FAQs</Link></li>
            </ul>
            <p className={"text-center text-muted"}>191517 -- Sara Misajlovska</p>
        </footer>
        </div>
    );
}

export default footer;