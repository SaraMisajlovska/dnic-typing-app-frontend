import React, { Component } from "react";
import Course from "./Course/Course";
import './Courses.css';

class Courses extends Component {

    getCoursesPage = (props) => {
        return this.props.courses.map((course, index) => {
            console.log("courses " + course.courseName);
            return (
                <Course
                    key={index}
                    course={course}>
                </Course>

            );
        })
    }

    render() {
        const courses = this.getCoursesPage();
        return (
            <div className="container-sm pt-2 lighter ">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-6">
                        <h2>Choose a course to start practicing</h2>
                    </div>
                    <div className="col-sm-5"></div>

                </div>
                {courses}
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#"> <span aria-hidden="true">&laquo;</span></a>
                                </li>
                                <li className="page-item"><a className="page-link item-active" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#"> <span aria-hidden="true">&raquo;</span></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }



}

export default Courses;