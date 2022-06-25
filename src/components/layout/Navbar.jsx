import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 navbar-bgcol">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">Navbar</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link active">Home</Link>
                                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/about" className="nav-link">About</Link>
                                            {/* <a className="nav-link" href="#">Features</a> */}
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/contact" className="nav-link">Contact</Link>
                                            {/* <a className="nav-link" href="#">Pricing</a> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar
