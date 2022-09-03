import avatar from './avatar.png';
import React from 'react';
import './Profile.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Profile = (props) => {
    const history = useNavigate();
    const [isHovering, setIsHovering] = useState(false);

    const [formData, updateFormData] = React.useState({
        name: "",
        surname: "",
        country: "",
        city: "",
        email: "",
        username: ""
    });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.user.name;
        const surname = formData.surname !== "" ? formData.surname : props.user.surname;
        const country = formData.country !== "" ? formData.country : props.user.country;
        const city = formData.city !== "" ? formData.city : props.user.city;
        const email = formData.email !== "" ? formData.email : props.user.email;
        const username = props.user.username;

        props.onEditUser(username, name, surname, city, country, email);
        history("/profile");
    };

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    console.log(props.user)
    return (
        <div className="container">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-7">
                    <h2>Edit your personal information {props.user.name} </h2>
                </div>
                <div className="col-4"></div>
            </div>
            <div className="row">
                <div className="col-1">
                </div>
                <div className="col-4">
                    <img className='profile' src={avatar} alt="avatar" />
                </div>
                <div className="col-7">
                    <form onSubmit={onFormSubmit}>
                        <div className='row'>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                        <div className="row pb-2">
                            <div className='col-6'>
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder={props.user.name}
                                    onChange={handleChange} />
                            </div>
                            <div className='col-6'>
                                <label htmlFor="surname" className="form-label">Surname</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="surname"
                                    name="surname"
                                    placeholder={props.user.surname}
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row pb-2">
                            <div className='col-6'>
                                <label htmlFor="city" className="form-label">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    placeholder={props.user.city}
                                    onChange={handleChange} />
                            </div>
                            <div className='col-6'>
                                <label htmlFor="country" className="form-label">Country</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="country"
                                    name="country"
                                    placeholder={props.user.country}
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row pb-2">
                            <div className='col-6'>
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder={props.user.email}
                                    onChange={handleChange} />
                            </div>
                            <div className='col-6'>
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control "
                                    id="username"
                                    name="username"
                                    placeholder={props.user.username}
                                    disabled
                                    onMouseOver={handleMouseOver}
                                    onMouseOut={handleMouseOut}
                                />
                                {isHovering && <p>Username cannot be changed</p>}
                            </div>
                        </div>
                        <div className="row pb-2">
                            <div className='col'>
                                <button id='submit' 
                                type='submit' className='btn btn-primary float-end'
                                onClick={() => { alert('Changes saved succesfully!')}}
                                >Save</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default Profile;