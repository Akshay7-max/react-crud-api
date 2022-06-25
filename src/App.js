import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Error from "./components/pages/Error";
import Navbar from "./components/layout/Navbar";
import AddUser from "./components/users/AddUser";
import UpdateUser from "./components/users/UpdateUser";
import ViewUser from "./components/users/ViewUser";
import {Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/users/add" element={<AddUser/>} />
        <Route exact path="/users/update/:id" element={<UpdateUser/>} />
        <Route exact path="/users/:id" element={<ViewUser/>} />
        <Route path="*" component={<Error/>} />
      </Routes>
    </>
  );
};

export default App;
