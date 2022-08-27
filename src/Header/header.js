import React from "react";
import { Link } from "react-router-dom";
import './header.css';

const header = (props) => {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-sm dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Typing App</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav nav-tabs ms-auto">

                            <li className="nav-item active">
                                <Link className="nav-link" to={"/home"}>Home</Link>
                            </li>

                            <li className="nav-item active">
                                <Link className="nav-link" to={"/courses"}>Courses</Link>
                            </li>

                            <li className="nav-item active">
                                <Link className="nav-link" to={"/profile"}>My Profile</Link>
                            </li>

                            <li className="nav-item active">
                                <Link className="nav-link" to={"/logout"}>Log out</Link>
                            </li>

                            <li className="nav-item active">
                                <Link className="nav-link" to={"/faqs"}>FAQs</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default header;