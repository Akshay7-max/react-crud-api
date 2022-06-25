import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import UpdateIcon from "@material-ui/icons/Update";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getAllStudentData = async () => {
      try {
        const result = await axios.get("http://localhost:1111/users");
        setStudents(result.data);
        console.log("result", result.data);
      } catch (error) {
        console.log("Something is wrong");
      }
    };
    getAllStudentData();
  }, []);

  const removeStudentRecord = async id => {
    await axios.delete(`http://localhost:1111/users/${id}`);
    setStudents(preValue => {
      return preValue.filter((value, idx) => {
        return id !== value.id;
      });
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-3 d-flex justify-content-end">
          <Link
            to={`/users/add`}
            className="btn btn-outline-success btn-sm"
            title="Add New Record"
          >
            <AddCircleIcon />
          </Link>
        </div>
        <div className="col-md-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Index</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">ContactNumber</th>
                <th scope="col">Age</th>
                <th scope="col">Location</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.contactNo}</td>
                    <td>{student.age}</td>
                    <td>{student.location}</td>
                    <td>
                      <Link
                        to={`/users/${student.id}`}
                        className="btn btn-outline-info btn-sm"
                        title="View Record"
                      >
                        <VisibilityIcon />
                      </Link>
                      &nbsp; &nbsp;

                      <Link
                        to={`/users/update/${student.id}`}
                        className="btn btn-outline-success btn-sm"
                        title="Update Record"
                      >
                        <UpdateIcon />
                      </Link>
                      &nbsp; &nbsp;
                      
                      <button
                        className="btn btn-outline-danger btn-sm"
                        title="Remove Record"
                        onClick={() => {
                          removeStudentRecord(student.id);
                        }}
                      >
                        <DeleteOutlineIcon />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
