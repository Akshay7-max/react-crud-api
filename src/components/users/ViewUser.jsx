import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";

const ViewUser = () => {
    const { id } = useParams();

    const [student, setStudent] = useState({
        name: "",
        email: "",
        contactNo: "",
        age: "",
        location: ""
    });

    useEffect(() => {
        const getStudentData = async () => {
            try {
                const result = await axios.get(`http://localhost:1111/users/${id}`);
                console.log(result.data);
                setStudent(result.data);
            } catch (error) {
                console.log("Something is wrong");
            }
        };
        getStudentData();
    }, [id]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div class="card text-center mt-5">
                        <h3 class="card-header">Personal Information</h3>
                        <div class="card-body">
                            <p class="card-text">
                                <h5>Name : {student.name}</h5>
                                <h5>Email : {student.email}</h5>
                                <h5>Contact Number : {student.contactNo}</h5>
                                <h5>Age : {student.age}</h5>
                                <h5>Location : {student.location}</h5>
                            </p>

                            {/* <button className="btn btn-outline-info btn-sm"> */}
                            <Link to="/" className="btn btn-outline-info btn-sm mr-2">
                                Back to home
              </Link>
                            {/* </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewUser;
