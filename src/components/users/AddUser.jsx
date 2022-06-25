import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
    let navigate = useNavigate();
    const [student, setStudent] = useState({
        name: "",
        email: "",
        contactNo: "",
        age: "",
        location: ""
    });

    const inputEvent = event => {
        const { value, name } = event.target;
        console.log(event.target.value);

        setStudent(preValue => {
            return {
                ...preValue,
                [name]: value
            };
        });
    };

    const submitStudentData = async (event) => {
        try {
            event.preventDefault();
            await axios.post(`http://localhost:1111/users`, student);

            navigate("/");
        } catch (error) {
            console.log("Something is wrong");
        }
    };

    return (
        <div className="container">
            <div className="row">
            <div className="col-md-12">
            <h3 className="text-center text-uppercase my-5">Add new record</h3>
            </div>
                <div className="col-md-12">
                    <form onSubmit={submitStudentData}>
                        <div className="mb-3">
                            <label className="form-label">Name :</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter name"
                                value={student.name}
                                name="name"
                                onChange={inputEvent}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email :</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                value={student.email}
                                name="email"
                                onChange={inputEvent}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Contact Number :</label>
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Enter contact number"
                                value={student.contactNo}
                                name="contactNo"
                                onChange={inputEvent}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Age :</label>
                            <input
                                type="number"
                                className="form-control"
                                min="1"
                                max="100"
                                value="18"
                                value={student.age}
                                name="age"
                                onChange={inputEvent}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Location :</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter location"
                                value={student.location}
                                name="location"
                                onChange={inputEvent}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-outline-info btn-sm"
                        >
                            Submit
            </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
