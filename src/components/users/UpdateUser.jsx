import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { async } from 'q';

const UpdateUser = () => {
    const { id } = useParams();
    let navigate = useNavigate();

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
                const student = await axios.get(`http://localhost:1111/users/${id}`);
                setStudent(student.data);
                console.log(student.data);
            } catch (error) {
                console.log("Something is wrong");
            }
        }
        getStudentData();
    }, [id])

    const inputEvent = (event) => {
        const {value, name} = event.target;
        console.log(event.target.value);

        setStudent((preValue)=>{
            return{
                ...preValue,
                [name]:value
            }
        })
    }

    const updateStudentData = async(event) =>{
        event.preventDefault();
        try{
            await axios.put(`http://localhost:1111/users/${id}`,student);
            navigate("/");
        }catch(error){
            console.log("Something is wrong");
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="text-center text-uppercase my-5">Update record</h3>
                </div>
                <div className="col-md-12">
                    <form onSubmit={updateStudentData}>
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
                            Update record
            </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateUser
