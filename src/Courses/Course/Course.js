import React from "react";
import './Course.css';

const Course = (props) => {
    const displaySuccessfulEnroll = () => {
        //alert("Course " + props.course.courseName + " successfully enrolled!")
    }
    return (
        <div>
            <div className="row">
            <div className="col-sm-1">
                </div>
                <div className="col-sm-5">
                    <img src={props.course.imageUrl} alt="courseImage"/>
                </div>
                <div className="col-sm-5">
                    <h6>{props.course.level}</h6>
                    <h3>{props.course.courseName}</h3>
                    <p>{props.course.description}
                    </p>
                    <button className="btn btn-primary"
                        onClick={() => { alert('Course ' + props.course.courseName + ' successfully enrolled!') }}
                    >
                        Enroll
                    </button>
                </div>
            </div>
            <hr style={{ maxWidth: 1150 + 'px' }}></hr>
        </div>
    );
}
export default Course;